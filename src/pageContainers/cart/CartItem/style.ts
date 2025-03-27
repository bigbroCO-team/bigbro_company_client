import styled from '@emotion/styled';
import Image from 'next/image';

export const Container = styled.div`
  width: 100%;
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
`;

export const SelectButton = styled.div`
  width: 2.5rem;
  height: 2.5rem;
`;

export const ProductInfoBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductInfoTopBox = styled.div``;

export const ProductInfoBottomBox = styled.div``;

export const Name = styled.h1``;

export const Description = styled.h2``;

export const ProductImg = styled(Image)`
  margin-left: 2rem;
  margin-right: 1.75rem;
`;

export const DefaultPrice = styled.p``;

export const DiscountedPrice = styled.p``;

export const Option = styled.p``;
