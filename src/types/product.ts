import { BrandType } from './brand';

export interface ProductType {
  id: number;
  options: string[];
  images: string[];
  brand: BrandType;
  name: string;
  description: string;
  price: number;
  discount: number;
  status: 'on' | 'off' | 'empty';
  created: string;
}

export interface CartItemType {
  id: number;
  name: string;
  option: string;
  price: number;
  imageUrl: string;
  status: 'ON' | 'OFF' | 'EMPTY';
  created: string;
  count: number;
}
