
import React from 'react';
import { cn } from '@/lib/utils';

interface TransitionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'scale';
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
}

const Transition: React.FC<TransitionProps> = ({
  children,
  className,
  animation = 'fade',
  delay = 0,
  duration = 300,
  ...props
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimationClasses = () => {
    if (!isVisible) return 'opacity-0';

    const animationStyles = {
      fade: 'animate-fade-in',
      'slide-up': 'animate-slide-up',
      'slide-down': 'animate-slide-down',
      scale: 'animate-scale-in',
    };

    return animationStyles[animation];
  };

  return (
    <div
      className={cn(
        'transition-all',
        getAnimationClasses(),
        className
      )}
      style={{ 
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Transition;
