import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbarAuthLink = styled(NavLink)`
  display: inline-block;
  margin: 0 5px;
  text-decoration: none;
  color: #000;

  &.active {
    font-weight: bold;
  }
`;

export { StyledNavbarAuthLink };
