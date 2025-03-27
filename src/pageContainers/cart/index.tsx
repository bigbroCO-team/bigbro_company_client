'use client';

import { Header } from '@/components';

import * as S from './style';

const Cart = () => {
  return (
    <>
      <Header text='장바구니' backUrl='/main' />
      <S.Container>
        <S.CartHeader>
          <S.DeleteCartButton>선택삭제</S.DeleteCartButton>
        </S.CartHeader>
      </S.Container>
    </>
  );
};
export default Cart;
