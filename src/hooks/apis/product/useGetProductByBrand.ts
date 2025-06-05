import { get, productQueryKeys, productUrls } from '@/libs';
import { BrandType, ProductType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

const useGetProductByBrand = (
  brand: BrandType,
  options?: Omit<UseQueryOptions<ProductType[]>, 'queryKey' | 'queryFn'>
) =>
  useQuery({
    queryKey: productQueryKeys.getProductByBrand(brand),
    queryFn: () => get<ProductType[]>(productUrls.getProductByBrand(brand)),
    ...options,
  });

export default useGetProductByBrand;
