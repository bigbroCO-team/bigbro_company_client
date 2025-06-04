import { addressQueryKeys, addressUrls, get } from '@/libs';
import { AddressType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

const useGetDefaultAddress = (
  options?: Omit<UseQueryOptions<AddressType | null>, 'queryKey' | 'queryFn'>
) =>
  useQuery({
    queryKey: addressQueryKeys.getDefaultAddress(),
    queryFn: () => get<AddressType>(addressUrls.getDefaultAddress()),
    ...options,
  });

export default useGetDefaultAddress;
