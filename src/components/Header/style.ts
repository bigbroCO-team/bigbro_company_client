import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.header`
  width: 100%;
  padding: 2.5rem 2rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  z-index: 3;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-family: 'IM FELL Great Primer';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BackButton = styled(Link)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const RightBox = styled.div`
  display: flex;
  align-items: center;
`;

export const HamburgerMenuButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Background = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const MenuContainer = styled.div`
  width: 12.5rem;
  height: 100vh;
  padding: 2.25rem;
  background-color: ${({ theme }) => theme.color.dark};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BottomBox = styled(TopBox)`
  gap: 0.75rem;
`;

export const Br = styled.div`
  height: 0.0625rem;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray3};
`;

export const BrandButton = styled(Link)`
  font-family: 'IM FELL Great Primer';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.color.gray1};
`;

export const NavigationButton = styled(Link)`
  color: ${({ theme }) => theme.color.gray1};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
