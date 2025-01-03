import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.div`
  position: relative;
  padding-top: 10.12rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 29.625rem;
  height: 31.5625rem;
  position: relative;
`;

export const LoginButton = styled(Link)`
  margin-top: 12rem;
  background-color: ${({ theme }) => theme.color.kakao};
  width: 21.375rem;
  height: 2.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginText = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  width: 16.0625rem;
  display: flex;
  justify-content: center;
`;
