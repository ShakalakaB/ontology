import React from 'react';
import {Navbar,Nav,NavItem,Dropdown} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontsawesome';
import {navTogBackground,breakpoint,navBackground,navContent} from '../constants';
class NavbarS extends React.Component{
    constructor(props){
        super(props);
        this.state={
            langCli:true,
            langCho:true,
            clickSty:{rotate:{},menu:{}},
            navToggle:false,
            navToggleStyle:{},
            textToggle:false,
            //textIconSty:{},
            textStyle:{}
        }
        this.langClick=this.langClick.bind(this);
        this.langChoose=this.langChoose.bind(this);
        this.navToggleClick=this.navToggleClick.bind(this);
        this.viewWidth = this.viewWidth.bind(this);
        this.textToggle=this.textToggle.bind(this);
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
            langCli:!this.state.langCli,
            clickSty:style
        });
    }
    langChoose(){
        if(event.target.id=='chinese'){
            this.setState({langCho:true});
        }else{
            this.setState({langCho:false});
        }
    }
    navToggleClick(){
        let style;
        if (!this.state.navToggle){
            style={backgroundColor:navTogBackground,overflow:`hidden`};
            document.body.style.overflow='hidden';
        }else{
            style={};
            document.body.style.overflow='visible';
        }
        this.setState({
            navToggle:!this.state.navToggle,
            navToggleStyle:style
        });
    }
    viewWidth() {
        this.setState({
            textStyle:{backgroundColor:navBackground,boxShadow:`none`,borderBottom:`1px solid rgba(255,255,255,0.3)`}
        });
        if (window.innerWidth>=breakpoint && this.state.navToggle){
            this.setState({
                navToggleStyle:{backgroundColor:navBackground}
            });
        }else if (window.innerWidth<breakpoint && this.state.navToggle){
            this.setState({
                navToggleStyle:{backgroundColor:navTogBackground}
            });
        }
    }
    textToggle(event){
        if (window.innerWidth<breakpoint){
            /*let style=(this.state.textToggle)?(
                {transition:`all o.1s`}
            ):(
                {transform:`rotate(180deg)`,transition:`all 0.5s`}
            );*/
            this.setState({
                textStyle:{backgroundColor:navBackground,boxShadow:`none`,borderBottom:`1px solid rgba(255,255,255,0.3)`},
                //textToggle:!this.state.textToggle,
                //textIconSty:style
            });
        }
    }
    render(){
        let navItems=(this.state.langCho)?
            (navContent['chinese'].map(e=>{
                return (
                <Dropdown key={'dropdown'+e['id']} id={'dropdown'+e['id']} onToggle={this.textToggle} className="dropdown" as={NavItem}>
                    <Dropdown.Toggle style={this.state.textStyle} className="dropText">{e['dropToggle']}
                        <FontAwesomeIcon  className="navIcon" icon="angle-down" size="sm"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropMenu">
                        {e['dropItem'].map((d,i)=>{
                            return (<Dropdown.Item key={'dropItem'+i} className="item">{d}</Dropdown.Item>);
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                )
            })):(navContent['english'].map(e=>{
                return (
                <Dropdown key={'dropdown'+e['id']} onToggle={this.textToggle} className="dropdown" as={NavItem}>
                    <Dropdown.Toggle style={this.state.textStyle} className="dropText">{e['dropToggle']}
                        <FontAwesomeIcon  className="navIcon" icon="angle-down" size="sm"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropMenu">
                        {e['dropItem'].map((d,i)=>{
                            return (<Dropdown.Item key={'dropItem'+i} className="item">{d}</Dropdown.Item>);
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                )
            }));
        return(
            <div>
                <Navbar id="nav" expand="lg" style={this.state.navToggleStyle}>
                    <Navbar.Brand href="#home">
                        <img id="logo" src={require("../images/logos.png")} alt="Ontology logo"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle id="toggle" onClick={this.navToggleClick}>
                        {this.state.toggle?(
                            <FontAwesomeIcon id="bars" icon="times" size="lg"/>
                        ):(<FontAwesomeIcon id="bars" icon="bars" size="sm"/>
                        )}
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navLinks">
                        <Nav className="mr-auto">
                            {navItems}
                            <Dropdown onToggle={this.langClick} id="langDrop" as={NavItem}>
                                <Dropdown.Toggle id="langText" >{this.state.langCho?'中文':'English'}
                                    <FontAwesomeIcon style={this.state.clickSty['rotate']} id="langIcon" icon="angle-down" size="sm"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={this.state.clickSty['menu']} id="langMenu">
                                    <Dropdown.Item className="langItem" id="chinese" onClick={this.langChoose}>中文</Dropdown.Item>
                                    <Dropdown.Item className="langItem" id="english" onClick={this.langChoose}>English</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
export default NavbarS;