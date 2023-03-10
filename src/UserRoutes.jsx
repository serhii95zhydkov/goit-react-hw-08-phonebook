import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const PhonebookPage = lazy(() => import('./pages/PhonebookPage/PhonebookPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<PhonebookPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
