
import React from 'react';

interface ActionButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block font-medium px-8 py-3 bg-neon text-darknavy rounded-full hover:brightness-110 transition-all ${className}`}
    >
      {children}
    </a>
  );
};

export default ActionButton;
