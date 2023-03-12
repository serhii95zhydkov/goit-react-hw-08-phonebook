import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth/auth-operations';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { StyledContainer, StyledTitle } from './RegisterPage.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <StyledContainer>
      <StyledTitle>REGISTER</StyledTitle>
      <RegisterForm onSubmit={handleSignup} />
    </StyledContainer>
  );
};

export default RegisterPage;
