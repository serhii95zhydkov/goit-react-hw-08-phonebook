import styled from 'styled-components';

const StyledItemContacts = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const StyledTextContacts = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export { StyledItemContacts, StyledTextContacts };
