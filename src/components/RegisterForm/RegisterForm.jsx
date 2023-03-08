import useForm from 'hooks/useForm';
import initialState from './initialState';
import TextField from 'components/TextField/TextField';
import fields from './fields';
import Button from 'components/Button/Button';
import { StyledRegisterForm } from './RegisterForm.styled';

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
      <Button>Register</Button>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
