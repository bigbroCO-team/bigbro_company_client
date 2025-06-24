'use client';

import {
  ANONYMOUS,
  TossPaymentsWidgets,
  loadTossPayments,
} from '@tosspayments/tosspayments-sdk';

import { Header } from '@/components';
import useGetDefaultAddress from '@/hooks/apis/address/useGetDefaultAddress';
import useGetStagingOrder from '@/hooks/apis/order/useGetStagingOrder';
import usePatchStagingOrder from '@/hooks/apis/order/usePatchStagingOrder';
import { formatKRW } from '@/utils';

import { useEffect, useState } from 'react';

import * as S from './style';

const OrderFormPage = () => {
  const [isTossPaymentWidget, setIsTossPaymentWidget] = useState(false);
  const [requestMessage, setRequestMessage] = useState('문 앞에 놔주세요');
  const [requestMessageInput, setRequestMessageInput] = useState('');
  const { data: stagingOrder } = useGetStagingOrder();
  const { data: defaultAddressInfo } = useGetDefaultAddress();
  const [tossPaymentWidgets, setTossPaymentWidgets] =
    useState<TossPaymentsWidgets | null>(null);

  const onSuccess = async () => {
    if (!stagingOrder?.total_price || !tossPaymentWidgets) return;
    setIsTossPaymentWidget(true);

    tossPaymentWidgets.setAmount({
      currency: 'KRW',
      value: stagingOrder.total_price,
    });

    await tossPaymentWidgets.renderPaymentMethods({
      selector: '#payment-widget',
    });
    await tossPaymentWidgets.renderAgreement({
      selector: '#agreement',
    });
  };

  const { mutate: patchStagingOrder } = usePatchStagingOrder({
    onSuccess: onSuccess,
  });

  const handleRequestMessageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRequestMessage(e.target.value);
  };

  const handleBuyButtonClick = () => {
    if (!stagingOrder || !defaultAddressInfo || !requestMessage) return;

    patchStagingOrder({
      id: stagingOrder.id,
      request:
        requestMessage === '직접입력' ? requestMessageInput : requestMessage,
      address: defaultAddressInfo.id,
    });
  };

  const handlePaymentButtonClick = async () => {
    if (!tossPaymentWidgets || !stagingOrder) return;

    await tossPaymentWidgets.requestPayment({
      orderId: stagingOrder.id,
      orderName: `주문 상품 ${stagingOrder.items.length}개`,
      successUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/payment/success`,
      failUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/payment/fail`,
    });
  };

  useEffect(() => {
    const render = async () => {
      const tossPayments = await loadTossPayments(
        'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm'
      );
      const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });
      setTossPaymentWidgets(widgets);
    };

    render();
  }, []);

  return (
    <>
      <S.HeaderWrapper>
        <Header text='결제' />
      </S.HeaderWrapper>
      <S.Container>
        <S.OrderProductInfoBox>
          <S.OrderProductQuantity>
            주문 상품 총 {stagingOrder?.items.length}개
          </S.OrderProductQuantity>
          <S.OrderProductCardWrapper>
            {stagingOrder?.items.map(
              ({
                id,
                product: { images, name },
                product_option,
                quantity,
                price,
              }) => (
                <OrderProductCard
                  key={id}
                  imageUrl={images[0]}
                  name={name}
                  option={product_option}
                  quantity={quantity}
                  price={price}
                />
              )
            )}
          </S.OrderProductCardWrapper>
        </S.OrderProductInfoBox>
        <S.Hr />
        <S.OrderAddressInfoBox>
          <S.OrderAddressInfoTitle>
            배송지 정보{' '}
            <S.DefaultAddressChangeButton href='/address'>
              변경하기
            </S.DefaultAddressChangeButton>
          </S.OrderAddressInfoTitle>

          <S.DefaultAddressBox>
            <S.DefaultAddressTitle>
              <S.DefaultAddressName>
                {defaultAddressInfo?.name}
              </S.DefaultAddressName>
              <S.DefaultAddressTag>
                {defaultAddressInfo?.tag && `(${defaultAddressInfo.tag})`}
              </S.DefaultAddressTag>
            </S.DefaultAddressTitle>
            <S.DefaultAddressPhone>
              {defaultAddressInfo?.phone}
            </S.DefaultAddressPhone>
            <S.DefaultAddress>{defaultAddressInfo?.address}</S.DefaultAddress>
            <S.DefaultAddressDetail>
              {defaultAddressInfo?.detail}
            </S.DefaultAddressDetail>
            <S.RequestMessageSelect
              value={requestMessage}
              onChange={handleRequestMessageChange}
            >
              <option value='문 앞에 놔주세요'>문 앞에 놔주세요</option>
              <option value='경비실에 맡겨주세요'>경비실에 맡겨주세요</option>
              <option value='택배함에 넣어주세요'>택배함에 넣어주세요</option>
              <option value='배송 전에 연락 주세요'>
                배송 전에 연락 주세요
              </option>
              <option value='직접입력'>직접입력</option>
            </S.RequestMessageSelect>
            {requestMessage === '직접입력' && (
              <S.Input
                value={requestMessageInput}
                onChange={(e) => setRequestMessageInput(e.target.value)}
                placeholder='요청 메시지를 입력해주세요'
              />
            )}
          </S.DefaultAddressBox>
        </S.OrderAddressInfoBox>
        <S.Hr />
        <S.OrderPriceInfoBox>
          <S.TotalPrice>
            <span>총 결제 금액</span>
            <span>
              {!!stagingOrder?.total_price &&
                formatKRW(stagingOrder.total_price)}
              원
            </span>
          </S.TotalPrice>
          <S.TotalProductPrice>
            <span>총 상품 금액</span>
            <span>
              {!!stagingOrder?.product_total_price &&
                formatKRW(stagingOrder?.product_total_price)}
              원
            </span>
          </S.TotalProductPrice>
          <S.DeliveryFee>
            <span>배송비</span>
            <span>
              {stagingOrder?.delivery_cost
                ? `${formatKRW(stagingOrder.delivery_cost)}원`
                : '5만원 이상 구매 무료 배송'}
            </span>
          </S.DeliveryFee>
        </S.OrderPriceInfoBox>
        <S.BuyButton onClick={handleBuyButtonClick}>구매하기</S.BuyButton>
      </S.Container>

      {isTossPaymentWidget && (
        <>
          <S.TossPaymentWidget>
            <S.PaymentMethod id='payment-widget'></S.PaymentMethod>
            <S.Agreement id='agreement'></S.Agreement>
            <S.PaymentButton onClick={handlePaymentButtonClick}>
              결제하기
            </S.PaymentButton>
          </S.TossPaymentWidget>
          <S.Background />
        </>
      )}
    </>
  );
};

interface OrderProductCardProps {
  imageUrl: string;
  name: string;
  option: string;
  quantity: number;
  price: number;
}

const OrderProductCard = ({
  imageUrl,
  name,
  option,
  quantity,
  price,
}: OrderProductCardProps) => (
  <S.OrderProductCard>
    <S.Image src={imageUrl} alt={name} />
    <S.Info>
      <S.Name>{name}</S.Name>
      <S.Option>{option}</S.Option>
      <S.BottomSection>
        <S.Quantity>{quantity}개</S.Quantity>
        <S.Price>{price.toLocaleString()}원</S.Price>
      </S.BottomSection>
    </S.Info>
  </S.OrderProductCard>
);

export default OrderFormPage;
