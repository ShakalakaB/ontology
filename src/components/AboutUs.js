import React from 'react';
import styled,{ css,keyframes } from "styled-components";
import {aboutTeam,aboutUsMid,aboutMiilstone,aboutRoadmap,mdBreakpoint,aboutMembers} from '../constants';

/*let testColor="green";
let testColor="color:purple";
let color="red";
let testColor=`color:${color}`;
let testColor=`animation:${slideKey} 0.5s ease forwards`;
let testState=css`animation:${slideKey} 0.5s ease forwards`;*/

let slideUpKey=keyframes`
    0% {transform:translateY(60px)}
    100%{transform:translateY(0)}
`;
let slideRightKey=keyframes`
    0% {transform:translateX(-300px)}
    100%{transform:translateX(0)}
`;
let slideLeftKey=keyframes`
    0% {transform:translateX(300px)}
    100%{transform:translateX(0)}
`;
let slideUp=css`
    animation:${slideUpKey} 0.5s ease forwards;
    webkitAnimation:${slideUpKey} 0.5s ease forwards;
;`
let noSlide=css`
    transform: translateX(0);
    transform: translateY(0);
    animation: none;
    opacity:0;
`;
let slideToRight=css`
    animation:${slideRightKey} 1s ease forwards;
    webkitAnimation:${slideRightKey} 1s ease forwards;
    opacity:1;
`;
let noSlideToRight=css`
    transform: translateX(0);
    animation: none;
`;
let slideToLeft=css`
    animation:${slideLeftKey} 1s ease forwards;
    webkitAnimation:${slideLeftKey} 1s ease forwards;
`;
let noSlideToLeft=css`
    transform: translateX(0);
    animation: none;
`;
class AboutUs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            intro1:noSlide,
            intro2:noSlide,
            textBlo1Sty:{},
            textBlo2Sty:{},
            textBlo3Sty:{},
            textBlo4Sty:{},
            textBlo5Sty:{},
            event1:noSlide,
            event2:noSlide,
            event3:noSlide,
            event4:noSlide,
            event5:noSlide,
            event6:noSlide,
            event7:noSlide,
            event8:noSlide,
            event9:noSlide,
            event10:noSlide,
            event11:noSlide,
            mapItem1:noSlide,
            mapItem2:noSlide,
            mapItem3:noSlide,
            mapItem4:noSlide,
            mapItem5:noSlide,
            mapItem6:noSlide,
            mapItem7:noSlide,
            mapItem8:noSlide,
            mapItem9:noSlide,
            mapItem10:noSlide,
            mapItem11:noSlide,
            mapItem12:noSlide,
            member1:noSlide,
            member2:noSlide,
            member3:noSlide,
            member4:noSlide,
            member5:noSlide,
            member6:noSlide,
            member7:noSlide,

        }
        this.animation=this.animation.bind(this);
        this.visiblityCheck=this.visiblityCheck.bind(this);
        this.handleScroll=this.handleScroll.bind(this);
        this.delayShow=this.delayShow.bind(this);
        this.intro1Ref=React.createRef();
        this.intro2Ref=React.createRef();
        this.textBlo1Ref=React.createRef();
        this.textBlo2Ref=React.createRef();
        this.textBlo3Ref=React.createRef();
        this.textBlo4Ref=React.createRef();
        this.event1Ref=React.createRef();
        this.event2Ref=React.createRef();
        this.event3Ref=React.createRef();
        this.event4Ref=React.createRef();
        this.event5Ref=React.createRef();
        this.event6Ref=React.createRef();
        this.event7Ref=React.createRef();
        this.event8Ref=React.createRef();
        this.event9Ref=React.createRef();
        this.event10Ref=React.createRef();
        this.event11Ref=React.createRef();
        this.mapItem1Ref=React.createRef();
        this.mapItem2Ref=React.createRef();
        this.mapItem3Ref=React.createRef();
        this.mapItem4Ref=React.createRef();
        this.mapItem5Ref=React.createRef();
        this.mapItem6Ref=React.createRef();
        this.mapItem7Ref=React.createRef();
        this.mapItem8Ref=React.createRef();
        this.mapItem9Ref=React.createRef();
        this.mapItem10Ref=React.createRef();
        this.mapItem11Ref=React.createRef();
        this.mapItem12Ref=React.createRef();
        this.member1Ref=React.createRef();
        this.member2Ref=React.createRef();
        this.member3Ref=React.createRef();
        this.member4Ref=React.createRef();
        this.member5Ref=React.createRef();
        this.member6Ref=React.createRef();
        this.member7Ref=React.createRef();
    }
    componentDidMount(){
        this.delayShow();
        this.animation();
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize',this.delayShow);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize',this.delayShow);
    }
    handleScroll(){
        this.animation();
        this.delayShow();
    }
    delayShow(){
        if(window.innerWidth>mdBreakpoint){
            [this.mapItem1Ref,this.mapItem2Ref,this.mapItem3Ref,this.mapItem4Ref,this.mapItem5Ref,this.mapItem6Ref,
                this.mapItem7Ref,this.mapItem8Ref,this.mapItem9Ref,this.mapItem10Ref,this.mapItem11Ref,this.mapItem12Ref].map((e,i)=>{
                    if(this.visiblityCheck(e)){
                        let itemID=e.current.id;
                        let delayTime=((i+1)%3==0)?(3):((i+1)%3-1);
                        setTimeout(()=>{
                            this.setState({
                                [itemID]:slideUp
                            });
                        },delayTime*100);
                    }
                });
            [this.member1Ref,this.member2Ref,this.member3Ref,this.member4Ref,this.member5Ref,this.member6Ref,this.member7Ref].map((e,i)=>{
                if(this.visiblityCheck(e)){
                    let itemID=e.current.id;
                    let delayTime=((i+1)%3==0)?(3):((i+1)%3-1);
                    setTimeout(()=>{
                        this.setState({
                            [itemID]:slideUp
                        });
                    },delayTime*100);
                }
            });
        }else{
            [this.mapItem1Ref,this.mapItem2Ref,this.mapItem3Ref,this.mapItem4Ref,this.mapItem5Ref,this.mapItem6Ref,
                this.mapItem7Ref,this.mapItem8Ref,this.mapItem9Ref,this.mapItem10Ref,this.mapItem11Ref,this.mapItem12Ref].map((e,i)=>{
                    let itemID=e.current.id;
                        if(this.visiblityCheck(e)){
                            this.setState({
                                [itemID]:slideUp
                            });
                        }
                });
            [this.member1Ref,this.member2Ref,this.member3Ref,this.member4Ref,this.member5Ref,this.member6Ref,this.member7Ref].map((e,i)=>{
                if(this.visiblityCheck(e)){
                    let itemID=e.current.id;
                        this.setState({
                            [itemID]:slideUp
                        });
                }
            });
        }
    }
    animation(){
        [this.intro1Ref,this.intro2Ref].map((e,i)=>{
            if(this.visiblityCheck(e)){
                let refId=e.current.id;
                    this.setState({
                    [refId]:slideUp
                });
            }
        });
        [this.textBlo1Ref,this.textBlo2Ref,this.textBlo3Ref,this.textBlo4Ref].map((e,i)=>{
            let refState=e.current.id+'Sty';
            setTimeout(()=>{
                if(this.visiblityCheck(e)){
                    this.setState({
                        [refState]:{opacity:'1',transition:'1s'}
                    });
                }
            },i*500);
        });
        [this.event1Ref,this.event2Ref,this.event3Ref,this.event4Ref,this.event5Ref,this.event6Ref,
            this.event7Ref,this.event8Ref,this.event9Ref,this.event10Ref,this.event11Ref].map((e,i)=>{
                let eventID=e.current.id;
                let evenCheck=(Number(eventID.match(/[\d]+/)[0])%2==0);
                if(this.visiblityCheck(e)){
                    evenCheck?(
                        this.setState({
                            [eventID]:slideToLeft
                        })
                    ):(
                        this.setState({
                            [eventID]:slideToRight
                        })
                    );
                }
            });
    }
    visiblityCheck(refDOM){
        let position=refDOM.current.getBoundingClientRect();
        let top=position.top;
        let bottom=position.bottom;
        //return top>=0 && bottom<=window.innerHeight;
        return top<=window.innerHeight && bottom>=0;
    }
    render(){
        let midBanner=(this.props.lang)?(
            aboutUsMid['chinese'].map((e,i)=>{
                let index=i+1;
                let stateName='textBlo'+index+'Sty';
                let refName="textBlo"+index+'Ref';
                return(
                    <div className="textBlo" key={"textBlo"+index} id={"textBlo"+index} ref={this[refName]} style={this.state[stateName]}>
                        <div className="num">{e['num']}</div>
                        <div className="note">{e['team']}</div>
                    </div>
                );
            })
        ):(
            aboutUsMid['english'].map((e,i)=>{
                let index=i+1;
                let stateName='textBlo'+index+'Sty';
                let refName="textBlo"+index+'Ref';
                return(
                    <div className="textBlo" key={"textBlo"+index} id={"textBlo"+index} ref={this[refName]} style={this.state[stateName]}>
                        <div className="num">{e['num']}</div>
                        <div className="note">{e['team']}</div>
                    </div>
                );
            })
        );
        let mileStone=(this.props.lang)?(
            aboutMiilstone['chinese'].map((e,i)=>{
                let index=i+1;
                let cssName='event'+index;
                let refName="event"+index+'Ref';
                return(
                    <div className="eventBlock" id={"event"+index} ref={this[refName]} css={this.state[cssName]} key={"event"+index}>
                        <div className="date">{e['date']}</div>
                        <div className="event">{e['event']}</div>
                    </div>
                );
            })
        ):(
            aboutMiilstone['english'].map((e,i)=>{
                let index=i+1;
                let cssName='event'+index;
                let refName="event"+index+'Ref';
                return(
                    <div className="eventBlock" id={"event"+index} ref={this[refName]} css={this.state[cssName]} key={"event"+index}>
                        <div className="date">{e['date']}</div>
                        <div className="event">{e['event']}</div>
                    </div>
                );
            })
        );
        let roadmap=aboutRoadmap.map((e,i)=>{
            let index=i+1;
            let cssName="mapItem"+index;
            let refName="mapItem"+index+"Ref";
           let mapItem= e['year']?(
            <div className="mapItem time" id={cssName} ref={this[refName]} css={this.state[cssName]} key={cssName}>
                <label className="year">{e['year']}</label>
                <div className="mapText">{this.props.lang?e['chinese']:e['english']}</div>
            </div>
            ):(
            <div className="mapItem" id={cssName} ref={this[refName]} css={this.state[cssName]} key={cssName}>
                <div className="mapText">{this.props.lang?e['chinese']:e['english']}</div>
            </div>
            );
            return mapItem;
        });
        let team=aboutMembers.map((e,i)=>{
            let index=i+1;
            let cssName="member"+index;
            let refName="member"+index+"Ref";
            return(
                <div className="member" id={cssName} ref={this[refName]} css={this.state[cssName]} key={cssName}>
                    <img className="photo" src={e['photo']} alt="member photo"></img>
                    <div className="name">{this.props.lang?e['chinese']['name']:e['english']['name']}</div>
                    <div className="title">{this.props.lang?e['chinese']['title']:e['english']['title']}</div>
                </div>
            );
        });
        return(
            <div id="aboutUs">
                <div id="intro">
                    <div className="introWrap" id="intro1" ref={this.intro1Ref} css={this.state.intro1}>
                        <div className="title">{this.props.lang?aboutTeam[0]['chinese']['title']:aboutTeam[0]['english']['title']}</div>
                        <div className="detail">{this.props.lang?aboutTeam[0]['chinese']['detail']:aboutTeam[0]['english']['detail']}</div>
                    </div>
                    <div className="introWrap" id="intro2" ref={this.intro2Ref} css={this.state.intro2}>
                        <div className="title">{this.props.lang?aboutTeam[1]['chinese']['title']:aboutTeam[1]['english']['title']}</div>
                        <div className="detail">{this.props.lang?aboutTeam[1]['chinese']['detail']:aboutTeam[1]['english']['detail']}</div>
                    </div>
                </div>
                <div id="midBanner">
                    <div id="textWrap">
                        {midBanner}
                    </div>
                </div>
                <div id="mileStone">
                    <div id="mileTitle">{this.props.lang?'里程碑':'Milestones'}</div>
                    <div id="eventBlockWrap">
                       {mileStone}
                    </div>
                </div>
                <div id="roadmap">
                    <div id="roadTitle">{this.props.lang?'里程碑':'The Roadmap'}</div>
                    <div id="roadWrap">
                        {roadmap}
                    </div>
                </div>
                <div id="team">
                    <div id="teamTitle">{this.props.lang?'团队成员':'The Team'}</div>
                    <div id="memberWrap">
                        {team}
                    </div>
                </div>
            </div>
        );
    }
}
export default AboutUs;
