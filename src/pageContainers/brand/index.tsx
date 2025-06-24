'use client';

import Image from 'next/image';

import { Header } from '@/components';
import useGetProductByBrand from '@/hooks/apis/product/useGetProductByBrand';
import { BrandType } from '@/types';

import * as S from './style';

interface BrandPageProps {
  brand: BrandType;
}

const BrandPage = ({ brand }: BrandPageProps) => {
  const { data: productList } = useGetProductByBrand(brand);

  return (
    <>
      <Header text={brand} backUrl='/' />
      <S.Container>
        {productList?.map(({ id, images, name, discount, price }) => (
          <S.ProductCard href={`/product/${id}`} key={id}>
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
