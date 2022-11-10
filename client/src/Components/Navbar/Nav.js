import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../JS/ACTIONS/user';
import './Navb.css';
const NavBar = () => {
  const isAuth = useSelector(state => state.userReducer.isAuth)
  const dispatch = useDispatch()
  return (
    <div>

   
       

        <Navbar bg="light" expand="lg">
      <Container>
      
      <Navbar.Brand href="/">MERN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>








          
          
          
              
             
             
            
            { isAuth ? <Nav.Link href="/profile">Profile</Nav.Link> : null}

            { isAuth ? <NavDropdown title="Contacts" id="basic-nav-dropdown">
              <NavDropdown.Item href="/contactlist">Liste Contact </NavDropdown.Item>
              <NavDropdown.Item href="/add">
               Add Contact
              </NavDropdown.Item>
              </NavDropdown>
              : null}
              
                </Nav>
                
                
                { isAuth ? 
                
                    ( <div className='logout'> <Nav.Link href="/" onClick={() => dispatch(logout())}>logout</Nav.Link></div>)
                    :
                    ( <div className='login'> 
                      <Nav.Link href="/Login" >Login</Nav.Link>
                     
                      <Nav.Link href="/Register">Register</Nav.Link>
                      </div>
                  
                )}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default NavBar