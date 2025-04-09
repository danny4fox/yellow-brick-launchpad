
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
  textOnly = false
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block font-medium transition-all duration-300 ${
        textOnly ? 'text-white hover:text-neon px-4 py-2 border border-neon rounded-full' : 'px-8 py-3 text-base rounded-full'
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
