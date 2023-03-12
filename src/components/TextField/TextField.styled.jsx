import styled from 'styled-components';

const StyledTextFieldWrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const StyledTextFieldLabel = styled.label`
  font-weight: 700;
`;
const StyledTextFieldInput = styled.input`
  padding: 10px;
  border: 1px solid;
  border-radius: 4px;
`;

export { StyledTextFieldWrapper, StyledTextFieldLabel, StyledTextFieldInput };
