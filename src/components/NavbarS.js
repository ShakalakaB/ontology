import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavItem,Dropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontsawesome';
import {navTogBackground,breakpoint,navBackground,navContent} from '../constants';

let lastIconId=0;
let sameIcon=true;
class NavbarS extends React.Component{
    constructor(props){
        super(props);
        this.state={
            langCli:true,
            langCho:true,
            clickSty:{rotate:{},menu:{}},
            navToggle:false,
            navStyle:{},
            textToggle:false,
            textStyle:{}
        }
        this.langClick=this.langClick.bind(this);
        this.langChoose=this.langChoose.bind(this);
        this.navToggleClick=this.navToggleClick.bind(this);
        this.viewWidth = this.viewWidth.bind(this);
        this.textToggle=this.textToggle.bind(this);
        this.iconRotate=this.iconRotate.bind(this);
        this.mouEnter=this.mouEnter.bind(this);
        this.mouLea=this.mouLea.bind(this);
    }
    componentDidMount() {
        this.viewWidth();
        window.addEventListener('resize', this.viewWidth);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.viewWidth);
    }
      
    langClick(){
        let style=this.state.langCli?({rotate:{transform:`rotate(-180deg)`,transition:`all 0.5s`},menu:{display:`block`}}):
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
            navStyle:style
        });
    }
    viewWidth() {
        if(window.innerWidth<breakpoint){
            this.setState({
                textStyle:{backgroundColor:navBackground,boxShadow:`none`,borderBottom:`1px solid rgba(255,255,255,0.3)`}
            });
        }
        if (window.innerWidth>=breakpoint){
            let icons=document.getElementsByClassName('navIcon');
            Array.prototype.map.call(icons,icon=>{icon.style.transform="rotate(0deg)"});
            this.setState({
                textStyle:{border:`none`}
            });
        }
        
        if (window.innerWidth>=breakpoint && this.state.navToggle){
            this.setState({
                navStyle:{backgroundColor:navBackground}
            });
        }else if (window.innerWidth<breakpoint && this.state.navToggle){
            this.setState({
                navStyle:{backgroundColor:navTogBackground}
            });
        }
    }
    textToggle(event){
        if (window.innerWidth<breakpoint){
            this.setState({
                textStyle:{backgroundColor:navBackground,boxShadow:`none`,borderBottom:`1px solid rgba(255,255,255,0.3)`}
            });
        }
    }
    iconRotate(event){
        if (window.innerWidth<breakpoint){
            let iconId='icon'+(event.currentTarget.id).match(/\d+/)[0];
            let icon=document.getElementById(iconId);
            let lastIcon=document.getElementById(lastIconId);
            if (iconId==lastIconId){
                if(sameIcon){
                    icon.style.transform="rotate(0deg)";
                    icon.style.transition="all 0.1s";
                    sameIcon=false;
                }else{
                    icon.style.transform="rotate(180deg)";
                    icon.style.transition="all 0.5s";
                    sameIcon=true;
                }
            }else if (lastIconId!=0){
                icon.style.transform="rotate(180deg)";
                icon.style.transition="all 0.5s";
                lastIcon.style.transform="rotate(0deg)";
                lastIcon.style.transition="all 0.1s";
                sameIcon=true;
            }else if(lastIconId==0){
                icon.style.transform="rotate(180deg)";
                icon.style.transition="all 0.5s";
            }
            lastIconId=iconId;
        }
    }
    mouEnter(event){
        if (window.innerWidth>=breakpoint){
            let iconId='icon'+(event.currentTarget.id).match(/\d+/)[0];
            let icon=document.getElementById(iconId);
            icon.style.transform="rotate(-180deg)";
            icon.style.transition="all 0.5s";
        }
    }
    mouLea(event){
        if (window.innerWidth>=breakpoint){
            let iconId='icon'+(event.currentTarget.id).match(/\d+/)[0];
            let icon=document.getElementById(iconId);
            icon.style.transform="rotate(0deg)";
            icon.style.transition="all 0.1s";
        }
    }
    render(){
        let navItems=(this.state.langCho)?
            (navContent['chinese'].map(e=>{
                return (
                <Dropdown key={'dropdown'+e['id']} id={'dropdown'+e['id']} onClick={this.iconRotate} onToggle={this.textToggle} onMouseEnter={this.mouEnter}  onMouseLeave={this.mouLea} className="dropdown" as={NavItem}>
                    <Dropdown.Toggle style={this.state.textStyle} className="dropText">{e['dropToggle']}
                        <FontAwesomeIcon id={'icon'+e['id']} className="navIcon" icon="angle-down" size="lg"/>
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
                <Dropdown key={'dropdown'+e['id']}  onClick={this.iconRotate} onToggle={this.textToggle} onMouseEnter={this.mouEnter}  onMouseLeave={this.mouLea} className="dropdown" as={NavItem}>
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
            <div id="navWrap">
                <Navbar id="nav" expand="lg" style={this.state.navStyle}>
                    <Navbar.Brand>
                        <Link to="/test">
                            <img id="logo" src={require("../images/logos.png")} alt="Ontology logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle id="toggle" onClick={this.navToggleClick}>
                        {this.state.navToggle?(
                            <FontAwesomeIcon id="times" icon="times" size="lg" color="white" />
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