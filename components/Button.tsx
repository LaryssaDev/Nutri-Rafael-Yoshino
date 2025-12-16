import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ 
  href, 
  children, 
  className = '', 
  fullWidth = false,
  variant = 'primary'
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold py-4 px-6 rounded-xl transition-all duration-300 transform active:scale-95 shadow-lg text-lg uppercase tracking-wide";
  
  const variants = {
    primary: "bg-primary hover:bg-primaryDark text-white shadow-emerald-900/50",
    outline: "border-2 border-primary text-primary hover:bg-primary/10"
  };

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
    >
      <MessageCircle className="w-6 h-6" />
      <span>{children}</span>
    </a>
  );
};

export default Button;