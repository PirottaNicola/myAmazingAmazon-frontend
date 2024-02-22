import { Product } from './product';
import { User } from './user';

export interface Order {
  user: User;
  id: number;
  products: Product[];
  totalPrice: number;
  date: Date;
  status: 'done' | 'canceled';
}
