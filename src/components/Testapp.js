import React from 'react';
import {Navbar,Nav,NavItem,Dropdown} from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import TestRoutes from './TestRoutes';


  /* App component */
  class Testapp extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
        <div>
          <Navbar expand="lg" bg="light">
            <Navbar.Brand>
              <Link to="/">Homes</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle>column1</Dropdown.Toggle>
                <Dropdown.Menu>
                <LinkContainer to="/Category">
                    <Dropdown.Item>Category</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Products">
                    <Dropdown.Item>Products</Dropdown.Item>
                  </LinkContainer>
                </Dropdown.Menu>
              </Dropdown>
              </Nav>
            </Navbar.Collapse>
      </Navbar>
            /* Route components are rendered if the path prop matches the current URL */
          <TestRoutes />
        </div>
      )
    }
  }
  export default Testapp;
  