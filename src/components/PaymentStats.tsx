
import React from 'react';
import { DollarSign, CreditCard, ArrowUpRight, CalendarClock } from 'lucide-react';
import MetricCard from '@/components/ui/metric-card';
import Transition from '@/components/common/Transition';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const PaymentStats: React.FC = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: 124500,
      change: { value: 12, isPositive: true },
      icon: <DollarSign size={18} />,
      formatter: formatCurrency,
    },
    {
      title: 'Active Payments',
      value: 847,
      change: { value: 8, isPositive: true },
      icon: <CreditCard size={18} />,
    },
    {
      title: 'Conversion Rate',
      value: 64.8,
      change: { value: 3, isPositive: true },
      icon: <ArrowUpRight size={18} />,
      formatter: (value) => `${value}%`,
    },
    {
      title: 'Avg. Processing Time',
      value: 1.2,
      change: { value: 12, isPositive: false },
      icon: <CalendarClock size={18} />,
      formatter: (value) => `${value} days`,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Transition
          key={stat.title}
          animation="slide-up"
          delay={index * 100}
          duration={400}
        >
          <MetricCard
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            formatter={stat.formatter}
          />
        </Transition>
      ))}
    </div>
  );
};

export default PaymentStats;
