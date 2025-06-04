import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.75rem;
`;

export const AddressHeader = styled.header`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6875rem;
  gap: 0.75rem;
`;

export const AddressForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
`;

export const SubmitButton = styled.button`
  width: 25.375rem;
  height: 2.875rem;
  color: ${({ theme }) => theme.color.dark};
  background-color: ${({ theme }) => theme.color.main};

  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray1};
    color: ${({ theme }) => theme.color.gray3};
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.color.white};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;

  gap: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.color.gray100};
  background-color: transparent;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.color.white};

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray2};
  }
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  margin: 0.5rem 0;
`;

export const SearchButton = styled.button`
  width: 7.75rem;
  height: 2.875rem;
  border: 1px solid ${({ theme }) => theme.color.gray4};

  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
`;
