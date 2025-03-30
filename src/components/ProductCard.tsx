
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-md">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{product.name}</h3>
        <p className="text-muted-foreground text-sm mt-1 mb-2 line-clamp-2 h-10">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <Button 
            onClick={() => addItem(product)}
            size="sm"
            className="add-to-cart-btn bg-accent hover:bg-accent/90"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
