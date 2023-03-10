import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import { isUserLogin } from 'redux/auth/auth-selectors';

import { StyledNavigation } from './Navigation.styled';

const Navigation = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <StyledNavigation>
      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </StyledNavigation>
  );
};
export default Navigation;
