'use client';

import Image from 'next/image';

import { Header } from '@/components';
import { BrandType } from '@/types';
import { ProductType } from '@/types/product';

import * as S from './style';

const mockData: ProductType[] = [
  {
    id: 1,
    options: ['Small', 'Medium', 'Large'],
    images: [
      'https://example.com/product1-img1.jpg',
      'https://example.com/product1-img2.jpg',
    ],
    brand: 'BIGBRO',
    name: 'Bigbro T-Shirt',
    description: 'Comfortable and stylish T-shirt from Bigbro.',
    price: 29.99,
    discount: 10,
    status: 'on',
    created: '2025-01-01T12:00:00Z',
  },
  {
    id: 2,
    options: ['Red', 'Blue', 'Green'],
    images: [
      'https://example.com/product2-img1.jpg',
      'https://example.com/product2-img2.jpg',
    ],
    brand: 'CBWAS',
    name: 'CBWAS Sneakers',
    description: 'Durable and trendy sneakers for all occasions.',
    price: 89.99,
    discount: 15,
    status: 'on',
    created: '2025-01-02T12:00:00Z',
  },
  {
    id: 3,
    options: ['Espresso', 'Latte', 'Cappuccino'],
    images: [
      'https://example.com/product3-img1.jpg',
      'https://example.com/product3-img2.jpg',
    ],
    brand: 'SCULFEE',
    name: 'Sculfee Coffee Beans',
    description: 'Premium coffee beans for the perfect cup of coffee.',
    price: 19.99,
    discount: 5,
    status: 'off',
    created: '2024-12-30T12:00:00Z',
  },
  {
    id: 4,
    options: ['Standard', 'Deluxe', 'Pro'],
    images: [
      'https://example.com/product4-img1.jpg',
      'https://example.com/product4-img2.jpg',
    ],
    brand: 'GONGNEWGI',
    name: 'Gongnewgi Smartwatch',
    description: 'Feature-packed smartwatch for daily use.',
    price: 199.99,
    discount: 20,
    status: 'empty',
    created: '2024-12-25T12:00:00Z',
  },
  {
    id: 5,
    options: ['Single', 'Twin Pack', 'Family Pack'],
    images: [
      'https://example.com/product5-img1.jpg',
      'https://example.com/product5-img2.jpg',
    ],
    brand: 'S.C.B',
    name: 'S.C.B Cleaning Supplies',
    description: 'High-quality cleaning supplies for your home.',
    price: 14.99,
    discount: 0,
    status: 'on',
    created: '2025-01-05T12:00:00Z',
  },
];

interface BrandPageProps {
  brand: BrandType;
}

const BrandPage = ({ brand }: BrandPageProps) => {
  return (
    <>
      <Header text={brand} backUrl='/' />
      <S.Container>
        {mockData.map(({ id, images, name, discount, price }) => (
          <S.ProductCard href={`/${id}`} key={id}>
            <S.ImageWrapper>
              <Image src={images[0]} alt={`${name} 이미지`} fill />
            </S.ImageWrapper>
            <S.ProductInfo>
              <S.TopBox>
                {!!discount && <S.Discount>{discount}%</S.Discount>}
                <S.Price>{price}</S.Price>
              </S.TopBox>
              <S.Name>{name}</S.Name>
            </S.ProductInfo>
          </S.ProductCard>
        ))}
      </S.Container>
    </>
  );
};

export default BrandPage;
