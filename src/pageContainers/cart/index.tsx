'use client';

import { CheckCircleIcon } from '@/assets';
import { Header } from '@/components';
import { theme } from '@/styles';

import { useState } from 'react';

import CartItem from './CartItem';
import dataList from './mock.json';
import * as S from './style';

const Cart = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const isAllSelected = selectedItems.length === dataList.length;

  const handleAllSelectButtonClick = () => {
    if (isAllSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(dataList.map((item) => item.id));
    }
  };

  const handleSelectButtonClick = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <>
      <Header text='장바구니' backUrl='/main' />
      <S.Container>
        <S.CartHeader>
          <S.CartHeaderLeftBox>
            <S.AllSelectButton onClick={handleAllSelectButtonClick}>
              <CheckCircleIcon
                color={isAllSelected ? theme.color.main : theme.color.gray4}
              />
              전체 선택({selectedItems.length}/{dataList.length})
            </S.AllSelectButton>
            <S.Divider />
          </S.CartHeaderLeftBox>

          <S.DeleteCartButton>선택삭제</S.DeleteCartButton>
        </S.CartHeader>

        <S.CartItemBox>
          {dataList.map((data) => (
            <CartItem
              key={data.id}
              {...data}
              handleSelectButtonClick={handleSelectButtonClick}
              selectedItems={selectedItems}
            />
          ))}
        </S.CartItemBox>
      </S.Container>
    </>
  );
};
export default Cart;
