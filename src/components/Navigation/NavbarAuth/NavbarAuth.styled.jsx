import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbarAuthContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledNavbarAuthLink = styled(NavLink)`
  display: inline-block;
  padding: 25px 20px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  &:hover,
  &:focus {
    color: #1976d2;
  }
`;

export { StyledNavbarAuthLink, StyledNavbarAuthContainer };
