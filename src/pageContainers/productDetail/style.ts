import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  padding: 6.5rem 1rem 0 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: scroll;
`;

export const ImageBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const MainImageWrapper = styled.div`
  position: relative;
  width: 35.5rem;
  height: 35.5rem;
`;

export const ImageController = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Hr = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: ${({ theme }) => theme.color.gray100};
  margin: 1.5rem 0;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
`;

export const PriceBox = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const BottomBox = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const DefaultPrice = styled.p`
  color: ${({ theme }) => theme.color.gray1};
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.9375rem;
  text-decoration: line-through;
`;

export const DiscountedPrice = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.9375rem;
`;

export const DiscountRate = styled.p`
  color: ${({ theme }) => theme.color.error};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.9375rem;
`;

export const SelectBox = styled.div`
  color: ${({ theme }) => theme.color.gray1};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const DeliveryInfo = styled.p`
  color: ${({ theme }) => theme.color.gray1};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  display: flex;
  gap: 2.5rem;
`;

export const Select = styled.select`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.dark};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray100};
  color: #a8a3a3;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 0.5rem 1rem;
`;

export const OptionCard = styled.div`
  background-color: ${({ theme }) => theme.color.dark};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray100};
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const CardTopBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
`;

export const CardBottomBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
`;

export const XButton = styled.button`
  height: 1.5rem;
`;

export const CountBox = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  padding: 0.25rem 0.5rem;
  gap: 0.5rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray1};
`;

export const ControlButton = styled.button`
  height: 1rem;
`;

export const TotalPriceBox = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;

  display: flex;
  justify-content: end;
  gap: 1.5rem;
  align-items: center;
  margin-top: 1rem;
`;

export const TotalPrice = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.6875rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.75rem;
  width: 100%;
`;

export const BuyButton = styled.button`
  /* width: 16.5rem; */
  width: 100%;
  height: 3.5rem;
  color: ${({ theme }) => theme.color.dark};
  background-color: ${({ theme }) => theme.color.main};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartButton = styled(BuyButton)`
  color: ${({ theme }) => theme.color.main};
  background-color: ${({ theme }) => theme.color.dark};
  border: 0.0625rem solid ${({ theme }) => theme.color.main};
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.color.gray3};
  margin: 2.5rem 0;

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  width: 100%;
  white-space: pre-wrap;
`;

export const SubImageWrapper = styled(MainImageWrapper)<{
  isSelected: boolean;
}>`
  box-sizing: border-box;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? 0.0625 : 0)}rem solid
    ${({ theme }) => theme.color.main};
`;
