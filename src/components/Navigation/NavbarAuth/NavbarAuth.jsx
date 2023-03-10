import { StyledNavbarAuthLink } from './NavbarAuth.styled';

const NavbarAuth = () => {
  return (
    <div>
      <StyledNavbarAuthLink to="/register">Register</StyledNavbarAuthLink> |
      <StyledNavbarAuthLink to="/login">Login</StyledNavbarAuthLink>
    </div>
  );
};

export default NavbarAuth;
