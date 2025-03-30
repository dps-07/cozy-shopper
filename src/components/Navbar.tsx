
import { Link } from 'react-router-dom';
import CartDrawer from './CartDrawer';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              CozyShop
            </Link>
            
            <nav className="ml-10 hidden md:flex space-x-8">
              <Link to="/" className="text-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-foreground hover:text-accent transition-colors">
                Products
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block relative">
              <input
                type="text"
                placeholder="Search products..."
                className="py-2 pl-4 pr-10 rounded-md border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
              <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            
            <CartDrawer />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
