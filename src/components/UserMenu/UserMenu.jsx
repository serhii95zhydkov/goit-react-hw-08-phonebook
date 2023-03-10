import { useSelector, useDispatch } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>{email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
