import React from 'react';
import {Nav,NavDropdown,NavItem,Dropdown,Container,Row,Col} from 'react-bootstrap';

import NavbarS from './NavbarS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontsawesome';
class Homepage extends React.Component{
    constructor(props){
        super(props);
        }
    render(){
        return(
            <div>
                <NavbarS />
                <div id="content">
                    <img id="homeImage" src={require("../images/Home.jpg")}></img>
                    {/*<Container id="newsTop"></Container>
                    <Container id="intro"></Container>
                    <Carousel id="newsCar"></Carousel>
                    <Carousel id="parter"></Carousel>
                    <div id="socialMedia"></div>
                    <div id="footer"></div>*/}
                </div>
            </div>
        );
    }
}
export default Homepage;