import useForm from 'hooks/useForm';
import initialState from './initialState';
import TextField from 'components/TextField/TextField';
import fields from './fields';

import { StyledRegisterForm } from './RegisterForm.styled';
import { Button } from '@mui/material';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <StyledRegisterForm onSubmit={handleSubmit}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button type="submit" variant="contained" size="small">
        Sign up
      </Button>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
