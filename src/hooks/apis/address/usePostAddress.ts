import { AxiosError } from 'axios';

import { addressQueryKeys, addressUrls, post } from '@/libs';
import { AddressType } from '@/types';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

const usePostAddress = (
  options?: Omit<
    UseMutationOptions<unknown, AxiosError, Omit<AddressType, 'id'>, unknown>,
    'mutationKey' | 'mutationFn'
  >
) =>
  useMutation({
    mutationKey: addressQueryKeys.postAddress(),
    mutationFn: (body) => post(addressUrls.postAddress(), body),
    ...options,
  });

export default usePostAddress;
