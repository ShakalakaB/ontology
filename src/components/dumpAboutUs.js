import React from 'react';
import styled,{ css,keyframes } from "styled-components";
import {aboutTeam,aboutUsMid,aboutMiilstone} from '../constants';

/*let SlideUp=styled.div`
    animation:${slideKey} 0.5s ease forwards;
    webkitAnimation:${slideKey} 0.5s ease forwards;
`;
let NoSlideUp=styled.div`
    transform: translateY(0);
    animation: none;
`;
let slideUpKey=keyframes`
    0% {transform:translateY(60px)}
    100%{transform:translateY(0)}
`;*/
let slideRightKey=keyframes`
    0% {transform:translateX(-300px)}
    100%{transform:translateX(0)}
`;
let slideLeftKey=keyframes`
    0% {transform:translateX(300px)}
    100%{transform:translateX(0)}
`;
/*let slideUp=css`
    animation:${slideUpKey} 3s ease forwards;
    webkitAnimation:${slideUpKey} 3s ease forwards;
;`
let noSlideUp="transform: translateY(0);animation: none";
let slideToRight=css`
    animation:${slideRightKey} 5s ease forwards;
    webkitAnimation:${slideRightKey} 5s ease forwards;
`;*/
let noSlideToRight=css`
    transform: translateX(-300);
    animation: none;
`;
let slideToLeft=css`
    animation:${slideLeftKey} 5s ease forwards;
    webkitAnimation:${slideLeftKey} 5s ease forwards;
`;
let noSlideToLeft=css`
    transform: translateX(0);
    animation: none;
`;
/*let styleSheet=document.styleSheets[0];
let slideUp=`div{
    animation:slideup 0.5s ease forwards;
    webkitAnimation:slideup 0.5s ease forwards;
}`;
let slideUpKey=`
@keyframes slideup {
    0% {transform:translateY(60px)}
    100%{transform:translateY(0)}
}
`;
styleSheet.insertRule(slideUpKey,styleSheet.cssRules.length);
styleSheet.insertRule(slideUp,styleSheet.cssRules.length);
let testColor="green";
let testColor="color:purple";
let color="red";
let testColor=`color:${color}`;
let testColor=`animation:${slideKey} 0.5s ease forwards`;
let testState=css`animation:${slideKey} 0.5s ease forwards`;*/
class AboutUs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            intro1:noSlideUp,
            intro2:noSlideUp,
            textBlo1Sty:{},
            textBlo2Sty:{},
            textBlo3Sty:{},
            textBlo4Sty:{},
            textBlo5Sty:{},
            event1:noSlideToRight,
            event2:noSlideToRight,
            event3:noSlideToRight,
            event4:noSlideToRight,
            event5:noSlideToRight,
            event6:noSlideToRight,
            event7:noSlideToRight,
            event8:noSlideToRight,
            event9:noSlideToRight,
            event10:noSlideToRight,
            event11:noSlideToRight,

        }
        this.slideUp=this.slideUp.bind(this);
        this.visiblityCheck=this.visiblityCheck.bind(this);
        this.handleScroll=this.handleScroll.bind(this);
        this.delaySlide=this.delaySlide.bind(this);
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
    }
    componentDidMount(){
        this.slideUp();
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(){
        this.slideUp();
    }
    slideUp(){
        /*let array=[this.intro1Ref,this.intro2Ref];
        let length=array.length;
        let index=0;
        let headerInterval=setInterval(()=>{
            //console.log("interval");
            if(index<length){
                this.delaySlide(array,index);
                index++;
            }else{
                //console.log("clear");
                clearInterval(headerInterval);
            }
        },1000);*/
        [this.intro1Ref,this.intro2Ref].map((e,i)=>{
            let refId=e.current.id;
            //console.log(refId);
            if(this.visiblityCheck(e)){
                setTimeout(()=>{this.setState({
                    [refId]:slideUp
                });},
                1000);
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
    delaySlide(arr,i){
        if(this.visiblityCheck(arr[i])){
            let refId=arr[i].current.id;
            //console.log('id: '+refId);
            this.setState({
                [refId]:true
            });
        }
    }
    visiblityCheck(refDOM){
        let position=refDOM.current.getBoundingClientRect();
        let top=position.top;
        let bottom=position.bottom;
        return top>=0 && bottom<=window.innerHeight;
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
            </div>
        );
    }
}
export default AboutUs;
