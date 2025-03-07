
import React from 'react';
import { cn } from '@/lib/utils';
import Card from '@/components/common/Card';
import Transition from '@/components/common/Transition';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  formatter?: (value: string | number) => string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  icon,
  className,
  isLoading = false,
  formatter = (val) => String(val),
}) => {
  return (
    <Card 
      className={cn('overflow-hidden', className)} 
      variant="glass"
      isHoverable
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          {icon && <div className="text-muted-foreground">{icon}</div>}
        </div>
        
        <div className="mt-auto">
          {isLoading ? (
            <div className="h-9 w-24 bg-muted/30 rounded animate-pulse" />
          ) : (
            <Transition animation="slide-up" duration={400}>
              <p className="text-3xl font-semibold tracking-tight">{formatter(value)}</p>
            </Transition>
          )}
          
          {change && (
            <div className="flex items-center mt-2">
              <span 
                className={cn(
                  "text-xs font-medium px-1.5 py-0.5 rounded-md",
                  change.isPositive 
                    ? "text-green-700 bg-green-100" 
                    : "text-red-700 bg-red-100"
                )}
              >
                {change.isPositive ? '↑' : '↓'} {Math.abs(change.value)}%
              </span>
              <span className="text-xs ml-1.5 text-muted-foreground">vs last month</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default MetricCard;
