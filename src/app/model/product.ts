export interface Product {
  productId: number;
  productName: string;
  category: Category;
  vendorProducts: VendorProduct[];
}

export interface Category {
  category: string;
}

export interface VendorProduct {
  id: ID;
  quantity: number;
  price: number;
  available: boolean;
}

export interface ID {
  vatNumber: string;
  productId: number;
}
