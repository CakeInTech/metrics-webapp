import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting, AiFillHome } from 'react-icons/ai';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../sass/Navbar.scss';

const Navlink = () => (
  <NavLink className="home-icon" to="/">{AiFillHome}</NavLink>
);
const Navbars = () => (
  <Container className="header">
    <Navbar className="Navbar">
      <Nav className="home">
        {Navlink()}
      </Nav>
      <h2 className="navHead">Country Stats</h2>
      <div className="header-icons">
        <FaMicrophone className="header-icon" />
        <AiOutlineSetting className="header-icon" />
      </div>
    </Navbar>
  </Container>
);

export default Navbars;
