import styled from '@emotion/styled';
import Link from 'next/link';

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
  justify-content: space-between;
`;

export const LeftSection = styled.section`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const PlusButton = styled(Link)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Description = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.color.gray2};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  margin-top: 4.25rem;
`;

export const AddressCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 0.75rem;
`;

export const Card = styled.div<{ isDefault: boolean }>`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  border: 1px solid
    ${({ theme, isDefault }) =>
      isDefault ? theme.color.main : theme.color.gray4};
`;

export const Name = styled.span``;

export const Phone = styled.p``;

export const Address = styled.p``;

export const Detail = styled.p``;

export const Tag = styled.span``;

export const TopSection = styled.section`
  width: 100%;

  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.6875rem;

  color: ${({ theme }) => theme.color.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MiddleSection = styled.section`
  width: 100%;

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;

  color: ${({ theme }) => theme.color.white};
`;

export const BottomSection = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteButton = styled.button`
  width: 14.75rem;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.color.gray1};

  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;

  color: ${({ theme }) => theme.color.gray2};
`;

export const EditButton = styled(DeleteButton)``;

export const DefaultButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
`;
