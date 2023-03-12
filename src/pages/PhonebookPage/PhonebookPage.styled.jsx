import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const StyledTitle = styled.h1`
  text-align: center;
  padding: 20px;
  color: #131313;
  letter-spacing: 0.15em;
  text-shadow: 2px 2px 0px #ffffff, 5px 4px 0px rgba(0, 0, 0, 0.15);
`;

const StyledTitleContacts = styled.h2`
  text-align: center;
  padding: 20px;
  color: #131313;
  letter-spacing: 0.15em;
  text-shadow: 2px 2px 0px #ffffff, 5px 4px 0px rgba(0, 0, 0, 0.15);
`;

export { StyledContainer, StyledTitle, StyledTitleContacts };
