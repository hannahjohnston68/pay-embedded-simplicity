
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'flat';
  padding?: 'none' | 'small' | 'medium' | 'large';
  isHoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'medium',
  isHoverable = false,
  ...props
}) => {
  const paddingMap = {
    none: 'p-0',
    small: 'p-3',
    medium: 'p-5',
    large: 'p-7',
  };

  const variantStyles = {
    default: 'bg-card shadow-md rounded-lg border border-border/30',
    glass: 'glass-card rounded-lg',
    flat: 'bg-card rounded-lg border border-border/50',
  };

  return (
    <div
      className={cn(
        variantStyles[variant],
        paddingMap[padding],
        isHoverable && 'transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:border-primary/20',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
