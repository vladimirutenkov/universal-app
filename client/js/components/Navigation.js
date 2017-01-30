import React from 'react';
import { IndexLink } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Navigation() {
    return (
        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <IndexLink to="/">Universal App</IndexLink>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to="/counter">
                        <NavItem>Counter</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <NavItem>About</NavItem>
                    </LinkContainer>
                </Nav>
                <Nav pullRight>
                    <NavDropdown title="User Name" id="basic-nav-dropdown">
                        <LinkContainer to="#">
                            <MenuItem>Profile</MenuItem>
                        </LinkContainer>
                        <MenuItem divider/>
                        <MenuItem href="#">Sign out</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
