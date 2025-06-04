import { AxiosError } from 'axios';

import { addressQueryKeys, addressUrls, post } from '@/libs';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

const usePostSetDefaultAddress = (
  id: number,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError>,
    'mutationKey' | 'mutationFn'
  >
) =>
  useMutation({
    mutationKey: addressQueryKeys.postSetDefaultAddress(id),
    mutationFn: () => post(addressUrls.postSetDefaultAddress(id)),
    ...options,
  });

export default usePostSetDefaultAddress;
