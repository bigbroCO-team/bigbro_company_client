import { addressQueryKeys, addressUrls, get } from '@/libs';
import { AddressType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

const useGetAddress = (
  options?: Omit<UseQueryOptions<AddressType[] | null>, 'queryKey' | 'queryFn'>
) =>
  useQuery({
    queryKey: addressQueryKeys.getAddress(),
    queryFn: () => get<AddressType[]>(addressUrls.getAddress()),
    ...options,
  });

export default useGetAddress;
