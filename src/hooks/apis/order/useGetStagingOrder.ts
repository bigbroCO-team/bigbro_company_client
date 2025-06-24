import { get, orderQueryKeys, orderUrls } from '@/libs';
import { StagingOrderType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

const useGetStagingOrder = (
  options?: Omit<
    UseQueryOptions<StagingOrderType | null>,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery({
    queryKey: orderQueryKeys.getStagingOrder(),
    queryFn: () => get<StagingOrderType>(orderUrls.getStagingOrder()),
    ...options,
  });
};

export default useGetStagingOrder;
