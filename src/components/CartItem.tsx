
import { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem = ({ product, quantity }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex items-center py-4 space-x-4 border-b"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium">
          <h3>{product.name}</h3>
          <p className="ml-4">${(product.price * quantity).toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{product.description}</p>
      </div>

      <div className="flex items-center space-x-1">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-7 w-7"
          onClick={() => updateQuantity(product.id, quantity - 1)}
        >
          <Minus className="h-3 w-3" />
        </Button>
        
        <span className="w-8 text-center">{quantity}</span>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="h-7 w-7"
          onClick={() => updateQuantity(product.id, quantity + 1)}
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>

      {isHovered && (
        <Button
          variant="ghost"
          size="icon"
          className="text-destructive h-8 w-8"
          onClick={() => removeItem(product.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default CartItem;
