
import { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    // Add the product multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setQuantity(1);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col">
        <Badge variant="outline" className="w-fit mb-3">{product.category}</Badge>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="mt-3 text-2xl font-semibold">${product.price.toFixed(2)}</div>
        
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Description</h3>
          <p className="text-muted-foreground">{product.description}</p>
        </div>
        
        <div className="mt-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <MinusIcon className="h-4 w-4" />
              </Button>
              
              <span className="w-12 text-center">{quantity}</span>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={increaseQuantity}
              >
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
            
            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-accent hover:bg-accent/90"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-muted-foreground border-t pt-4">
          <p>Free shipping on orders over $50</p>
          <p>30-day money-back guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
