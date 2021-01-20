import React from "react";
import {Nav, Navbar} from 'react-bootstrap';

class myNavbar extends React.Component {
    render(){
        return(
            <Navbar bg="transparent" expand= "md" className = "py-0 fixed-top"> 
                <Navbar.Brand href="/"> FABFITS </Navbar.Brand>
                <Navbar.Collapse id="navLinks">
                    <Nav>
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/looks">LOOKS</Nav.Link>
                        <Nav.Link href="/contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default myNavbar;