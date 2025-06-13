import { accountQueryKeys, accountUrls, get } from '@/libs';
import { MyInfoType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

const useGetMyInfo = (
  options?: Omit<UseQueryOptions<MyInfoType>, 'queryKey' | 'queryFn'>
) =>
  useQuery({
    queryKey: accountQueryKeys.getMyInfo(),
    queryFn: () => get<MyInfoType>(accountUrls.getMyInfo()),
    ...options,
  });

export default useGetMyInfo;
