export interface Category {
  id?: number;
  name: string;
  image?: string;
  creationAt?: string;
  updatedAt?: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: never[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}

export interface CardProduct {
  category: Product["category"];
  images: Product["images"];
  price: Product["price"];
  title: Product["title"];
}
