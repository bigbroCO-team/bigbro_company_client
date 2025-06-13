import { get, orderQueryKeys, orderUrls } from '@/libs';
import { OrderType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

const useGetMyOrder = (
  options?: Omit<UseQueryOptions<OrderType[] | null>, 'queryKey' | 'queryFn'>
) =>
  useQuery({
    queryKey: orderQueryKeys.getMyOrder(),
    queryFn: () => get<OrderType[]>(orderUrls.getMyOrder()),
    ...options,
  });

export default useGetMyOrder;
