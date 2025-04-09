
import React from 'react';

interface ActionButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  inverse?: boolean;
  gradient?: boolean;
  animated?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  children, 
  href, 
  className, 
  inverse = false, 
  gradient = false,
  animated = false 
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block font-medium px-8 py-3 text-base rounded-full transition-all duration-300 ${
        gradient
          ? 'bg-gradient-to-r from-darknavy via-pink to-pink text-white hover:shadow-[0_8px_16px_rgba(244,42,166,0.4)]'
          : inverse 
            ? 'bg-transparent border-2 border-neon text-neon hover:bg-neon/10' 
            : 'bg-neon text-darknavy hover:shadow-[0_8px_16px_rgba(235,255,0,0.25)]'
      } ${animated ? 'animate-gentle-float' : ''} ${className}`}
    >
      {children}
    </a>
  );
};

export default ActionButton;
