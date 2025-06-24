import { AxiosError } from 'axios';

import { orderQueryKeys, orderUrls, post } from '@/libs';
import { PostStagingOrderType } from '@/types';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

const usePostStagingOrder = (
  options?: Omit<
    UseMutationOptions<unknown, AxiosError, PostStagingOrderType, unknown>,
    'mutationKey' | 'mutationFn'
  >
) =>
  useMutation({
    mutationKey: orderQueryKeys.postStagingOrder(),
    mutationFn: (body) => post(orderUrls.postStagingOrder(), body),
    ...options,
  });

export default usePostStagingOrder;
