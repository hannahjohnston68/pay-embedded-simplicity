
import React, { useState } from 'react';
import Header from '@/components/Header';
import Card from '@/components/common/Card';
import { Button } from '@/components/ui/button';
import Transition from '@/components/common/Transition';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreditCard, BankIcon, CheckCircle, CircleHelp, ExternalLink } from 'lucide-react';

const Setup: React.FC = () => {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState('');
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 pt-24">
        <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
          <Transition animation="slide-up">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-semibold tracking-tight mb-2">
                Set Up Method Pay
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Configure your payment system to start accepting payments directly through Method
              </p>
            </div>
          </Transition>

          <Transition animation="slide-up" delay={100}>
            <Card className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Payment Setup Progress</h2>
                <div className="text-sm text-muted-foreground">Step {step} of 3</div>
              </div>

              <div className="relative mb-8">
                <div className="overflow-hidden h-2 mb-4 flex rounded bg-secondary">
                  <div 
                    className="bg-primary transition-all duration-500 ease-out" 
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <div className={`flex flex-col items-center ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                    <div className={`rounded-full flex items-center justify-center w-8 h-8 mb-2 ${step >= 1 ? 'bg-primary text-white' : 'bg-secondary'}`}>
                      {step > 1 ? <CheckCircle size={16} /> : '1'}
                    </div>
                    <span className="text-xs">Business Info</span>
                  </div>
                  <div className={`flex flex-col items-center ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                    <div className={`rounded-full flex items-center justify-center w-8 h-8 mb-2 ${step >= 2 ? 'bg-primary text-white' : 'bg-secondary'}`}>
                      {step > 2 ? <CheckCircle size={16} /> : '2'}
                    </div>
                    <span className="text-xs">Payment Methods</span>
                  </div>
                  <div className={`flex flex-col items-center ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                    <div className={`rounded-full flex items-center justify-center w-8 h-8 mb-2 ${step >= 3 ? 'bg-primary text-white' : 'bg-secondary'}`}>
                      {step > 3 ? <CheckCircle size={16} /> : '3'}
                    </div>
                    <span className="text-xs">Review & Launch</span>
                  </div>
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="business-name">Business Name</Label>
                      <Input id="business-name" placeholder="Enter your business name" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="business-type">Business Type</Label>
                      <Select value={businessType} onValueChange={setBusinessType}>
                        <SelectTrigger id="business-type">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sole-proprietor">Sole Proprietor</SelectItem>
                          <SelectItem value="llc">LLC</SelectItem>
                          <SelectItem value="corporation">Corporation</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="tax-id">Tax ID (EIN/SSN)</Label>
                      <Input id="tax-id" placeholder="Enter your tax ID" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="industry">Industry</Label>
                      <Select>
                        <SelectTrigger id="industry">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="services">Professional Services</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="tech">Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="business-address">Business Address</Label>
                      <Input id="business-address" placeholder="Enter your business address" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="state">State</Label>
                      <Select>
                        <SelectTrigger id="state">
                          <SelectValue placeholder="State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ca">California</SelectItem>
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="tx">Texas</SelectItem>
                          <SelectItem value="fl">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="ZIP Code" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button onClick={() => setStep(2)}>Continue</Button>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-6">
                  <Tabs defaultValue="card">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="card" className="flex items-center">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Credit Card
                      </TabsTrigger>
                      <TabsTrigger value="ach" className="flex items-center">
                        <BankIcon className="mr-2 h-4 w-4" />
                        ACH / Bank Transfer
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="card" className="space-y-6">
                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h3 className="font-medium mb-2 flex items-center">
                          <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                          Credit Card Processing
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Accept Visa, Mastercard, American Express, and Discover cards directly through Method Pay.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">Transaction Fee</h4>
                            <p className="text-sm text-muted-foreground">Standard rate for all card types</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">2.9% + $0.30</p>
                            <p className="text-xs text-muted-foreground">Per transaction</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <h4 className="font-medium">Enable Card Saving</h4>
                            <CircleHelp size={16} className="ml-2 text-muted-foreground" />
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <h4 className="font-medium">Enable Recurring Billing</h4>
                            <CircleHelp size={16} className="ml-2 text-muted-foreground" />
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="ach" className="space-y-6">
                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h3 className="font-medium mb-2 flex items-center">
                          <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                          ACH Direct Deposit
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Accept bank transfers with lower fees than credit cards. Best for recurring and high-value payments.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">Transaction Fee</h4>
                            <p className="text-sm text-muted-foreground">Flat fee structure</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">0.8% (Max $5.00)</p>
                            <p className="text-xs text-muted-foreground">Per transaction</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <h4 className="font-medium">Enable ACH Verification</h4>
                            <CircleHelp size={16} className="ml-2 text-muted-foreground" />
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <h4 className="font-medium">Enable Recurring ACH</h4>
                            <CircleHelp size={16} className="ml-2 text-muted-foreground" />
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                    <Button onClick={() => setStep(3)}>Continue</Button>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="space-y-6">
                  <div className="p-4 border rounded-lg bg-green-50 text-green-800 mb-6">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      <h3 className="font-medium">Ready to Launch Method Pay</h3>
                    </div>
                    <p className="text-sm">
                      Your payment setup is complete! Review your settings before going live.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">Business Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      <div>
                        <p className="text-sm text-muted-foreground">Business Name</p>
                        <p className="font-medium">Acme Corporation</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Business Type</p>
                        <p className="font-medium">LLC</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Tax ID</p>
                        <p className="font-medium">XX-XXXX123</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Industry</p>
                        <p className="font-medium">Technology</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">Payment Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      <div>
                        <p className="text-sm text-muted-foreground">Credit Card Processing</p>
                        <p className="font-medium">Enabled (2.9% + $0.30)</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">ACH Processing</p>
                        <p className="font-medium">Enabled (0.8%, Max $5.00)</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Recurring Billing</p>
                        <p className="font-medium">Disabled</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Card Saving</p>
                        <p className="font-medium">Disabled</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">Payout Information</h3>
                    <div className="p-4 border rounded-lg bg-muted/50">
                      <p className="text-sm">
                        Your funds will be deposited to your connected bank account within 2 business days of transaction completion.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4 justify-between pt-4">
                    <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
                    <div className="flex gap-3">
                      <Button variant="outline">
                        Save as Draft
                      </Button>
                      <Button className="button-glow">
                        Activate Method Pay
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </Transition>
          
          <Transition animation="slide-up" delay={150}>
            <div className="flex items-center justify-center">
              <a 
                href="#" 
                className="text-primary flex items-center text-sm hover:underline"
              >
                View our pricing documentation
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </Transition>
        </div>
      </main>
    </div>
  );
};

export default Setup;
