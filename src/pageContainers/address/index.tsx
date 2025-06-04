'use client';

import { useRouter } from 'next/navigation';

import { LeftArrowIcon } from '@/assets';
import useDelAddress from '@/hooks/apis/address/useDelAddress';
import useGetAddress from '@/hooks/apis/address/useGetAddress';
import usePostSetDefaultAddress from '@/hooks/apis/address/usePostSetDefaultAddress';
import { theme } from '@/styles';
import { AddressType } from '@/types';
import { formatPhoneNumber } from '@/utils';

import { ButtonHTMLAttributes } from 'react';

import * as S from './style';

const AddressPage = () => {
  const { data: addressList } = useGetAddress();

  console.log('addressList', addressList);

  return (
    <S.Container>
      <S.AddressHeader>
        <S.LeftSection>
          <LeftArrowIcon />
          배송지 정보
        </S.LeftSection>
        <PlusButton />
      </S.AddressHeader>
      <S.Description>
        이전 배송지가 자동으로 기본 배송지로 설정돼요
      </S.Description>

      <S.AddressCardContainer>
        {addressList?.map((address) => (
          <AddressCard key={address.id} {...address} />
        ))}
      </S.AddressCardContainer>
    </S.Container>
  );
};

const AddressCard = ({
  id,
  name,
  tag,
  phone,
  address,
  detail,
  default: isDefault,
}: AddressType) => {
  const { push } = useRouter();
  const { refetch } = useGetAddress();
  const { mutate: delAddress } = useDelAddress(id, {
    onSuccess: () => {
      refetch();
    },
  });
  const { mutate: setDefaultAddress } = usePostSetDefaultAddress(id, {
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <S.Card isDefault={isDefault}>
      <S.TopSection>
        <span>
          <S.Name>{name}</S.Name>(<S.Tag>{tag}</S.Tag>){' '}
        </span>
        <DefaultButton
          onClick={() => setDefaultAddress()}
          isDefault={isDefault}
        />
      </S.TopSection>
      <S.MiddleSection>
        <S.Phone>{formatPhoneNumber(phone)}</S.Phone>
        <S.Address>{address}</S.Address>
        <S.Detail>{detail}</S.Detail>
      </S.MiddleSection>
      <S.BottomSection>
        <S.DeleteButton onClick={() => delAddress()}>삭제</S.DeleteButton>
        <S.EditButton onClick={() => push(`/address/write?id=${id}`)}>
          수정
        </S.EditButton>
      </S.BottomSection>
    </S.Card>
  );
};

const DefaultButton = ({
  isDefault,
  ...attributes
}: ButtonHTMLAttributes<HTMLButtonElement> & { isDefault: boolean }) => (
  <S.DefaultButton disabled={isDefault} {...attributes}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <g clipPath='url(#clip0_755_7096)'>
        <path
          d='M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM15.535 8.381L10.585 13.331L8.465 11.21C8.37216 11.1171 8.26192 11.0434 8.14059 10.9931C8.01926 10.9428 7.8892 10.9168 7.75785 10.9168C7.49258 10.9167 7.23814 11.022 7.0505 11.2095C6.86286 11.397 6.75739 11.6514 6.7573 11.9166C6.7572 12.1819 6.86249 12.4364 7.05 12.624L9.808 15.382C9.91015 15.4842 10.0314 15.5653 10.1649 15.6206C10.2984 15.6759 10.4415 15.7044 10.586 15.7044C10.7305 15.7044 10.8736 15.6759 11.0071 15.6206C11.1406 15.5653 11.2618 15.4842 11.364 15.382L16.95 9.796C17.1376 9.60836 17.2431 9.35386 17.2431 9.0885C17.2431 8.82314 17.1376 8.56864 16.95 8.381C16.7624 8.19336 16.5079 8.08794 16.2425 8.08794C15.9771 8.08794 15.7226 8.19336 15.535 8.381Z'
          fill={isDefault ? theme.color.main : theme.color.gray4}
        />
      </g>
      <defs>
        <clipPath id='clip0_755_7096'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  </S.DefaultButton>
);

const PlusButton = () => {
  return (
    <S.PlusButton href='/address/write'>
      <svg
        width='24'
        height='25'
        viewBox='0 0 24 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12.75 11.75H19.5V13.25H12.75V20H11.25V13.25H4.5V11.75H11.25V5H12.75V11.75Z'
          fill='#FFFFFF'
        />
      </svg>
    </S.PlusButton>
  );
};

export default AddressPage;
