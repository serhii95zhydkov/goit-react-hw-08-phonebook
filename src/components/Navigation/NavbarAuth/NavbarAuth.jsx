import {
  StyledNavbarAuthLink,
  StyledNavbarAuthContainer,
} from './NavbarAuth.styled';

const NavbarAuth = () => {
  return (
    <StyledNavbarAuthContainer>
      <StyledNavbarAuthLink to="/register">Register</StyledNavbarAuthLink>
      <StyledNavbarAuthLink to="/login">Login</StyledNavbarAuthLink>
    </StyledNavbarAuthContainer>
  );
};

export default NavbarAuth;
