'use client'
import { Navbar, Nav, Button, Form, FormControl, Container, NavDropdown, Offcanvas } from "react-bootstrap"
import { useState } from 'react';

function BsHeader() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        
    return (



        <header>
            
            <Navbar collapseOnSelect  bg="dark" data-bs-theme="dark" expand="md">
                <Container fluid>
                <Button variant="primary" onClick={handleShow}>
                        Launch
                    </Button>
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
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
                     
      </header>
)};


export default BsHeader;