'use client';

import Image from 'next/image';

import { KakaoIcon } from '@/assets';
import { Header } from '@/components';

import * as S from './style';

const IMAGE_SRC = '/login/main.png';

const LoginPage = () => {
  const KAKAO_LOGIN_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/kakao`;

  return (
    <>
      <Header text='BIGBRO' />
      <S.Container>
        <S.ImageWrapper>
          <Image src={IMAGE_SRC} alt='메인 이미지' fill quality={100} />
        </S.ImageWrapper>

        <S.LoginButton href={KAKAO_LOGIN_URL}>
          <KakaoIcon />
          <S.LoginText>카카오 계정으로 로그인</S.LoginText>
        </S.LoginButton>
      </S.Container>
    </>
  );
};

export default LoginPage;
