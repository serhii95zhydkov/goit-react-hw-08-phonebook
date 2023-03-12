import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { getAuth } from 'redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';

const PublicRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
