import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";
import Home from "./Home";
import Projects from "./Projects";
import GitHub from "./GitHub";
import Contact from "./Contact";
import Blog from "./Blog";
// import LinearProgress from '@material-ui/core/LinearProgress';

export class NavBar extends Component {
	render() {
		return (
			<div className="container">
				<Navbar className="nav-color" expand="lg" variant="dark">
					<Navbar.Brand>Kyle Wannacott</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link className="nav-link" as={Link} to="/Blog">
								{" "}
								Blog{" "}
							</Nav.Link>
							{/*<Nav.Link as={Link} to="/Projects">
                {" "}
                Projects{" "}
              </Nav.Link>
              */}
							<Nav.Link as={Link} to="/GitHub">
								{" "}
								Github Statistics{" "}
							</Nav.Link>
							<Nav.Link className="nav-link" as={Link} to="/Contact">
								{" "}
								Contact{" "}
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				{/* <LinearProgress/> */}
				<br></br>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/Blog" component={Blog} />
						<Route path="/Projects" component={Projects} />
						<Route path="/GitHub" component={GitHub} />
						<Route path="/Contact" component={Contact} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default NavBar;
