import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
  as?: 'button' | 'span' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', as = 'button', ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue disabled:opacity-50 disabled:pointer-events-none";

    const variantClasses = {
      default: 'bg-brand-green text-gray-900 hover:bg-opacity-90',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 hover:text-gray-900',
    };

    const sizeClasses = {
      default: 'h-10 py-2 px-4',
      lg: 'h-12 rounded-lg px-8',
    };

    const combinedClasses = [
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
    ].filter(Boolean).join(' ');
    
    const Comp = as as any;

    return (
      <Comp
        className={combinedClasses}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';