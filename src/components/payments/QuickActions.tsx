
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus, ChevronRight, RefreshCw, CreditCard, Receipt, ArrowRightLeft, Building } from 'lucide-react';
import CreatePaymentDialog from './CreatePaymentDialog';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const QuickActions: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const actionGroups = [
    {
      title: "Payments",
      actions: [
        {
          title: "New Payment",
          icon: <Plus className="h-4 w-4" />,
          action: "dialog",
          component: CreatePaymentDialog
        },
        {
          title: "Sync Transactions",
          icon: <RefreshCw className="h-4 w-4" />,
          action: () => {
            toast({
              title: "Syncing transactions",
              description: "Your transactions are being synced with QuickBooks",
            });
          }
        }
      ]
    },
    {
      title: "Configuration",
      actions: [
        {
          title: "Payment Methods",
          icon: <CreditCard className="h-4 w-4" />,
          action: () => navigate('/settings')
        },
        {
          title: "Payout Settings",
          icon: <Building className="h-4 w-4" />,
          action: () => navigate('/settings')
        }
      ]
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
      
      <div className="space-y-4">
        {actionGroups.map((group, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-sm text-muted-foreground font-medium">{group.title}</h3>
            <div className="space-y-2">
              {group.actions.map((action, actionIndex) => {
                if (action.action === "dialog" && action.component) {
                  const DialogComponent = action.component;
                  return (
                    <DialogComponent key={actionIndex}>
                      <Button 
                        variant="outline" 
                        className="w-full justify-between hover:bg-secondary/50"
                      >
                        <span className="flex items-center">
                          {action.icon}
                          <span className="ml-3">{action.title}</span>
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </DialogComponent>
                  );
                }
                
                return (
                  <Button 
                    key={actionIndex}
                    variant="outline" 
                    className="w-full justify-between hover:bg-secondary/50"
                    onClick={typeof action.action === 'function' ? action.action : undefined}
                  >
                    <span className="flex items-center">
                      {action.icon}
                      <span className="ml-3">{action.title}</span>
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <Button 
        variant="link" 
        className="w-full mt-4 text-primary"
        onClick={() => navigate('/setup')}
      >
        Method Pay Setup
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default QuickActions;
