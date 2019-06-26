import React from 'react';

import {nodesTab1,nodesTab2,nodesTab3} from '../constants';

class NodesList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tabChoosen:'1'
        }
        this.tabClick=this.tabClick.bind(this);
    }
    componentDidMount(){
        document.getElementById('tab'+1).style.backgroundColor=`#edf8ff`;
    }
    tabClick(event){
        //console.log(event.target.className);
        let tabID=event.target.className.match(/[\d]/)[0];
        console.log(tabID);
        this.setState({
            tabChoosen:tabID
        });
        document.getElementById('tab'+tabID).style.backgroundColor=`#edf8ff`;
        ['1','2','3'].filter(e=>e!=tabID).map(e=>{
            document.getElementById('tab'+e).style.backgroundColor=``;
        });
    }
    render(){
        let nodesData=()=>{switch(this.state.tabChoosen){
            case '1':
                return nodesTab1;
                break;
            case '2':
                return nodesTab2;
                break;
            case '3':
                return nodesTab3;
        };}
        let nodesList=nodesData().map((e,i)=>{
        return(
            <div key={"node"+i} className="node">
                <div className="brief">
                    <div className="nodeImage">
                        <img src={e['url']} alt="node image"></img>
                    </div>
                    <div className="rank">{i+1}st</div>
                    <div className="asia">{e['asia']}</div>
                </div>
                <div className="detail">
                    <div className="name">{e['name']}</div>
                    <div className="des">{e['des']}</div>
                    <div className="address">Address:<span>{e['address']}</span></div>
                    <div className="ont">{e['ont']}</div>
                </div>
            </div>);
        });
        return(
            <div id="nodesList">
                <div id="title">{this.props.lang?'Ontology Triones 节点列表':'Ontology Triones Node List'}</div>
                <img id="image" src={require("../images/NodesList/dotted_map.png")} alt="background image"></img>
                {this.props.lang?(
                    <div id="note">Triones 节点申请现已开放! 点击 <a href="https://docs.google.com/forms/d/e/1FAIpQLSckt3i4azBprc1ZBhOippfRiZkZ-wiluVGxToOjLIu_CXIlew/viewform" target="_blank">此处</a> 进行了解与申请。</div>
                ):(
                    <div id="note">Triones Node applications are now open! Click <a href="https://docs.google.com/forms/d/e/1FAIpQLSckt3i4azBprc1ZBhOippfRiZkZ-wiluVGxToOjLIu_CXIlew/viewform" target="_blank">here</a> to read more and apply.</div>
                )}
                <div id="listWrap">
                    <div id="nodeTab">
                        <div id="tab1" className="tab tab1" onClick={this.tabClick}>
                            <div className="dot tab1">●</div>
                            <div className="tabText tab1">{this.props.lang?'节点':'Node'}</div>
                        </div>
                        <div id="tab2" className="tab tab2" onClick={this.tabClick}>
                            <div className="dot tab2">●</div>
                            <div className="tabText tab2"> {this.props.lang?'共建节点':'Co-build Node'}</div>
                        </div>
                        <div id="tab3" className="tab tab3" onClick={this.tabClick}>
                            <div className="dot tab3">●</div>
                            <div className="tabText tab3">{this.props.lang?'进行中':'In Process'}</div>
                        </div>
                    </div>
                    <hr></hr>
                    {nodesList}
                </div>
                {/*<div className="test test1">test</div>
                <div className="test2 test1">test</div>*/}
            </div>
        );
    }
}
export default NodesList;