'use client';

import { RightArrowIcon } from '@/assets';
import { Header } from '@/components';
import useGetMyInfo from '@/hooks/apis/account/useGetMyInfo';
import useGetMyOrder from '@/hooks/apis/order/useGetMyOrder';
import { formatKRW } from '@/utils';

import * as S from './style';

interface OrderHistoryCardProps {
  id: string;
  delivery_status: string;
  name: string;
  option: string;
  quantity: number;
  price: number;
  src: string;
}

const MyPage = () => {
  const { data: myInfo } = useGetMyInfo();
  const { data: myOrderHistoryList } = useGetMyOrder();

  return (
    <>
      <Header text='마이페이지' />
      <S.Container>
        <S.MyInfoBox>
          <S.Email>{myInfo?.email} 님</S.Email>
        </S.MyInfoBox>
        <S.OrderHistoryBox>
          {myOrderHistoryList?.map(({ id: orderId, items, status }) =>
            items.map(
              (
                {
                  id,
                  product: { name, images },
                  product_option,
                  price,
                  quantity,
                },
                index
              ) => (
                <S.OrderHistoryCardWrapper key={id}>
                  <OrderHistoryCard
                    id={orderId}
                    name={name}
                    option={product_option}
                    delivery_status={status}
                    price={price}
                    quantity={quantity}
                    src={images[0]}
                  />
                  {index !== items.length - 1 && <S.Hr />}
                </S.OrderHistoryCardWrapper>
              )
            )
          )}
        </S.OrderHistoryBox>
      </S.Container>
    </>
  );
};

const OrderHistoryCard = ({
  id,
  delivery_status,
  name,
  option,
  quantity,
  price,
  src,
}: OrderHistoryCardProps) => {
  const deliveryStatusToText: { [key: string]: string } = {
    STAGING: '결제중',
    PURCHASED: '결제 완료',
    PREPARE_SHIP: '배송 준비중',
    START_SHIP: '배송 시작',
    IN_SHIP: '배송중',
    DELIVERED: '배송 완료',
    COMPLETED: '구매 확정',
  };

  return (
    <S.OrderHistoryCard>
      <S.DeliveryInfoBox>
        <S.DeliveryStatus>
          {deliveryStatusToText[delivery_status]}
        </S.DeliveryStatus>
        <S.DetailButton href={`/order/${id}`}>
          자세히보기 <RightArrowIcon />
        </S.DetailButton>
      </S.DeliveryInfoBox>
      <S.ProductBox>
        <S.ProductImage src={src} />
        <S.ProductInfoBox>
          <S.ProductName>{name}</S.ProductName>
          <S.ProductOption>{option}</S.ProductOption>
          <S.BottomSection>
            <S.ProductQuantity>{quantity}개</S.ProductQuantity>
            <S.ProductPrice>{formatKRW(price)}원</S.ProductPrice>
          </S.BottomSection>
        </S.ProductInfoBox>
      </S.ProductBox>
      <S.OrderControlBox>
        <S.DeliveryTrackingButton>배송 조회</S.DeliveryTrackingButton>
        <S.ReturnButton>반품 접수</S.ReturnButton>
        <S.ExchangeButton>교환 문의</S.ExchangeButton>
      </S.OrderControlBox>
    </S.OrderHistoryCard>
  );
};

export default MyPage;
