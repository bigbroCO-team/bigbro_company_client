import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

export const Container = styled.div`
  width: 100%;
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
`;

export const SelectButton = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

export const ProductInfoBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Name = styled(Link)`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
`;

export const ProductImg = styled(Image)`
  margin-left: 2rem;
  margin-right: 1.75rem;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
  margin-top: 2.81rem;
`;

export const Option = styled.p`
  color: ${({ theme }) => theme.color.gray2};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  margin-top: 0.25rem;
`;

export const CounterBox = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  padding: 0.25rem 0.5rem;
  gap: 0.5rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray1};
`;

export const ControlButton = styled.button`
  height: 1rem;
`;
