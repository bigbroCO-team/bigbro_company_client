'use client';

import Image from 'next/image';

import { Header } from '@/components';

import * as S from './style';

const BACKGROUND_SRC = '/main/background.png';
const LOGO_SRC = '/main/logo.png';
const SECTION2_SRC = '/main/section2.png';
const SECTION3_SRC = '/main/section3.png';

const NAV_LIST = [
  { name: 'CBWAS', url: '/CBWAS', src: '/main/CBWAS.png' },
  { name: 'S.C.B', url: '/S.C.B', src: '/main/S.C.B.png' },
  { name: 'BIGBRO', url: '/BIGBRO', src: '/main/BIGBRO.png' },
  { name: 'GONGNEWGI', url: '/GONGNEWGI', src: '/main/GONGNEWGI.png' },
  { name: 'SCULFEE', url: '/SCULFEE', src: '/main/SCULFEE.png' },
];

const MainPage = () => {
  return (
    <S.Container>
      <Header text='BIGBRO' />
      <S.Section1>
        <S.BackgroundImageWrapper>
          <Image src={BACKGROUND_SRC} alt='배경 이미지' fill />
        </S.BackgroundImageWrapper>
        <S.LogoImageWrapper>
          <Image src={LOGO_SRC} alt='로고 이미지' fill />
        </S.LogoImageWrapper>
      </S.Section1>
      <S.Section2>
        <S.Section2ImageWrapper>
          <Image src={SECTION2_SRC} alt='section2 이미지' fill />
        </S.Section2ImageWrapper>
      </S.Section2>
      <S.Br></S.Br>
      <S.Section3>
        <S.Section3ImageWrapper>
          <Image src={SECTION3_SRC} alt='section3 이미지' fill />
        </S.Section3ImageWrapper>
      </S.Section3>
      <S.BottomNav>
        {NAV_LIST.map(({ name, url, src }) => (
          <S.NavItem key={name} href={url}>
            <S.ShadowBox>{name}</S.ShadowBox>
            <Image src={src} alt={`${name} 이미지`} fill />
          </S.NavItem>
        ))}
      </S.BottomNav>
    </S.Container>
  );
};

export default MainPage;
