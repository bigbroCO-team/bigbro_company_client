import { AxiosError } from 'axios';

import { addressQueryKeys, addressUrls, put } from '@/libs';
import { AddressType } from '@/types';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

const usePutAddress = (
  id: number,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError, Omit<AddressType, 'id'>>,
    'mutationKey' | 'mutationFn'
  >
) =>
  useMutation({
    mutationKey: addressQueryKeys.delAddress(id),
    mutationFn: (body) => put(addressUrls.delAddress(id), body),
    ...options,
  });

export default usePutAddress;
