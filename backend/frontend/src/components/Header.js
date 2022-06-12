import React from 'react'
import { Navbar, Nav, Container, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand>KAOS Shop</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Link to='/cart'>
                <Nav.Link ><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
              </Link>  
              
              <LinkContainer to='/login'>
                <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header