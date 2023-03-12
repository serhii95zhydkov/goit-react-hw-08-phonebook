import { Outlet } from 'react-router-dom';

import Navigation from 'components/Navigation/Navigation';

import { StyledHeader } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <StyledHeader>
        <Navigation />
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
