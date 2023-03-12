import styled from 'styled-components';

const StyledUserMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  padding: 20px 20px;
`;

const StyledLogoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const StyledUserMenuText = styled.p`
  margin-right: 10px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.15em;
  color: #1976d2;
`;

export { StyledUserMenuContainer, StyledLogoutContainer, StyledUserMenuText };
