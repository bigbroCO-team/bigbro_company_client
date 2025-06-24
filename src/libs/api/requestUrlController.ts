import { BrandType } from '@/types';

export const addressUrls = {
  getAddress: () => '/address',
  getAddressById: (id: number) => `/address/${id}`,
  getDefaultAddress: () => '/address/default',
  postAddress: () => '/address',
  postSetDefaultAddress: (id: number) => `/address/default/${id}`,
  putAddress: (id: number) => `/address/${id}`,
  delAddress: (id: number) => `/address/${id}`,
};

export const productUrls = {
  getProductById: (id: number) => `/product/${id}`,
  getProductByBrand: (brand: BrandType) => `/product?brand=${brand}`,
};

export const accountUrls = {
  getMyInfo: () => '/account/my',
};

export const orderUrls = {
  getMyOrder: () => '/order',
  postStagingOrder: () => '/order',
  getStagingOrder: () => '/order/staging',
  patchStagingOrder: (id: string) => `/order/${id}`,
};
