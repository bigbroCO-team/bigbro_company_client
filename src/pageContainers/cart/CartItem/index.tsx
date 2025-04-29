import { CheckCircleIcon, MinusIcon, PlusIcon } from '@/assets';
import { theme } from '@/styles';
import { formatKRW } from '@/utils';

import * as S from './style';

interface CartItemProps {
  id: number;
  name: string;
  option: string;
  price: number;
  imageUrl: string;
  count: number;
  selectedItems: number[];
  handleSelectButtonClick: (id: number) => void;
}

const CartItem = ({
  id,
  name,
  option,
  price,
  imageUrl,
  count,
  selectedItems,
  handleSelectButtonClick,
}: CartItemProps) => {
  const isSelected = selectedItems.includes(id);

  const handlePlusButtonClick = () => {};
  const handleMinusButtonClick = () => {};

  return (
    <S.Container>
      <S.SelectButton onClick={() => handleSelectButtonClick(id)}>
        <CheckCircleIcon
          color={isSelected ? theme.color.main : theme.color.gray4}
        />
      </S.SelectButton>
      <S.ProductImg src={imageUrl} alt='상품 이미지' width={124} height={124} />
      <S.ProductInfoBox>
        <S.Name href={`/product/${id}`}>{name}</S.Name>
        <S.Option>{option}</S.Option>
        <S.Price>{formatKRW(price)}원</S.Price>
      </S.ProductInfoBox>
      <S.CounterBox>
        <S.Counter>
          <S.ControlButton onClick={handleMinusButtonClick}>
            <MinusIcon />
          </S.ControlButton>
          {count}
          <S.ControlButton onClick={handlePlusButtonClick}>
            <PlusIcon />
          </S.ControlButton>
        </S.Counter>
      </S.CounterBox>
    </S.Container>
  );
};

export default CartItem;
