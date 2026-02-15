export interface Product {
  id: number;
  name: string;
  category: 'mode' | 'accessoires';
  subcategory: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  composition: string;
  isNew: boolean;
}