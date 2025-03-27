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
  width: 100%;
  height: 2.5rem;
`;

export const DeleteCartButton = styled.button`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.color.error};
  height: 1.75rem;
`;
