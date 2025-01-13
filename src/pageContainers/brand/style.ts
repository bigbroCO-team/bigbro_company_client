import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.div`
  padding: 6.5rem 1rem 0 1rem;
  width: 100%;
  display: flex;
  column-gap: 3.3125rem;
  row-gap: 1.5rem;
  flex-wrap: wrap;
`;

export const ProductCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 9.625rem;
  height: 13.125rem;
  gap: 0.5rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 9.625rem;
  height: 9.625rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

export const Discount = styled.p`
  color: ${({ theme }) => theme.color.error};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
`;

export const TopBox = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
