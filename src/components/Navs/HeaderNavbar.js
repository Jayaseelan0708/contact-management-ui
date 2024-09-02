import { React }from 'react';
import { Button ,NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch ,FaUserCircle } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import { Dropdown, DropdownButton } from 'react-bootstrap';
 
 
 

function HeaderNavbar() {
  const navigate = useNavigate();
     

  const handleLogout = () => {
    
    alert(JSON.stringify("ARE YOU  SURE WANT TO LOGOUT!", null, 2));
    navigate('/');
  }

 

  return (
    <div className="header-navbar">
    <Navbar expand="lg" className="bg-body-tertiary"  id="navbar" >
      <Container fluid >
         <h2  className="header-tittle">
        Dashboard
        </h2>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav> 
           <div className="form">
            <Form className="d-flex">
              <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark" className='btn-search'> <FaSearch /></Button>
          </Form>
          </div>

          <div className=" profile-dropdown">
      <DropdownButton id="dropdown-basic-button" title={<i><FaUserCircle /></i>}>
      <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
      <NavDropdown.Divider />
      <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
      <NavDropdown.Divider />
      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
    </DropdownButton>
    </div>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    </div>
  );
 
} 

export default HeaderNavbar;
 

 
