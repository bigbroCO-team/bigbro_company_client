import { AxiosError } from 'axios';

import { orderQueryKeys, orderUrls, patch } from '@/libs';
import { PatchStagingOrderType } from '@/types';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

const usePatchStagingOrder = (
  options?: Omit<
    UseMutationOptions<unknown, AxiosError, PatchStagingOrderType, unknown>,
    'mutationKey' | 'mutationFn'
  >
) =>
  useMutation({
    mutationKey: orderQueryKeys.patchStagingOrder(),
    mutationFn: ({ id, request, address }) =>
      patch(orderUrls.patchStagingOrder(id), { request, address }),
    ...options,
  });

export default usePatchStagingOrder;
