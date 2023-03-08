import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import { isUserLogin } from 'redux/auth/auth-selectors';

import { StyledNavbar } from './Navbar.styled';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <StyledNavbar>
      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </StyledNavbar>
  );
};
export default Navbar;
