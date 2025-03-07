
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Transition from '@/components/common/Transition';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Transactions', path: '/transactions' },
    { name: 'Setup', path: '/setup' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        scrolled ? 'header-blur py-3' : 'bg-transparent'
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Transition animation="fade" duration={600}>
            <Link to="/" className="mr-8">
              <h1 className="text-xl font-semibold tracking-tight">Method<span className="text-primary">Pay</span></h1>
            </Link>
          </Transition>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Transition key={item.path} animation="fade" delay={100 + index * 50} duration={400}>
                <Link
                  to={item.path}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm transition-colors',
                    location.pathname === item.path
                      ? 'text-primary font-medium bg-primary/5'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                >
                  {item.name}
                </Link>
              </Transition>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell size={18} />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Settings size={18} />
          </Button>
          
          <Avatar className="h-8 w-8 border border-border/50">
            <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
