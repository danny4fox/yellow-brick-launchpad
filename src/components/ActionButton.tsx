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
  if (darkHighlighted) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block font-medium text-neon bg-darknavy py-3 px-5 rounded-xl shadow-inner border-l-4 border-white/60 transition-all duration-300 hover:bg-darknavy/90 ${className}`}
      >
        {children}
      </a>
    );
  }

  if (highlighted) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block font-medium text-darknavy bg-neon py-3 px-5 rounded-xl shadow-inner border-l-4 border-white/80 transition-all duration-300 hover:bg-neon/90 ${className}`}
      >
        {children}
      </a>
    );
  }
  
  if (boxed) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block font-medium text-darknavy bg-neon py-3 px-5 rounded-xl shadow-inner border-l-4 border-white/80 transition-all duration-300 hover:bg-neon/90 ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block font-medium transition-all duration-300 ${
        textOnly ? 'text-white hover:text-neon px-3 py-1.5 border-b-2 border-white hover:border-neon rounded-none' : 'px-6 py-2.5 rounded-full'
      } ${
        textOnly
          ? ''
          : inverse 
              ? 'bg-transparent border-2 border-neon text-neon hover:bg-neon/10' 
              : 'bg-neon text-darknavy hover:brightness-110'
      } ${className}`}
    >
      {children}
    </a>
  );
};

export default ActionButton;
