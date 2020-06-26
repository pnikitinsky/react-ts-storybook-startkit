import React from 'react'
import styled from '@emotion/styled';

const Container = styled.nav`
  color: red;
`;

const Button = styled.button`
  color: red;
`;

const Navbar: React.FC = (props) => (
  <Container>
    <div className="nav-wrapper 8e24aa purple darken-1">
      <a href="#" className="brand-logo">React + typescript</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Tasks list</a></li>
        <li><a href="/">Info</a></li>
      </ul>
    </div>
  </Container>
)

export { Navbar, Button };
