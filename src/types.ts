export interface Product {
  id: number;
  name: string;
  category: 'mode' | 'accessoires'; // On restreint aux seules catégories valides
  subcategory: string;
  price: number;
  image: string;
  images: string;
  description: string;
  composition: string;
  isNew: boolean;
}