
import React from 'react';
import Header from '@/components/Header';
import PaymentStats from '@/components/PaymentStats';
import Card from '@/components/common/Card';
import { Button } from '@/components/ui/button';
import Transition from '@/components/common/Transition';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 pt-24">
        <div className="flex flex-col space-y-8">
          <Transition animation="slide-up">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight mb-2">
                  Payment Dashboard
                </h1>
                <p className="text-muted-foreground">
                  Monitor your payment activity and performance metrics
                </p>
              </div>
              
              <Button className="button-glow">
                Create Payment
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </Transition>

          <PaymentStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Transition
              className="lg:col-span-2"
              animation="slide-up"
              delay={200}
            >
              <Card>
                <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
                {/* Activity content will go here */}
              </Card>
            </Transition>
            
            <Transition animation="slide-up" delay={300}>
              <Card>
                <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
                {/* Quick actions will go here */}
              </Card>
            </Transition>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
