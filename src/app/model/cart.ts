import { Product } from './product';
import { User } from './user';

export interface Cart {
  id: number;
  products: Product[];
  user: User;
  totalPrice: number;
}

function computeTotalPrice(products: Product[]): number {
  return products.reduce((sum, product) => sum + product.price, 0);
}
