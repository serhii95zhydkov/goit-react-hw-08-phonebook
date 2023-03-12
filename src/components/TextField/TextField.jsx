import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import {
  StyledTextFieldWrapper,
  StyledTextFieldLabel,
  StyledTextFieldInput,
} from './TextField.styled';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <StyledTextFieldWrapper>
      <StyledTextFieldLabel htmlFor={id}>{label}</StyledTextFieldLabel>
      <StyledTextFieldInput id={id} onChange={handleChange} {...props} />
    </StyledTextFieldWrapper>
  );
};

export default TextField;
