import { get, productQueryKeys, productUrls } from '@/libs';
import { ProductType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

const useGetProductById = (
  id: number,
  options?: Omit<UseQueryOptions<ProductType>, 'queryKey' | 'queryFn'>
) =>
  useQuery({
    queryKey: productQueryKeys.getProductById(id),
    queryFn: () => get<ProductType>(productUrls.getProductById(id)),
    ...options,
  });

export default useGetProductById;
