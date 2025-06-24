'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { LeftArrowIcon } from '@/assets';
import usePostAddress from '@/hooks/apis/address/usePostAddress';
import usePutAddress from '@/hooks/apis/address/usePutAddress';
import { addressSchema } from '@/schemas';
import { AddressType, addressSchemaType } from '@/types';

import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { useForm } from 'react-hook-form';

import * as S from './style';

interface AddressWritePageProps {
  id?: number;
  address?: AddressType;
}

const AddressWritePage = ({ id, address }: AddressWritePageProps) => {
  const daumPostCode = useDaumPostcodePopup();
  const { register, setValue, handleSubmit, watch } =
    useForm<addressSchemaType>({
      resolver: zodResolver(addressSchema),
      defaultValues: {
        default: address?.default ?? false,
        tag: address?.tag ?? undefined,
        name: address?.name ?? undefined,
        phone: address?.phone ?? undefined,
        address: address?.address ?? undefined,
        zipcode: address?.zipcode ?? undefined,
        detail: address?.detail ?? undefined,
      },
    });
  const isFormFilled = addressSchema.safeParse(watch()).success;
  const { push } = useRouter();

  const { mutate: postAddress } = usePostAddress({
    onSuccess: () => {
      push('/address');
    },
  });

  const { mutate: putAddress } = usePutAddress(id ?? 0, {
    onSuccess: () => {
      push('/address');
    },
  });

  const handleSearchAddressButtonClick = () => {
    daumPostCode({
      popupTitle: 'BIGBRO COMPANY',
      onComplete: handleDaumPostCodePopupComplete,
    });
  };

  const handleDaumPostCodePopupComplete = ({
    address,
    zonecode: zipcode,
  }: Address) => {
    setValue('address', address);
    setValue('zipcode', zipcode);
  };

  const handleFormSubmit = (data: addressSchemaType) => {
    if (id) {
      putAddress(data);
    } else {
      postAddress(data);
    }
  };

  return (
    <S.Container>
      <S.AddressHeader>
        <Link href='/address'>
          <LeftArrowIcon />
        </Link>
        배송지 {id ? '수정' : '추가'}
      </S.AddressHeader>
      <S.AddressForm onSubmit={handleSubmit(handleFormSubmit)}>
        <S.InputWrapper>
          배송지 이름
          <S.Input placeholder='Ex. 집 학교 등' {...register('tag')} />
        </S.InputWrapper>

        <S.InputWrapper>
          받는 분
          <S.Input
            placeholder='받는 분의 이름을 입력해주세요'
            {...register('name')}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          주소
          <S.Input
            placeholder='주소 검색시 자동으로 입력돼요'
            {...register('address')}
            disabled
          />
          <S.ZipcodeWrapper>
            <S.Input
              placeholder='우편번호를 입력해주세요'
              {...register('zipcode')}
              disabled
            />
            <S.SearchButton
              type='button'
              onClick={handleSearchAddressButtonClick}
            >
              주소 찾기
            </S.SearchButton>
          </S.ZipcodeWrapper>
          <S.Input
            placeholder='상세주소 입력해주세요'
            {...register('detail')}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          전화번호
          <S.Input
            placeholder='숫자만 입력해주세요' //
            {...register('phone')}
          />
        </S.InputWrapper>

        <S.SubmitButton disabled={!isFormFilled} type='submit'>
          {id ? '수정' : '추가'}
        </S.SubmitButton>
      </S.AddressForm>
    </S.Container>
  );
};

export default AddressWritePage;
