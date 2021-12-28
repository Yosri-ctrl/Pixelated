import { Form, Button, Image, Offcanvas } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react';
import Logo from "../Assests/logo.svg";
import Gmail from "../Assests/gmail.png";
import Facebook from "../Assests/facebook.png";
import Twitter from "../Assests/twitter.png";
import 'react-tabs/style/react-tabs.css';
import './Login.scss';

export default function Login() {
	return (
		<>
			<OffCanvasExample key="1" placement="end" />
		</>
	)
}

function OffCanvasExample({ name, ...props }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow} className="me-2">
				Login
			</Button>
			<Offcanvas show={show} onHide={handleClose} {...props} >
				<Offcanvas.Header closeButton>
					<Offcanvas.Title><img src={Logo} alt="logo" width="90px" /></Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body className="bgd">
					<Tabs>
						<TabList>
							<Tab>Sign In</Tab>
							<Tab>Sign Up</Tab>
						</TabList>

						<TabPanel>
							<div className="form">
								<Form className="form-login">
									<h3 className="text-center mb-4">Login</h3>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>User Name</Form.Label>
										<Form.Control type="name" placeholder="User Name" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="Password" minLength="8" />
										<Form.Text className="col text-right">
											<a href="passRest" className="text-decoration-none">Forgot password</a>
										</Form.Text>
									</Form.Group>
									<Form.Group className="col text-center">
										<Image src={Facebook} roundedCircle width="30px" />
										<Image src={Twitter} roundedCircle width="30px" />
										<Image src={Gmail} roundedCircle width="30px" />
									</Form.Group>
									<Form.Group className="col text-center">
										<Button variant="primary" type="submit" className="w-50 m-3">Sign In</Button>
									</Form.Group>
								</Form>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="form border rounded border-dark">
								<Form className="form-login">
									<h3 className="text-center">Sign Up</h3>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>User Name</Form.Label>
										<Form.Control type="name" placeholder="Jhon" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="********" minLength="8" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>Email</Form.Label>
										<Form.Control type="password" placeholder="email@exemple.com" />
									</Form.Group>
									<Form.Group className="col text-center">
										<Image src={Facebook} roundedCircle width="30px" />
										<Image src={Twitter} roundedCircle width="30px" />
										<Image src={Gmail} roundedCircle width="30px" />
									</Form.Group>
									<Form.Group className="col text-center">
										<Button variant="primary" type="submit" className="w-50 m-2">Sign Up</Button>
									</Form.Group>
								</Form>
							</div>
						</TabPanel>
					</Tabs>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}