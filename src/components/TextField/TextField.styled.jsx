import styled from 'styled-components';

const StyledTextFieldWrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const StyledTextFieldInput = styled.input`
  padding: 10px;
  border: 1px solid;
  border-radius: 5px;
`;

export { StyledTextFieldWrapper, StyledTextFieldInput };
