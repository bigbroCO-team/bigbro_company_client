import { BrandType } from '@/types';

export const addressQueryKeys = {
  getAddress: () => ['address', 'get'],
  getDefaultAddress: () => ['address', 'default'],
  postAddress: () => ['address', 'post'],
  postSetDefaultAddress: (id: number) => ['address', 'setDefault', 'post', id],
  putAddress: (id: number) => ['address', 'put', id],
  delAddress: (id: number) => ['address', 'delete', id],
};

export const productQueryKeys = {
  getProductById: (id: number) => ['product', 'get', id],
  getProductByBrand: (brand: BrandType) => ['product', 'brand', brand],
};

export const accountQueryKeys = {
  getMyInfo: () => ['account', 'myInfo', 'get'],
};

export const orderQueryKeys = {
  getMyOrder: () => ['order', 'my', 'list'],
  postStagingOrder: () => ['order', 'staging', 'post'],
  getStagingOrder: () => ['order', 'staging', 'get'],
  patchStagingOrder: () => ['order', 'staging', 'patch'],
};
