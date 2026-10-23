/**
 * CyberSuraksha MySQL Database Configuration & Pool Manager
 * Provides a resilient connection pool, parameterized query execution,
 * and robust database transaction wrappers.
 */

const mysql = require('mysql2/promise');
const config = require('./environmentconfig');
const logger = require('../utils/loggerutil');

let pool = null;

function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: config.db.host,
      port: config.db.port,
      user: config.db.user,
      password: config.db.password,
      database: config.db.database,
      waitForConnections: config.db.waitForConnections,
      connectionLimit: config.db.connectionLimit,
      queueLimit: config.db.queueLimit,
      timezone: config.db.timezone,
      decimalNumbers: config.db.decimalNumbers
    });
  }
  return pool;
}

const databaseconfig = {
  get pool() {
    return getPool();
  },

  /**
   * Execute a parameterized SQL query
   * @param {string} sql
   * @param {Array} params
   * @param {object} [connection] Optional active transaction connection
   * @returns {Promise<[Array, Array]>} [rows, fields]
   */
  async query(sql, params = [], connection = null) {
    const executor = connection || getPool();
    try {
      const [results, fields] = await executor.query(sql, params);
      return [results, fields];
    } catch (err) {
      logger.error('DATABASE', `Query execution failed: ${sql.slice(0, 80)}...`, err);
      throw err;
    }
  },

  /**
   * Execute a database transaction safely
   * @param {Function} callback Callback receiving an active connection: async (conn) => {...}
   * @returns {Promise<any>}
   */
  async transaction(callback) {
    const connection = await getPool().getConnection();
    await connection.beginTransaction();
    try {
      const result = await callback(connection);
      await connection.commit();
      return result;
    } catch (err) {
      await connection.rollback();
      logger.error('DATABASE', 'Transaction rolled back due to error', err);
      throw err;
    } finally {
      connection.release();
    }
  },

  /**
   * Test database connectivity
   * @returns {Promise<boolean>}
   */
  async testConnection() {
    try {
      const [rows] = await getPool().query('SELECT 1 AS health');
      if (rows && rows[0] && rows[0].health === 1) {
        logger.info('DATABASE', 'MySQL connection established');
        return true;
      }
      return false;
    } catch (err) {
      logger.error('DATABASE', `Failed to connect to MySQL database "${config.db.database}" at ${config.db.host}:${config.db.port}`, err);
      return false;
    }
  },

  /**
   * Graceful shutdown of MySQL pool
   */
  async closePool() {
    if (pool) {
      await pool.end();
      pool = null;
      logger.info('DATABASE', 'MySQL connection pool closed');
    }
  }
};

module.exports = databaseconfig;

