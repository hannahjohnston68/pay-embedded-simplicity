
import React from 'react';
import Header from '@/components/Header';
import PaymentStats from '@/components/PaymentStats';
import Card from '@/components/common/Card';
import Transition from '@/components/common/Transition';
import CreatePaymentDialog from '@/components/payments/CreatePaymentDialog';
import RecentActivity from '@/components/payments/RecentActivity';
import QuickActions from '@/components/payments/QuickActions';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 pt-24">
        <div className="flex flex-col space-y-8">
          <Transition animation="slide-up">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight mb-2">
                  Payment Dashboard
                </h1>
                <p className="text-muted-foreground">
                  Monitor your payment activity and performance metrics
                </p>
              </div>
              
              <CreatePaymentDialog />
            </div>
          </Transition>

          <PaymentStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Transition
              className="lg:col-span-2"
              animation="slide-up"
              delay={200}
            >
              <Card className="bg-white">
                <RecentActivity />
              </Card>
            </Transition>
            
            <Transition animation="slide-up" delay={300}>
              <Card className="bg-white">
                <QuickActions />
              </Card>
            </Transition>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
