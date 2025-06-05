'use client';

import Image from 'next/image';

import { MinusIcon, PlusIcon, XIcon } from '@/assets';
import { Header } from '@/components';
import useGetProductById from '@/hooks/apis/product/useGetProductById';
import { ProductType } from '@/types';
import { formatKRW } from '@/utils';

import { ChangeEvent, useState } from 'react';

import * as S from './style';

interface ProductDetailPageProps {
  id: number;
  initialData: ProductType;
}

interface SelectedOptionType {
  name: string;
  count: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductDetailPage = ({ id, initialData }: ProductDetailPageProps) => {
  console.log('initialData', initialData);

  const { data: product } = useGetProductById(id, { initialData: initialData });
  const [mainImage, setMainImage] = useState<string>(initialData.images[0]);

  console.log(mainImage);
  const [selectedOption, setSelectedOption] = useState<SelectedOptionType[]>(
    []
  );

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (selectedOption.some(({ name }) => name === value)) return;

    setSelectedOption((prev) => [...prev, { name: value, count: 1 }]);
  };

  const handleXButtonClick = (name: string) => {
    const deletedOption = selectedOption.filter(
      (option) => option.name !== name
    );

    setSelectedOption(deletedOption);
  };

  const handlePlusButtonClick = (name: string) => {
    const newOption = selectedOption.map((option) =>
      option.name === name ? { ...option, count: option.count + 1 } : option
    );

    setSelectedOption(newOption);
  };

  const handleMinusButtonClick = (name: string) => {
    const newOption = selectedOption.map((option) =>
      option.name === name
        ? { ...option, count: option.count === 1 ? 1 : option.count - 1 }
        : option
    );

    setSelectedOption(newOption);
  };

  return (
    product && (
      <S.Container>
        <Header text={product.brand} backUrl={`/${product.brand}`} />
        <S.ImageBox>
          <S.MainImageWrapper>
            <Image src={mainImage} alt={`${product.name} 이미지`} fill />
          </S.MainImageWrapper>
          <S.ImageController>
            {product.images.map((image) => (
              <S.SubImageWrapper
                key={image}
                isSelected={image === mainImage}
                onClick={() => setMainImage(image)}
              >
                <Image src={image} alt={`${product.name} 이미지`} fill />
              </S.SubImageWrapper>
            ))}
          </S.ImageController>
        </S.ImageBox>
        <S.InfoBox>
          <S.Name>{product.name}</S.Name>
          <S.PriceBox>
            {/* {product.discount && (
              <S.DefaultPrice>{formatKRW(product.price)}원</S.DefaultPrice>
            )} */}
            <S.BottomBox>
              {/* {product.discount && (
                <S.DiscountRate>{product.discount}%</S.DiscountRate>
              )} */}
              <S.DiscountedPrice>
                {formatKRW(product.price)}원
              </S.DiscountedPrice>
            </S.BottomBox>
          </S.PriceBox>
          <S.Hr />
          <S.DeliveryInfo>
            <span>배송</span> <span>로젠택배 (출고 후 2~3일 소요)</span>
          </S.DeliveryInfo>
          <S.Hr />
          <S.SelectBox>
            상품 선택
            <S.Select onChange={handleSelectChange}>
              <option disabled hidden selected>
                상품을 선택해주세요
              </option>
              {product.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </S.Select>
            {selectedOption.map(({ name, count }) => (
              <S.OptionCard key={name}>
                <S.CardTopBox>
                  {name}
                  <S.XButton onClick={() => handleXButtonClick(name)}>
                    <XIcon />
                  </S.XButton>
                </S.CardTopBox>
                <S.CardBottomBox>
                  <S.CountBox>
                    <S.ControlButton
                      onClick={() => handleMinusButtonClick(name)}
                    >
                      <MinusIcon />
                    </S.ControlButton>
                    {count}
                    <S.ControlButton
                      onClick={() => handlePlusButtonClick(name)}
                    >
                      <PlusIcon />
                    </S.ControlButton>
                  </S.CountBox>
                  {formatKRW(product.price)}원
                </S.CardBottomBox>
              </S.OptionCard>
            ))}
          </S.SelectBox>
          <S.Hr />
          <S.TotalPriceBox>
            총 상품 금액:
            <S.TotalPrice>
              {formatKRW(
                selectedOption.reduce((a, c) => a + c.count, 0) * product.price
              )}
              원
            </S.TotalPrice>
          </S.TotalPriceBox>
          <S.ButtonBox>
            {/* <S.CartButton>장바구니</S.CartButton> */}
            <S.BuyButton>구매하기</S.BuyButton>
          </S.ButtonBox>
          <S.Description>{product.description}</S.Description>
        </S.InfoBox>
      </S.Container>
    )
  );
};

export default ProductDetailPage;
