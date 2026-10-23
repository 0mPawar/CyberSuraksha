/**
 * CyberSuraksha API Server
 * Single application configuration and HTTP server entry point.
 */

const express = require('express');
const cors = require('cors');
const config = require('./config/environmentconfig');
const db = require('./config/databaseconfig');
const logger = require('./utils/loggerutil');
const response = require('./utils/responseutil');

// Routes
const authRoutes = require('./routes/autharoutes');
const userRoutes = require('./routes/useraroutes');
const roleRoutes = require('./routes/rolearoutes');

// Middlewares
const errorHandler = require('./middlewares/errorhandlermiddleware');

// Initialize Express Application
const app = express();

// ------------------------------------------------------------------------------
// 1. SECURITY HEADERS & CORS
// ------------------------------------------------------------------------------
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '0');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  if (config.isProduction) {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
  next();
});

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (such as mobile apps, curl, or server-to-server)
    if (!origin) return callback(null, true);

    const allowed = [config.cors.frontendOrigin, 'http://localhost:5173', 'http://127.0.0.1:5173'];
    if (allowed.includes(origin) || !config.isProduction) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy: Not allowed by origin'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

app.use(cors(corsOptions));

// ------------------------------------------------------------------------------
// 2. REQUEST PARSERS
// ------------------------------------------------------------------------------
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// ------------------------------------------------------------------------------
// 3. HEALTH CHECK ENDPOINT
// ------------------------------------------------------------------------------
app.get('/api/health', async (req, res) => {
  let dbStatus = 'disconnected';
  try {
    const isDbConnected = await db.testConnection();
    dbStatus = isDbConnected ? 'connected' : 'disconnected';
  } catch {
    dbStatus = 'disconnected';
  }

  return response.success(res, 200, 'CyberSuraksha API is operational', {
    status: 'UP',
    database: dbStatus,
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime())
  });
});

// ------------------------------------------------------------------------------
// 4. API ROUTE REGISTRATION
// ------------------------------------------------------------------------------
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);

// ------------------------------------------------------------------------------
// 5. 404 NOT FOUND HANDLER
// ------------------------------------------------------------------------------
app.use((req, res) => {
  return response.error(
    res,
    404,
    `Route not found: ${req.method} ${req.originalUrl}`,
    'NOT_FOUND'
  );
});

// ------------------------------------------------------------------------------
// 6. CENTRALIZED ERROR HANDLER
// ------------------------------------------------------------------------------
app.use(errorHandler);

// ------------------------------------------------------------------------------
// 7. SERVER STARTUP & LIFECYCLE MANAGEMENT
// ------------------------------------------------------------------------------
let server = null;

function startServer(port = config.port) {
  // Validate configuration before starting
  config.validateConfig();

  server = app.listen(port, async () => {
    logger.info('SERVER', `API server started on port ${port} (Environment: ${config.env})`);

    // Verify database connectivity
    try {
      const isDbHealthy = await db.testConnection();
      if (!isDbHealthy) {
        logger.warn('DATABASE', 'Server started, but MySQL is currently unreachable. Database features will fail until connection is restored.');
      }
    } catch (dbErr) {
      logger.error('DATABASE', 'Database initial connection check failed', dbErr);
    }
  });

  return server;
}

// Graceful shutdown
async function gracefulShutdown(signal) {
  logger.info('SERVER', `Received ${signal}. Gracefully shutting down...`);

  if (server) {
    server.close(async () => {
      logger.info('SERVER', 'HTTP server stopped accepting connections');
      try {
        await db.closePool();
      } catch (err) {
        logger.error('DATABASE', 'Error closing database pool', err);
      }
      process.exit(0);
    });

    // Force shutdown after 10 seconds timeout
    setTimeout(() => {
      logger.error('SERVER', 'Forced shutdown after timeout');
      process.exit(1);
    }, 10000).unref();
  } else {
    process.exit(0);
  }
}

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

// Only start the server automatically if executed directly
if (require.main === module) {
  startServer();
}

module.exports = {
  app,
  startServer
};