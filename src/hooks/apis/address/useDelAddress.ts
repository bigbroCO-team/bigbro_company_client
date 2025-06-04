import { AxiosError } from 'axios';

import { addressQueryKeys, addressUrls, del } from '@/libs';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

const useDelAddress = (
  id: number,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError>,
    'mutationKey' | 'mutationFn'
  >
) =>
  useMutation({
    mutationKey: addressQueryKeys.delAddress(id),
    mutationFn: () => del(addressUrls.delAddress(id)),
    ...options,
  });

export default useDelAddress;
