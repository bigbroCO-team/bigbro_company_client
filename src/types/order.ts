import { ProductType } from './product';

export type OrderType = {
  id: number;
  items: ItemType[];
};

export interface ItemType {
  id: number;
  product: ProductType;
  quantity: number;
  total_price: number;
  product_option: ProductOptionType;
  created_at: string;
  updated_at: string;
  status: OrderItemStatus;
  price: number;
}

export interface ProductOptionType {
  id: number;
  name: string;
}

// 구매 완료 | 상품 준비중 | 배송 시작 | 배송중 | 배송 완료 | 구매 확정

export type OrderItemStatus =
  | 'STAGING'
  | 'PURCHASED'
  | 'PREPARE_SHIP'
  | 'START_SHIP'
  | 'IN_SHIP'
  | 'DELIVERED'
  | 'COMPLETED';
