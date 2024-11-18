import React from 'react';

const TechBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0">
          {/* Animated grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 0, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 0, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'move 15s linear infinite',
            boxShadow: 'inset 0 0 150px rgba(0, 255, 0, 0.5)'
          }} />
          
          {/* Radial overlay */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.15) 0%, transparent 60%)',
          }} />
        </div>
      </div>
    </div>
  );
};

export default TechBackground;