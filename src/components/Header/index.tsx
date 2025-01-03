import { CartIcon, HamburgerIcon, LeftArrowIcon, PeopleIcon } from '@/assets';

import { useState } from 'react';

import * as S from './style';

interface HeaderProps {
  text: string;
  backUrl?: string;
}

const BRAND_LIST = [
  { name: 'CBWAS', url: '/CBWAS' },
  { name: 'S.C.B', url: '/S.C.B' },
  { name: 'BIGBRO', url: '/BIGBRO' },
  { name: 'GONGNEWGI', url: '/GONGNEWGI' },
  { name: 'SCULFEE', url: '/SCULFEE' },
] as const;

const NAVIGATION_LIST = [
  { name: '장바구니', url: '/cart', icon: <CartIcon /> },
  { name: '마이페이지', url: '/my', icon: <PeopleIcon /> },
];

const Header = ({ text, backUrl }: HeaderProps) => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

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
                <S.BrandButton href={url}>{name}</S.BrandButton>
              ))}
            </S.TopBox>
            <S.Br />
            <S.BottomBox>
              {NAVIGATION_LIST.map(({ name, url, icon }) => (
                <S.NavigationButton href={url}>
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
