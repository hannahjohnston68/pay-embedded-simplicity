
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { ArrowRight, CreditCard, Building } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

interface CreatePaymentDialogProps {
  children?: React.ReactNode;
}

const CreatePaymentDialog: React.FC<CreatePaymentDialogProps> = ({ children }) => {
  const { toast } = useToast();
  
  const handleCreatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment request created",
      description: "The payment request has been sent to the customer.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button className="button-glow">
            Create Payment
            <ArrowRight size={16} className="ml-2" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create Payment Request</DialogTitle>
          <DialogDescription>
            Send a payment request to your customer for immediate or scheduled payment.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleCreatePayment} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="customer">Customer</Label>
            <Select>
              <SelectTrigger id="customer">
                <SelectValue placeholder="Select customer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="acme">Acme Corporation</SelectItem>
                <SelectItem value="globex">Globex Industries</SelectItem>
                <SelectItem value="wayne">Wayne Enterprises</SelectItem>
                <SelectItem value="stark">Stark Industries</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" placeholder="0.00" type="number" step="0.01" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select defaultValue="usd">
                <SelectTrigger id="currency">
                  <SelectValue placeholder="USD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="eur">EUR</SelectItem>
                  <SelectItem value="gbp">GBP</SelectItem>
                  <SelectItem value="cad">CAD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="Invoice #1234" />
          </div>
          
          <div className="space-y-2">
            <Label>Payment Method</Label>
            <Tabs defaultValue="card" className="w-full">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="card" className="flex items-center">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Credit Card
                </TabsTrigger>
                <TabsTrigger value="ach" className="flex items-center">
                  <Building className="mr-2 h-4 w-4" />
                  ACH
                </TabsTrigger>
              </TabsList>
              <TabsContent value="card" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Information</Label>
                  <Input id="cardNumber" placeholder="Customer will provide" disabled className="bg-muted/50" />
                </div>
              </TabsContent>
              <TabsContent value="ach" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="accountNumber">Bank Information</Label>
                  <Input id="accountNumber" placeholder="Customer will provide" disabled className="bg-muted/50" />
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <DialogFooter>
            <Button type="submit" className="w-full">
              Create Payment Request
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePaymentDialog;
