import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Logo from "../Assests/logo.svg"
import Login from '../Login/Login';


export default function Header() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" variant="dark" className="p-0 m-0">
				<Container>
					<Navbar.Brand href="#home" className="" >
						<img src={Logo} alt="logo" width="70px" className="" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#gamesList">Games</Nav.Link>
							<NavDropdown title="Categories" id="collasible-nav-dropdown" menuVariant="dark">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Puzzel</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Words</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Other..</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							{/* <Nav.Link href="#deets">More deets</Nav.Link> */}
							<Nav.Link eventKey={2} href="#memes">
								<Login />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
