import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 7rem 1.75rem 0 1.75rem;
  overflow-y: scroll;
`;

export const OrderProductInfoBox = styled.div`
  margin-bottom: 3rem;
`;

export const OrderProductQuantity = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.6875rem;
`;

export const OrderAddressInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem 0;
`;

export const OrderAddressInfoTitle = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.9375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderPriceInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem 0;
`;

export const TotalPrice = styled.p`
  display: flex;
  justify-content: space-between;

  color: ${({ theme }) => theme.color.white};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.6875rem;
`;

export const TotalProductPrice = styled(TotalPrice)`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
`;

export const DeliveryFee = styled(TotalProductPrice)``;

export const Hr = styled.div`
  width: 100%;
  min-height: 1px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const OrderProductCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Image = styled.img`
  max-width: 7.375rem;
  max-height: 7.375rem;
  min-width: 7.375rem;
  min-height: 7.375rem;
  object-fit: cover;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
`;

export const Option = styled.div`
  color: ${({ theme }) => theme.color.gray2};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
`;

export const Quantity = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
`;

export const BottomSection = styled.div`
  display: flex;
  gap: 3.75rem;
  align-items: center;
`;

export const OrderProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const BuyButton = styled.button`
  width: 100%;
  min-height: 3.375rem;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.black};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
`;

export const DefaultAddressBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DefaultAddressTitle = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.6875rem;
`;

export const DefaultAddressDetail = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
`;
export const DefaultAddress = styled(DefaultAddressDetail)``;

export const DefaultAddressPhone = styled(DefaultAddressDetail)``;

export const DefaultAddressTag = styled.span``;

export const DefaultAddressName = styled.span``;

export const DefaultAddressChangeButton = styled(Link)`
  color: ${({ theme }) => theme.color.main};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.6875rem;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  background-color: ${({ theme }) => theme.color.dark};
  z-index: 10;
`;

export const RequestMessageSelect = styled.select`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.dark};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray100};
  color: #a8a3a3;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.color.gray100};
  background-color: transparent;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.color.white};

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray2};
  }
`;

export const TossPaymentWidget = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 35rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 1rem;
  padding: 1rem;
  align-items: center;
  z-index: 100;
`;

export const PaymentMethod = styled.div`
  width: 100%;
`;

export const Agreement = styled.div`
  width: 100%;
`;

export const PaymentButton = styled.button`
  width: 30rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.main};
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
  opacity: 0.5;
  z-index: 99;
`;
