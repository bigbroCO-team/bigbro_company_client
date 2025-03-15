import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #1a1918;
  color: white;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
`;

export const HeaderButton = styled.button`
  padding: 4px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

export const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const CheckCircle = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #ff952b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`;

export const SuccessMessage = styled.h2`
  margin: 0 0 80px 0;

  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
`;

export const ActionButton = styled.button`
  width: 375px;
  padding: 16px 0;
  background-color: #ff952b;
  border: none;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
`;
