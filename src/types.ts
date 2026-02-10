export interface Product {
  id: number;
  name: string;
  category: 'mode' | 'accessoires'; // On restreint aux seules catégories valides
  price: number;
  image: string;
  description: string;
  composition: string;
  isNew: boolean;
}