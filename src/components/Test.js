import React from 'react';
import {NavDropdown,NavItem,Dropdown,Container,Row,Col} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontsawesome';
import {navTogBackground,breakpoint,navBackground} from '../constants';
const test='#2FA3F1';
class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lang:true,
            clickSty:{rotate:{},menu:{}},
            toggle:false,
            toggleStyle:{}
        }
        this.langClick=this.langClick.bind(this);
        this.toggleClick=this.toggleClick.bind(this);
        this.viewWidth = this.viewWidth.bind(this);
        this.test=this.test.bind(this);
    }
    componentDidMount() {
        this.viewWidth();
        window.addEventListener('resize', this.viewWidth);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.viewWidth);
    }
      
    langClick(){
        let style=this.state.lang?({rotate:{transform:`rotate(-180deg)`,transition:`all 0.5s`},menu:{display:`block`}}):
        ({rotate:{transition:`all 0.5s`},menu:{}});
        this.setState({
            lang:!this.state.lang,
            clickSty:style
        });
    }
    toggleClick(){
        let style;
        if (!this.state.toggle){
            style={backgroundColor:navTogBackground,overflow:`hidden`};
            document.body.style.overflow='hidden';
        }else{
            style={};
            document.body.style.overflow='visible';
        }
        this.setState({
            toggle:!this.state.toggle,
            toggleStyle:style
        });
    }
    viewWidth() {
        if (window.innerWidth>=breakpoint && this.state.toggle){
            this.setState({
                toggleStyle:{backgroundColor:navBackground}
            });
        }else if (window.innerWidth<breakpoint && this.state.toggle){
            this.setState({
                toggleStyle:{backgroundColor:navTogBackground}
            });
        }
    }
    test(){
        this.setState({
            toggleStyle:{backgroundColor:navTogBackground}
        }); 
        }
        
    render(){
        return(
            <div>
                <Navbar id="nav" expand="lg" style={this.state.toggleStyle}>
                    <Navbar.Brand href="#home">
                        <img id="logo" src={require("../images/logos.png")} alt="Ontology logo"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle id="toggle" onClick={this.toggleClick}>
                        {this.state.toggle?(
                            <FontAwesomeIcon id="bars" icon="times" size="lg"/>
                        ):(<FontAwesomeIcon id="bars" icon="bars" size="sm"/>
                        )}
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navLinks">
                        <Nav className="mr-auto">
                            <Dropdown onToggle={this.test} className="dropdown" as={NavItem}>
                                <Dropdown.Toggle style={this.state.toggleStyle} className="dropText">开发者
                                    <FontAwesomeIcon className="navIcon" icon="angle-down" size="sm"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropMenu">
                                    <Dropdown.Item className="item">Bounty Program</Dropdown.Item>
                                    <Dropdown.Item className="item">区块浏览器</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="dropdown" as={NavItem}>
                                <Dropdown.Toggle className="dropText">dApps
                                    <FontAwesomeIcon className="navIcon" icon="angle-down" size="sm"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropMenu">
                                    <Dropdown.Item className="item">dApps List</Dropdown.Item>
                                    <Dropdown.Item className="item">Submit a App</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="dropdown" as={NavItem}>
                                <Dropdown.Toggle className="dropText">信任生态
                                    <FontAwesomeIcon className="navIcon" icon="angle-down" size="sm"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropMenu">
                                    <Dropdown.Item className="item">信任锚</Dropdown.Item>
                                    <Dropdown.Item className="item">节点</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="dropdown" as={NavItem}>
                                <Dropdown.Toggle className="dropText" >关于
                                    <FontAwesomeIcon className="navIcon" icon="angle-down" size="sm"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropMenu">
                                    <Dropdown.Item className="item">关于我们</Dropdown.Item>
                                    <Dropdown.Item className="item">联系我们</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown onToggle={this.langClick} id="langDrop" as={NavItem}>
                                <Dropdown.Toggle id="langText" >中文
                                    <FontAwesomeIcon style={this.state.clickSty['rotate']} id="langIcon" icon="angle-down" size="sm"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={this.state.clickSty['menu']} id="langMenu">
                                    <Dropdown.Item className="langItem">中文</Dropdown.Item>
                                    <Dropdown.Item className="langItem">English</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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