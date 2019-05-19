import React from 'react';
import {Navbar,Nav,NavDropdown,NavItem,Dropdown,Container,Row,Col} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontsawesome';
class Homepage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Navbar id="nav" expand="md" >
                    <Navbar.Brand href="#home">
                        <img id="logo" src={require("../images/logos.png")} alt="Ontology logo"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle id="toggle"></Navbar.Toggle>
                    <Navbar.Collapse id="navLinks">
                        <Nav className="mr-auto">
                            <Dropdown className="dropdown" as={NavItem}>
                                <Dropdown.Toggle className="dropText">开发者
                                    <FontAwesomeIcon className="navIcon" icon="angle-down" size="sm"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropMenu">
                                    <Dropdown.Item>Bounty Program</Dropdown.Item>
                                    <Dropdown.Item>区块浏览器</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="dropdown" as={NavItem}>
                                <Dropdown.Toggle className="dropText">dApps
                                    <FontAwesomeIcon className="navIcon" icon="angle-down" size="sm"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropMenu">
                                    <Dropdown.Item>dApps List</Dropdown.Item>
                                    <Dropdown.Item>Submit a App</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="dropdown" as={NavItem}>
                                <Dropdown.Toggle className="dropText">信任生态
                                    <FontAwesomeIcon className="navIcon" icon="angle-down" size="sm"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropMenu">
                                    <Dropdown.Item>信任锚</Dropdown.Item>
                                    <Dropdown.Item>节点</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown id="test2" as={NavItem}>
                                <Dropdown.Toggle id="test1" >Click
                                    <FontAwesomeIcon id="test4" icon="angle-down" size="sm"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu id="test3">
                                    <Dropdown.Item>Hello there!</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link href="#">关于</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/*<div id="content">
                    <div id="homeImage"></div>
                    <Container id="news"></Container>
                    <Container id="intro"></Container>
                    <Carousel id="newsCar"></Carousel>
                    <Carousel id="parter"></Carousel>
                    <div id="socialMedia"></div>
                    <div id="footer"></div>
                </div>*/}
            </div>
        );
    }
}
export default Homepage;