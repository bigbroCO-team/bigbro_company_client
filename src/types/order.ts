import { ProductType } from './product';

export type OrderType = {
  id: string;
  items: ItemType[];
  total_price: number;
  delivery_cost: number;
  product_total_price: number;
  tracking_number: string;
  delivery_company: string;
  address: string;
  address_detail: string;
  zipcode: string;
  request: string;
  phone: string;
  status: OrderStatus;
};

export interface ItemType {
  id: number;
  product: ProductType;
  quantity: number;
  total_price: number;
  product_option: string;
  created_at: string;
  updated_at: string;
  price: number;
}

export type OrderStatus =
  | 'STAGING'
  | 'PURCHASED'
  | 'PREPARE_SHIP'
  | 'START_SHIP'
  | 'IN_SHIP'
  | 'DELIVERED'
  | 'COMPLETED';

export interface PostStagingOrderType {
  products: {
    product: number;
    option: string;
    quantity: number;
  }[];
}

export interface StagingOrderType {
  id: string;
  items: ItemType[];
  total_price: number;
  delivery_cost: number;
  product_total_price: number;
  tracking_number?: string;
  delivery_company?: string;
  address?: string;
  address_detail?: string;
  zipcode?: string;
  request?: string;
  phone?: string;
}

export interface PatchStagingOrderType {
  id: string;
  address: number;
  request: string;
}

export interface PostStagingOrderType {
  products: {
    product: number;
    option: string;
    quantity: number;
  }[];
}
