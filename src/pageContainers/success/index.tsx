'use client';

import { Header } from '@/components';

import { Check } from 'lucide-react';

import * as S from './style';

export default function PurchaseConfirmation() {
  return (
    <S.Container>
      {/* Header */}
      {/* <S.Header>
        <S.HeaderButton>
          <ChevronLeft size={24} />
        </S.HeaderButton>
        <S.HeaderTitle>구매완료</S.HeaderTitle>
        <S.HeaderButton>
          <Menu size={24} />
        </S.HeaderButton>
      </S.Header> */}
      <Header text='구매완료' backUrl='/main' />

      {/* Main Content */}
      <S.MainContent>
        <S.CheckCircle>
          <Check size={70} color='#1a1918' strokeWidth={3} />
        </S.CheckCircle>
        <S.SuccessMessage>구매가 완료되었습니다!</S.SuccessMessage>
        <S.ActionButton href='/my'>주문내역 확인하기</S.ActionButton>
      </S.MainContent>
    </S.Container>
  );
}
