import { useSelector, useDispatch } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

import {
  StyledUserMenuContainer,
  StyledLogoutContainer,
  StyledUserMenuText,
} from './UserMenu.styled';

import { Button } from '@mui/material';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <StyledUserMenuContainer>
      <StyledLogoutContainer>
        <StyledUserMenuText>{email}</StyledUserMenuText>
        <Button
          type="button"
          onClick={onLogout}
          variant="contained"
          size="small"
        >
          Logout
        </Button>
      </StyledLogoutContainer>
    </StyledUserMenuContainer>
  );
};

export default UserMenu;
