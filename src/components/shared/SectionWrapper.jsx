import React from 'react';

const SectionWrapper = ({ 
  children, 
  id = '', 
  className = '', 
  bg = 'white', // 'white', 'gray', 'dark'
  badge = '',
  title = '', 
  subtitle = '',
  ...props 
}) => {
  let bgClass = '';
  if (bg === 'gray') bgClass = 'section-bg';
  if (bg === 'dark') bgClass = 'section-dark';

  return (
    <section 
      id={id} 
      className={`section ${bgClass} ${className}`} 
      {...props}
    >
      <div className="container">
        {(badge || title || subtitle) && (
          <div className="section-header animate-fade-in">
            {badge && <span className="section-label">{badge}</span>}
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
