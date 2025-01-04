import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;
`;

export const BackgroundImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 22.5rem;

  img {
    object-fit: cover;
  }
`;

export const LogoImageWrapper = styled.div`
  position: relative;
  width: 26.25rem;
  height: 8.375rem;
  margin-top: 7.25rem;
`;

export const Section1 = styled.div`
  position: relative;
  min-height: 22.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Section2 = styled.div`
  margin-top: 3.94rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Section2ImageWrapper = styled.div`
  width: 35.5rem;
  height: 54.25rem;
  position: relative;
`;

export const Section3 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Section3ImageWrapper = styled.div`
  width: 35.5rem;
  height: 23.33106rem;
  position: relative;
`;

export const Br = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: 35.5rem;
  min-height: 0.0625rem;
  margin: 6.25rem 1rem;
`;

export const BottomNav = styled.div`
  margin-top: 6.25rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const NavItem = styled(Link)`
  width: 7.125rem;
  height: 20.6875rem;
  position: relative;

  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const ShadowBox = styled.div`
  width: 7.125rem;
  height: 20.6875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 4;

  font-family: 'IM FELL Great Primer';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: transparent;

  :hover {
    color: ${({ theme }) => theme.color.white};
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
