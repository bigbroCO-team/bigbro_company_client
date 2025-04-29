import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 6.81rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartHeader = styled.header`
  width: calc(100% - 2rem);
  padding-bottom: 1.25rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.white};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AllSelectButton = styled.button`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const DeleteCartButton = styled.button`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.color.error};
  height: 1.75rem;
`;

export const Divider = styled.div`
  width: 0.0625rem;
  height: 2.25rem;
  margin-left: 1.75rem;
  background-color: ${({ theme }) => theme.color.white};
`;

export const CartHeaderLeftBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CartItemBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: scroll;
  padding: 0 1rem;
`;
