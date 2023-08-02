'use client'
import { Navbar, Nav, Button, Form, FormControl, Container, NavDropdown } from "react-bootstrap"

function BsHeader() {
    return (
        <header>
            
            <Navbar collapseOnSelect  bg="dark" data-bs-theme="dark" expand="md">
                <Container fluid>
                    <Navbar.Brand href="#">Fixed navbar</Navbar.Brand>
                
            <Navbar.Toggle aria-controls="navbarCollapse" />
            <Navbar.Collapse id="navbarCollapse">
                <Nav className="me-auto">
                    <Nav.Link href="#" active>
                        Home
                    </Nav.Link>
                    <Nav.Link href="#">Link</Nav.Link>
                    <Nav.Link disabled>Disabled</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                <FormControl type="search" placeholder="Search" aria-label="Search" />
                <Button variant="outline-success" type="submit">
                    Search
                </Button>
                </Form>
            </Navbar.Collapse>
            </Container>
            </Navbar>
                     
      </header>
)};


export default BsHeader;