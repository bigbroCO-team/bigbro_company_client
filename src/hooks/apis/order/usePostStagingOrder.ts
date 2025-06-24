import { AxiosError } from 'axios';

import { orderQueryKeys, orderUrls, post } from '@/libs';
import { PatchStagingOrderType } from '@/types';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

const usePostStagingOrder = (
  options?: Omit<
    UseMutationOptions<unknown, AxiosError, PatchStagingOrderType, unknown>,
    'mutationKey' | 'mutationFn'
  >
) =>
  useMutation({
    mutationKey: orderQueryKeys.postStagingOrder(),
    mutationFn: (body) => post(orderUrls.postStagingOrder(), body),
    ...options,
  });

export default usePostStagingOrder;
