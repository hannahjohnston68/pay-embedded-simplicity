
import React from 'react';
import Header from '@/components/Header';
import Card from '@/components/common/Card';
import { Button } from '@/components/ui/button';
import Transition from '@/components/common/Transition';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Bell, 
  CreditCard, 
  BankIcon, 
  User, 
  Settings as SettingsIcon, 
  Lock, 
  RefreshCw, 
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col space-y-8">
          <Transition animation="slide-up">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight mb-2">
                  Settings
                </h1>
                <p className="text-muted-foreground">
                  Manage your Method Pay preferences and account settings
                </p>
              </div>
            </div>
          </Transition>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Transition animation="slide-up" delay={100} className="lg:col-span-1">
              <Card padding="medium" className="h-fit sticky top-24">
                <nav className="space-y-1">
                  <a href="#account" className="flex items-center px-3 py-2 rounded-md bg-primary/5 text-primary font-medium">
                    <User size={16} className="mr-3" />
                    Account
                  </a>
                  <a href="#payment-methods" className="flex items-center px-3 py-2 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                    <CreditCard size={16} className="mr-3" />
                    Payment Methods
                  </a>
                  <a href="#notifications" className="flex items-center px-3 py-2 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                    <Bell size={16} className="mr-3" />
                    Notifications
                  </a>
                  <a href="#security" className="flex items-center px-3 py-2 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                    <Lock size={16} className="mr-3" />
                    Security
                  </a>
                  <a href="#integrations" className="flex items-center px-3 py-2 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                    <RefreshCw size={16} className="mr-3" />
                    Integrations
                  </a>
                </nav>
              </Card>
            </Transition>
            
            <Transition animation="slide-up" delay={150} className="lg:col-span-3">
              <div className="space-y-6">
                <section id="account">
                  <Card>
                    <h2 className="text-lg font-medium mb-6">Account Information</h2>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="business-name">Business Name</Label>
                          <Input id="business-name" defaultValue="Acme Corporation" />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" defaultValue="admin@acmecorp.com" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" defaultValue="(555) 123-4567" />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="tax-id">Tax ID (EIN)</Label>
                          <Input id="tax-id" defaultValue="XX-XXXX123" />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button>Save Changes</Button>
                      </div>
                    </div>
                  </Card>
                </section>
                
                <section id="payment-methods">
                  <Card>
                    <h2 className="text-lg font-medium mb-6">Payment Methods Configuration</h2>
                    
                    <Tabs defaultValue="card">
                      <TabsList className="mb-6">
                        <TabsTrigger value="card" className="flex items-center">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Credit Cards
                        </TabsTrigger>
                        <TabsTrigger value="ach" className="flex items-center">
                          <BankIcon className="mr-2 h-4 w-4" />
                          ACH / Bank Transfer
                        </TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="card" className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Accept Credit Card Payments</h3>
                            <p className="text-sm text-muted-foreground">Enable or disable credit card processing</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="p-4 border rounded-lg flex items-start">
                          <CheckCircle2 className="text-green-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-1">Credit Card Processing Status</h4>
                            <p className="text-sm text-muted-foreground">Your account is verified and ready to accept card payments</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="font-medium">Credit Card Settings</h3>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Label htmlFor="save-cards" className="cursor-pointer">Allow customers to save cards</Label>
                              </div>
                              <Switch id="save-cards" defaultChecked />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Label htmlFor="recurring-billing" className="cursor-pointer">Enable recurring billing</Label>
                              </div>
                              <Switch id="recurring-billing" defaultChecked />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Label htmlFor="3ds" className="cursor-pointer">Require 3D Secure for all transactions</Label>
                              </div>
                              <Switch id="3ds" defaultChecked />
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button>Save Settings</Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="ach" className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Accept ACH Payments</h3>
                            <p className="text-sm text-muted-foreground">Enable or disable ACH direct deposit payments</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="p-4 border rounded-lg flex items-start">
                          <CheckCircle2 className="text-green-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-1">ACH Processing Status</h4>
                            <p className="text-sm text-muted-foreground">Your account is verified and ready to accept ACH payments</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="font-medium">ACH Settings</h3>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Label htmlFor="ach-verification" className="cursor-pointer">Require account verification</Label>
                              </div>
                              <Switch id="ach-verification" defaultChecked />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Label htmlFor="ach-recurring" className="cursor-pointer">Enable recurring ACH payments</Label>
                              </div>
                              <Switch id="ach-recurring" defaultChecked />
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button>Save Settings</Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </Card>
                </section>
                
                <section id="notifications">
                  <Card>
                    <h2 className="text-lg font-medium mb-6">Notification Preferences</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="font-medium">Email Notifications</h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="payment-success" className="cursor-pointer">Successful payments</Label>
                            <Switch id="payment-success" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label htmlFor="payment-failed" className="cursor-pointer">Failed payments</Label>
                            <Switch id="payment-failed" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label htmlFor="payment-refunds" className="cursor-pointer">Refunds and disputes</Label>
                            <Switch id="payment-refunds" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label htmlFor="settlement" className="cursor-pointer">Settlement notifications</Label>
                            <Switch id="settlement" defaultChecked />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-medium">App Notifications</h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="app-payments" className="cursor-pointer">Payment activity</Label>
                            <Switch id="app-payments" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label htmlFor="app-security" className="cursor-pointer">Security alerts</Label>
                            <Switch id="app-security" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label htmlFor="app-updates" className="cursor-pointer">Feature updates and news</Label>
                            <Switch id="app-updates" defaultChecked />
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button>Save Preferences</Button>
                      </div>
                    </div>
                  </Card>
                </section>
                
                <section id="security">
                  <Card>
                    <h2 className="text-lg font-medium mb-6">Security Settings</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="font-medium">Authentication</h3>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Two-Factor Authentication</p>
                            <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="space-y-3 pt-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" />
                          </div>
                          <div className="space-y-3">
                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                            <Input id="confirm-password" type="password" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-amber-200 rounded-lg bg-amber-50 flex items-start">
                        <AlertTriangle className="text-amber-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-amber-800 mb-1">Activity Log</h4>
                          <p className="text-sm text-amber-800/80">Last login: March 7, 2025 at 10:32 AM from 192.168.1.1</p>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button>Update Security Settings</Button>
                      </div>
                    </div>
                  </Card>
                </section>
                
                <section id="integrations">
                  <Card>
                    <h2 className="text-lg font-medium mb-6">Integrations</h2>
                    
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg flex items-start">
                        <CheckCircle2 className="text-green-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium mb-1">QuickBooks Online</h4>
                          <p className="text-sm text-muted-foreground">Connected · Last synced 5 minutes ago</p>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">Configure</Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-lg flex items-start">
                        <CheckCircle2 className="text-green-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium mb-1">Xero</h4>
                          <p className="text-sm text-muted-foreground">Connected · Last synced 3 hours ago</p>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">Configure</Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-lg flex items-start">
                        <div className="bg-muted h-5 w-5 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <SettingsIcon size={12} className="text-muted-foreground" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Zapier</h4>
                          <p className="text-sm text-muted-foreground">Not connected</p>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">Connect</Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-lg flex items-start">
                        <div className="bg-muted h-5 w-5 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <SettingsIcon size={12} className="text-muted-foreground" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Slack</h4>
                          <p className="text-sm text-muted-foreground">Not connected</p>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">Connect</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </section>
              </div>
            </Transition>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
