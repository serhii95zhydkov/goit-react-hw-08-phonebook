import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import {
  StyledTextFieldWrapper,
  StyledTextFieldInput,
} from './TextField.styled';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <StyledTextFieldWrapper>
      <label htmlFor={id}>{label}</label>
      <StyledTextFieldInput id={id} onChange={handleChange} {...props} />
    </StyledTextFieldWrapper>
  );
};

export default TextField;
