import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './App.scss'

function BasicExample() {
  return (
    <Container >

      <Navbar bg="light" expand="sm" fixed="top" variant="light" >
        <Container fluid>
          <Navbar.Brand href="/home">Jacob Chestnut</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="/nice-tapes">Nice Tapes</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row className="border">
        <Col className="border d-flex justify-content-right">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg/275px-Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg"/>
        </Col>
        <Col className="border d-flex justify-content-left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg/275px-Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg"/>
        </Col>
      </Row>

    </Container>
  );
}

export default BasicExample;