import styled from 'styled-components';

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 360px;
  border: 1px solid black;
  padding: 15px;
`;

const StyledContainer = styled.div`
  padding-bottom: 20px;
`;

const StyledLabelForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  font-weight: 500;
`;

const StyledInputForm = styled.input`
  width: 333px;
  padding: 4px 12px;
  height: 20px;
  border-radius: 5px;
  font-size: 16px;
`;

export { StyledContactForm, StyledContainer, StyledLabelForm, StyledInputForm };
