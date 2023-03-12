import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth-operations';

import LoginForm from 'components/LoginForm/LoginForm';

import { StyledContainer, StyledTitle } from './LoginPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <StyledContainer>
      <StyledTitle>LOGIN</StyledTitle>
      <LoginForm onSubmit={handleLogin} />
    </StyledContainer>
  );
};

export default LoginPage;
