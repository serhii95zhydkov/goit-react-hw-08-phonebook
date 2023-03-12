import TextField from 'components/TextField/TextField';

import useForm from 'hooks/useForm';

import fields from './fields';
import initialState from './initialState';

import { StyledLoginForm } from './LoginForm.styled';
import { Button } from '@mui/material';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button type="submit" variant="contained" size="small">
        Login
      </Button>
    </StyledLoginForm>
  );
};

export default LoginForm;
