import { CheckCircleIcon } from '@/assets';

import * as S from './style';

interface CartItemProps {}

const CartItem = () => {
  return (
    <S.Container>
      <S.SelectButton>
        <CheckCircleIcon />
      </S.SelectButton>
      <S.ProductImg src={''} alt='상품 이미지' width={124} height={124} />
      <S.ProductInfoBox>
        <S.ProductInfoTopBox>
          <S.Name></S.Name>
          <S.Description></S.Description>
        </S.ProductInfoTopBox>
        <S.ProductInfoBottomBox>
          <S.DefaultPrice></S.DefaultPrice>
          <S.DiscountedPrice></S.DiscountedPrice>
        </S.ProductInfoBottomBox>
      </S.ProductInfoBox>
    </S.Container>
  );
};

export default CartItem;
