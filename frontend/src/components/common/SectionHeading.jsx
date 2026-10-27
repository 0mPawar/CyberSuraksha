import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  badgeColor = 'blue',
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  const badgeColors = {
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    red: 'bg-red-100 text-red-800 border-red-200',
    amber: 'bg-amber-100 text-amber-800 border-amber-200',
    teal: 'bg-teal-100 text-teal-800 border-teal-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200',
  };

  return (
    <div className={`max-w-3xl mb-10 ${alignClass}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border mb-3 ${
            badgeColors[badgeColor] || badgeColors.blue
          }`}
        >
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

