
import React from 'react';

interface ActionButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  inverse?: boolean;
  gradient?: boolean;
  animated?: boolean;
  wave?: boolean;
  glow?: boolean;
  textOnly?: boolean;
  boxed?: boolean;
  highlighted?: boolean;
  darkHighlighted?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  children, 
  href, 
  className, 
  inverse = false, 
  gradient = false,
  animated = false,
  wave = false,
  glow = false,
  textOnly = false,
  boxed = false,
  highlighted = false,
  darkHighlighted = false
}) => {
  // Create animation spans for text if highlighted button
  const renderAnimatedText = (text: React.ReactNode) => {
    if (highlighted && typeof text === 'string') {
      return (
        <span className="subtle-wave-text">
          {text.split('').map((char, index) => (
            <span 
              key={index} 
              className="subtle-char" 
              style={{ animationDelay: `${index * 0.025}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>
      );
    }
    return text;
  };

  if (darkHighlighted) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block font-bold text-darknavy bg-white py-3 px-5 rounded-full shadow-inner border-l-4 border-neon/50 transition-all duration-300 hover:bg-white/90 shadow-[0_0_15px_rgba(235,255,0,0.3)] ${className}`}
      >
        {renderAnimatedText(children)}
      </a>
    );
  }

  if (highlighted) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block font-bold text-darknavy bg-white py-3 px-5 rounded-full shadow-inner border-l-4 border-neon/50 transition-all duration-300 hover:bg-white/90 shadow-[0_0_15px_rgba(235,255,0,0.3)] relative overflow-hidden ${className}`}
      >
        <span className="absolute -inset-1 bg-neon/10 blur-sm rounded-lg z-0 opacity-0 hover:opacity-50 transition-opacity"></span>
        <span className="relative z-10">{renderAnimatedText(children)}</span>
      </a>
    );
  }
  
  if (boxed) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block font-bold text-darknavy bg-white py-3 px-5 rounded-full shadow-inner border-l-4 border-neon/50 transition-all duration-300 hover:bg-neon hover:text-darknavy relative overflow-hidden ${className}`}
      >
        <span className="absolute -inset-1 bg-neon/10 blur-sm rounded-lg z-0 opacity-0 hover:opacity-50 transition-opacity"></span>
        <span className="relative z-10">{renderAnimatedText(children)}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block font-bold transition-all duration-300 ${
        textOnly ? 'text-white hover:text-neon px-3 py-1.5 border-b-2 border-neon/50 hover:border-neon rounded-none' : 'px-6 py-2.5 rounded-full'
      } ${
        textOnly
          ? ''
          : inverse 
              ? 'bg-transparent border-2 border-neon text-white hover:bg-neon/10 hover:text-neon relative overflow-hidden' 
              : 'bg-white text-darknavy border-2 border-neon/50 hover:brightness-110 shadow-[0_0_15px_rgba(235,255,0,0.3)] relative overflow-hidden'
      } ${className}`}
    >
      <span className="absolute -inset-1 bg-neon/10 blur-sm rounded-lg z-0 opacity-0 hover:opacity-50 transition-opacity"></span>
      <span className="relative z-10">{renderAnimatedText(children)}</span>
    </a>
  );
};

export default ActionButton;
