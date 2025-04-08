
import React from 'react';

interface ActionButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  inverse?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, href, className, inverse = false }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block font-medium px-10 py-4 text-lg rounded-full hover:brightness-110 transition-all shadow-lg ${
        inverse 
          ? 'bg-transparent border-2 border-neon text-neon hover:bg-neon/10' 
          : 'bg-neon text-darknavy'
      } ${className}`}
    >
      {children}
    </a>
  );
};

export default ActionButton;
