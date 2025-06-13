'use client';

import { HamburgerIcon, LeftArrowIcon, PeopleIcon } from '@/assets';
import useGetMyInfo from '@/hooks/apis/account/useGetMyInfo';

import { useState } from 'react';

import * as S from './style';

interface HeaderProps {
  text: string;
  backUrl?: string;
}

const Header = ({ text, backUrl }: HeaderProps) => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const { data } = useGetMyInfo();

  const BRAND_LIST = [
    { name: 'CBWAS', url: '/CBWAS' },
    { name: 'S.C.B', url: '/S.C.B' },
    { name: 'BIGBRO', url: '/BIGBRO' },
    { name: 'GONGNEWGI', url: '/GONGNEWGI' },
    { name: 'SCULFEE', url: '/SCULFEE' },
  ] as const;

  const NAVIGATION_LIST = [
    // { name: '장바구니', url: '/cart', icon: <CartIcon /> },
    {
      name: data?.id ? '마이페이지' : '로그인',
      url: data?.id ? '/my' : '/login',
      icon: <PeopleIcon />,
    },
  ];

  return (
    <>
      <S.Container>
        <S.LeftBox>
          {backUrl && (
            <S.BackButton href={backUrl}>
              <LeftArrowIcon />
            </S.BackButton>
          )}
          <S.Text>{text}</S.Text>
        </S.LeftBox>
        <S.RightBox>
          <S.HamburgerMenuButton onClick={() => setIsMenu(true)}>
            <HamburgerIcon />
          </S.HamburgerMenuButton>
        </S.RightBox>
      </S.Container>

      {isMenu && (
        <S.Background onClick={() => setIsMenu(false)}>
          <S.MenuContainer onClick={(e) => e.stopPropagation()}>
            <S.TopBox>
              {BRAND_LIST.map(({ name, url }) => (
                <S.BrandButton key={name} href={url}>
                  {name}
                </S.BrandButton>
              ))}
            </S.TopBox>
            <S.Br />
            <S.BottomBox>
              {NAVIGATION_LIST.map(({ name, url, icon }) => (
                <S.NavigationButton key={name} href={url}>
                  {icon} {name}
                </S.NavigationButton>
              ))}
            </S.BottomBox>
          </S.MenuContainer>
        </S.Background>
      )}
    </>
  );
};

export default Header;
