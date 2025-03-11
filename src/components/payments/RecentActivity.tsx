
import React from 'react';
import { CalendarDays, Clock, DollarSign, CheckCircle, AlertCircle, ArrowRightLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Transaction {
  id: string;
  customer: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  type: 'payment' | 'refund' | 'payout';
}

const transactions: Transaction[] = [
  {
    id: 'tx-1234',
    customer: 'Acme Corporation',
    amount: 1250.00,
    date: '2025-03-06T14:32:00Z',
    status: 'completed',
    type: 'payment'
  },
  {
    id: 'tx-1235',
    customer: 'Globex Industries',
    amount: 780.50,
    date: '2025-03-06T12:15:00Z',
    status: 'pending',
    type: 'payment'
  },
  {
    id: 'tx-1236',
    customer: 'Wayne Enterprises',
    amount: -250.00,
    date: '2025-03-05T16:42:00Z',
    status: 'completed',
    type: 'refund'
  },
  {
    id: 'tx-1237',
    customer: 'Stark Industries',
    amount: 1800.00,
    date: '2025-03-05T09:21:00Z',
    status: 'failed',
    type: 'payment'
  },
  {
    id: 'tx-1238',
    customer: 'Method Pay',
    amount: -2580.50,
    date: '2025-03-04T17:30:00Z',
    status: 'completed',
    type: 'payout'
  }
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHrs = diffMs / (1000 * 60 * 60);
  
  if (diffHrs < 24) {
    return `Today at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  } else if (diffHrs < 48) {
    return `Yesterday at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  } else {
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  }
};

const getStatusIcon = (status: Transaction['status'], type: Transaction['type']) => {
  if (type === 'refund') return <ArrowRightLeft className="h-4 w-4 text-amber-400" />;
  if (type === 'payout') return <ArrowRightLeft className="h-4 w-4 text-blue-400" />;
  
  if (status === 'completed') return <CheckCircle className="h-4 w-4 text-emerald-400" />;
  if (status === 'pending') return <Clock className="h-4 w-4 text-amber-400" />;
  if (status === 'failed') return <AlertCircle className="h-4 w-4 text-rose-400" />;
};

const getStatusText = (status: Transaction['status'], type: Transaction['type']) => {
  if (type === 'refund') return 'Refunded';
  if (type === 'payout') return 'Transferred';
  return status.charAt(0).toUpperCase() + status.slice(1);
};

const getStatusColor = (status: Transaction['status'], type: Transaction['type']) => {
  if (type === 'refund') return 'bg-amber-950/60 text-amber-400 border-amber-800/20';
  if (type === 'payout') return 'bg-blue-950/60 text-blue-400 border-blue-800/20';
  
  if (status === 'completed') return 'bg-emerald-950/60 text-emerald-400 border-emerald-800/20';
  if (status === 'pending') return 'bg-amber-950/60 text-amber-400 border-amber-800/20';
  if (status === 'failed') return 'bg-rose-950/60 text-rose-400 border-rose-800/20';
};

const getIconBgColor = (type: Transaction['type']) => {
  if (type === 'payment') return 'bg-emerald-950/60 text-emerald-400';
  if (type === 'refund') return 'bg-amber-950/60 text-amber-400';
  return 'bg-blue-950/60 text-blue-400';
};

const RecentActivity: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Recent Activity</h2>
        <Button variant="ghost" size="sm" className="text-xs text-primary">
          View all transactions
        </Button>
      </div>
      
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div 
              key={transaction.id}
              className="flex items-center justify-between p-3 rounded-lg border border-border/40 bg-secondary/20 hover:bg-secondary/40 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${getIconBgColor(transaction.type)}`}>
                  <DollarSign className="h-4 w-4" />
                </div>
                
                <div>
                  <p className="font-medium text-sm">{transaction.customer}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CalendarDays className="h-3 w-3 mr-1" />
                    {formatDate(transaction.date)}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                <p className={`font-medium ${transaction.amount < 0 ? 'text-amber-400' : 'text-foreground'}`}>
                  {transaction.amount < 0 ? '-' : ''}{formatCurrency(Math.abs(transaction.amount))}
                </p>
                <Badge variant="outline" className={`text-xs border ${getStatusColor(transaction.status, transaction.type)}`}>
                  <span className="flex items-center">
                    {getStatusIcon(transaction.status, transaction.type)}
                    <span className="ml-1">{getStatusText(transaction.status, transaction.type)}</span>
                  </span>
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default RecentActivity;
