import React from 'react';
// Import React Bootstrap Compopnents
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
// Import CSS
import './Header.css';

// Import Images
import logo from '../../img/logo.png';
import notificationIcon from '../../img/notification.svg';
import userIcon from '../../img/avatar.svg';
import propicOne from '../../img/profilepic.jpg';

class Header extends React.Component {
    render() {
      return (
        <div className="header">
          <Container fluid>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/">
                <img src={logo} alt="Logo" className="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto menu-list">
                  <Nav.Link href="#">Menu 1</Nav.Link>
                  <Nav.Link href="#">Menu 2</Nav.Link>
                  <Nav.Link href="#">Menu 3</Nav.Link>
                  <Nav.Link href="#">Menu 4</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Nav className="right-menus">
                <Nav.Link href="#home">
                  <img src={notificationIcon} alt="Notification Icon" style={{height: 28}} /> <Badge variant="secondary">2</Badge>
                </Nav.Link>
                <Nav.Link href="#home">
                  <a><img src={propicOne} className="pro-pic" alt="Profile Pic" /></a>
                </Nav.Link>
              </Nav>
            </Navbar>
          </Container>
        </div>
        
      );
    }
  }
  export { Header };