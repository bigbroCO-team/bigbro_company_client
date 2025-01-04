'use client';

import Image from 'next/image';

import { KakaoIcon } from '@/assets';
import { Header } from '@/components';

import * as S from './style';

const IMAGE_SRC = '/login/main.png';

const LoginPage = () => {
  return (
    <>
      <Header text='BIGBRO' />
      <S.Container>
        <S.ImageWrapper>
          <Image src={IMAGE_SRC} alt='메인 이미지' fill quality={100} />
        </S.ImageWrapper>

        <S.LoginButton href={`${process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL}`}>
          <KakaoIcon />
          <S.LoginText>카카오 계정으로 로그인</S.LoginText>
        </S.LoginButton>
      </S.Container>
    </>
  );
};

export default LoginPage;
