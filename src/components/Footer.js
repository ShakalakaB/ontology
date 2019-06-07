import React from 'react';
import {Collapse,Dropdown} from 'react-bootstrap';
import {navContent,mdBreakpoint} from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontsawesome';

let footerNav=[false,false,false,false];

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item1:false,
            item2:false,
            item3:false,
            item4:false,
            langTog:false,
            langIconSty:{}
        };
        this.viewWidth = this.viewWidth.bind(this);
        this.clickItem1=this.clickItem1.bind(this);
        this.clickItem2=this.clickItem2.bind(this);
        this.clickItem3=this.clickItem3.bind(this);
        this.clickItem4=this.clickItem4.bind(this);
        this.langToggle=this.langToggle.bind(this);
    }
    componentDidMount() {
        this.viewWidth();
        window.addEventListener('resize', this.viewWidth);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.viewWidth);
    }
    viewWidth() {
        if(window.innerWidth>=mdBreakpoint){
            this.setState({item1:true,item2:true,item3:true,item4:true});
        }else{
            this.setState({ item1:footerNav[0],item2:footerNav[1],item3:footerNav[2],item4:footerNav[3]});
        }
    }
    clickItem1(){
        let icon=document.getElementById('itemIcon1');
        if(window.innerWidth<mdBreakpoint){
            this.setState({item1:!this.state.item1});
            footerNav[0]=!this.state.item1;
        }
        if(this.state.item1){
            icon.style.transform="rotate(0deg)";
            icon.style.transition="all 0.1s";
        }else{
            icon.style.transform="rotate(-180deg)";
            icon.style.transition="all 0.5s";
        }
    }
    clickItem2(){
        let icon=document.getElementById('itemIcon2');
        if(window.innerWidth<mdBreakpoint){
            this.setState({item2:!this.state.item2});
            footerNav[1]=!this.state.item2;
        }
        if(this.state.item2){
            icon.style.transform="rotate(0deg)";
            icon.style.transition="all 0.1s";
        }else{
            icon.style.transform="rotate(-180deg)";
            icon.style.transition="all 0.5s";
        }
    }
    clickItem3(){
        let icon=document.getElementById('itemIcon3');
        if(window.innerWidth<mdBreakpoint){
            this.setState({item3:!this.state.item3});
            footerNav[2]=!this.state.item3;
        }
        if(this.state.item3){
            icon.style.transform="rotate(0deg)";
            icon.style.transition="all 0.1s";
        }else{
            icon.style.transform="rotate(-180deg)";
            icon.style.transition="all 0.5s";
        }
    }
    clickItem4(){
        let icon=document.getElementById('itemIcon4');
        if(window.innerWidth<mdBreakpoint){
            this.setState({item4:!this.state.item4});
            footerNav[3]=!this.state.item4;
        }
        if(this.state.item4){
            icon.style.transform="rotate(0deg)";
            icon.style.transition="all 0.1s";
        }else{
            icon.style.transform="rotate(-180deg)";
            icon.style.transition="all 0.5s";
        }
    }
    langToggle(){
        let style=!this.state.langTog?({transform:`rotate(-180deg)`,transition:`all 0.3s`}):
        ({transition:`all 0.3s`});
        this.setState({
            langTog:!this.state.langTog,
            langIconSty:style
        });
    }
    render(){
        let navText=(this.props.lang)?navContent['chinese']:navContent['english'];
        return(
            <div id="footer">
                    <div id="footerTitle">
                        <img id="footerImage" src={require("../images/logo-footer.png")} />
                        <FontAwesomeIcon id="footerAngle" icon="angle-right" size="lg" />
                        首页
                    </div>
                    <div id="footerItems">
                        <div id="footerItem1" className="footerItem">
                            <div className="itemTitle" onClick={this.clickItem1} aria-controls="item1_Text" aria-expanded={open}>
                            {navText[0]['dropToggle']}
                            <FontAwesomeIcon id="itemIcon1" className="itemIcon" icon="angle-down" size="lg" />
                            </div>
                            <Collapse in={this.state.item1}>
                                <div id="item1_Text" className="itemText">
                                    <div>{navText[0]['dropItem'][0]}</div>
                                    <div>{navText[0]['dropItem'][1]}</div>
                                </div>
                            </Collapse>
                        </div>
                        <div id="footerItem2" className="footerItem">
                            <div className="itemTitle" onClick={this.clickItem2} aria-controls="item2_Text" aria-expanded={open}>
                            {navText[1]['dropToggle']}
                            <FontAwesomeIcon id="itemIcon2" className="itemIcon" icon="angle-down" size="lg" />
                            </div>
                            <Collapse in={this.state.item2}>
                                <div id="item2_Text" className="itemText">
                                    <div>{navText[1]['dropItem'][0]}</div>
                                    <div>{navText[1]['dropItem'][1]}</div>
                                </div>
                            </Collapse>
                        </div>
                        <div id="footerItem3" className="footerItem">
                            <div className="itemTitle" onClick={this.clickItem3} aria-controls="item3_Text" aria-expanded={open}>
                            {navText[2]['dropToggle']}
                            <FontAwesomeIcon id="itemIcon3" className="itemIcon" icon="angle-down" size="lg" />
                            </div>
                            <Collapse in={this.state.item3}>
                                <div id="item3_Text" className="itemText">
                                    <div>{navText[2]['dropItem'][0]}</div>
                                    <div>{navText[2]['dropItem'][1]}</div>
                                </div>
                            </Collapse>
                        </div>
                        <div id="footerItem4" className="footerItem">
                            <div className="itemTitle" onClick={this.clickItem4} aria-controls="item4_Text" aria-expanded={open}>
                            {navText[3]['dropToggle']}
                            <FontAwesomeIcon id="itemIcon4" className="itemIcon" icon="angle-down" size="lg" />
                            </div>
                            <Collapse in={this.state.item4}>
                                <div id="item4_Text" className="itemText">
                                    <div>{navText[3]['dropItem'][0]}</div>
                                    <div>{navText[3]['dropItem'][1]}</div>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                    <div id="footerBottom">
                        <p>Copyright © 2019 The Ontology Team</p>
                        <Dropdown onToggle={this.langToggle} id="footerLang">
                            <Dropdown.Toggle id="langToggle">{this.props.lang?'中文':'English'}
                                <FontAwesomeIcon style={this.state.langIconSty} id="langIcon" icon="angle-down" size="lg" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu id="langMenu">
                                <Dropdown.Item className="langItem" id="chinese" onClick={this.props.langCho}>中文</Dropdown.Item>
                                <Dropdown.Item className="langItem" id="english" onClick={this.props.langCho}>English</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
        );
    }
}
export default Footer;