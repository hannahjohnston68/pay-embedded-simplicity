
import React, { useState } from 'react';
import Header from '@/components/Header';
import Card from '@/components/common/Card';
import { Button } from '@/components/ui/button';
import Transition from '@/components/common/Transition';
import { Download, Search, Filter, ArrowUpDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const transactions = [
  {
    id: 'tx-123',
    date: '2025-03-06',
    customer: 'Acme Corp',
    amount: 3450.00,
    method: 'Credit Card',
    status: 'Completed',
  },
  {
    id: 'tx-124',
    date: '2025-03-05',
    customer: 'TechStart Inc',
    amount: 1245.50,
    method: 'ACH',
    status: 'Completed',
  },
  {
    id: 'tx-125',
    date: '2025-03-05',
    customer: 'Global Services',
    amount: 5600.75,
    method: 'Credit Card',
    status: 'Pending',
  },
  {
    id: 'tx-126',
    date: '2025-03-04',
    customer: 'Urban Designs',
    amount: 850.25,
    method: 'Credit Card',
    status: 'Completed',
  },
  {
    id: 'tx-127',
    date: '2025-03-03',
    customer: 'Tech Solutions LLC',
    amount: 2100.00,
    method: 'ACH',
    status: 'Failed',
  }
];

const Transactions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 pt-24">
        <div className="flex flex-col space-y-8">
          <Transition animation="slide-up">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight mb-2">
                  Transactions
                </h1>
                <p className="text-muted-foreground">
                  View and manage all your payment transactions
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Button variant="outline">
                  <Filter size={16} className="mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Download size={16} className="mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </Transition>

          <Transition animation="slide-up" delay={100}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search transactions..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Tabs defaultValue="all" className="w-full md:w-auto">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                    <TabsTrigger value="failed">Failed</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50 bg-muted/50">
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                          <div className="flex items-center gap-1 cursor-pointer">
                            Date 
                            <ArrowUpDown size={14} />
                          </div>
                        </th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                          <div className="flex items-center gap-1 cursor-pointer">
                            Customer
                            <ArrowUpDown size={14} />
                          </div>
                        </th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                          <div className="flex items-center gap-1 cursor-pointer">
                            Amount
                            <ArrowUpDown size={14} />
                          </div>
                        </th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Method</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map(transaction => (
                        <tr key={transaction.id} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                          <td className="px-4 py-3 text-sm">{transaction.date}</td>
                          <td className="px-4 py-3 text-sm font-medium">{transaction.customer}</td>
                          <td className="px-4 py-3 text-sm">${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td className="px-4 py-3 text-sm">{transaction.method}</td>
                          <td className="px-4 py-3 text-sm">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                              ${transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                                transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                'bg-red-100 text-red-800'}`}>
                              {transaction.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-between px-4 py-3 border-t border-border/30">
                  <div className="text-sm text-muted-foreground">
                    Showing 5 of 152 transactions
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
                  </div>
                </div>
              </Card>
            </div>
          </Transition>
        </div>
      </main>
    </div>
  );
};

export default Transactions;
