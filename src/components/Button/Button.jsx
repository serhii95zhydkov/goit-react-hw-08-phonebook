import { StyledButton } from './Button.styled';

const Button = ({ children, type = 'submit' }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
