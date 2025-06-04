export const addressUrls = {
  getAddress: () => '/address',
  getAddressById: (id: number) => `/address/${id}`,
  getDefaultAddress: () => '/address/default',
  postAddress: () => '/address',
  postSetDefaultAddress: (id: number) => `/address/default/${id}`,
  putAddress: (id: number) => `/address/${id}`,
  delAddress: (id: number) => `/address/${id}`,
};
