import styled from "styled-components";
import { Link } from "react-router-dom"

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #2c3e50;
`;

export const NavLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  padding: 2rem;
`;