import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 1.75rem 0 1.75rem;
  /* overflow-y: scroll; */
  height: 100vh;
`;

export const MyInfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Email = styled.div`
  color: ${({ theme }) => theme.color.main};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.6875rem;
`;

export const OrderHistoryBox = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.88rem;
  overflow-y: scroll;
`;

export const OrderHistoryCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeliveryInfoBox = styled.div`
  width: 100%;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
`;

export const DeliveryStatus = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
`;

export const DeliveryDate = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
`;

export const ProductBox = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  margin: 1rem 0 1.75rem 0;
`;

export const ProductImage = styled.img`
  min-width: 7.357rem;
  min-height: 7.357rem;
  max-width: 7.357rem;
  max-height: 7.357rem;
  /* object-fit: fill; */
`;

export const ProductInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductName = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
`;

export const ProductOption = styled.p`
  color: ${({ theme }) => theme.color.gray2};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  margin: 0.5rem 0 1.25rem 0;
`;

export const BottomSection = styled.section`
  display: flex;
  width: 100%;
  gap: 3.75rem;
`;

export const ProductQuantity = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
`;

export const ProductPrice = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
  display: flex;
  align-items: center;
`;

export const OrderControlBox = styled.div`
  width: 100%;
  display: flex;
  gap: 1.25rem;
`;

export const DeliveryTrackingButton = styled.button`
  width: 100%;
  height: 2.5rem;
  border: 1px solid ${({ theme }) => theme.color.gray1};
  color: ${({ theme }) => theme.color.gray3};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  background-color: transparent;
`;

export const ReturnButton = styled(DeliveryTrackingButton)``;

export const ExchangeButton = styled(DeliveryTrackingButton)``;

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const OrderHistoryCardWrapper = styled.div`
  width: 100%;
  gap: 1.88rem;
  display: flex;
  flex-direction: column;
`;

export const DetailButton = styled(Link)`
  color: ${({ theme }) => theme.color.gray2};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  display: flex;
  gap: 0.625rem;
  align-items: center;
`;
