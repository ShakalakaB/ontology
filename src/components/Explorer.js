import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import * as d3 from "d3";
import Footer from './Footer';
import {blockDataIni} from "../constants";
let database=JSON.parse(JSON.stringify(blockDataIni));
let numStart;
class Explorer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            topBlocks:database,
            topInterval:[0,0,0,0,0],
            svgWidth:0,
            svgHeight:0
        }
        this.blockData=this.blockData.bind(this);
        this.topCatch=this.topCatch.bind(this);
        this.topInterCal=this.topInterCal.bind(this);
        this.drawChart=this.drawChart.bind(this);
        this.refCallback=React.createRef();
        this.svgSize=this.svgSize.bind(this);
    }
    componentDidMount() {
        this.svgSize();
        window.addEventListener("resize",this.svgSize);
        let setTime=new Date();
        let strTime=setTime.toString().split(' ');
        let blockTime=strTime[3]+'-'+setTime.getMonth()+'-'+strTime[2]+' '+strTime[4];
        database.map(e=>{
            e['time']=setTime;
            e['timeStr']=blockTime;
        })
        this._blockState=true;
        numStart=3000100;
        this.topCatch();
        setTimeout(()=>this.blockData(),1000);
        this.topBlo=setInterval(()=>this.topCatch(),10000);
        //this.topBlo=setInterval(()=>this.topCatch(),1000);
        this.topInter=setInterval(()=>this.topInterCal(),1000);

    }
    componentWillUnmount() {
        this._blockState=false;
        clearInterval(this.topBlo);
        clearInterval(this.topInter);
        window.removeEventListener("resize",this.svgSize);
    }
    blockData(){
        //console.log(new Date())
        let setTime=new Date();
        let strTime=setTime.toString().split(' ');
        let blockTime=strTime[3]+'-'+setTime.getMonth()+'-'+strTime[2]+' '+strTime[4];
        let blTimeLength=(setTime-database[0]['time'])/1000;
        database.unshift({num:numStart,time:setTime,timeStr:blockTime,timeLen:blTimeLength});
        this.drawChart();
        numStart++;
        //console.log(new Date(),database);
        if(this._blockState){
            setTimeout(()=>this.blockData(),randomSec());
            //setTimeout(()=>this.blockData(),3000);
        }else{
            numStart=3000000;
            database=JSON.parse(JSON.stringify(blockDataIni));
        }
    }
    topCatch(){
        this.setState({
            topBlocks:database.slice(0,5)
        });
        //console.log(this.state.topBlocks[0]['num']);
    }
    topInterCal(){
        let nowTime=new Date();
        let interArr=[];
        let _topBlocks=this.state.topBlocks.slice(0);
        _topBlocks.map(e=>{
            interArr.push(Math.floor((nowTime-e['time'])/1000));
        })
        this.setState({
            topInterval:interArr.slice(0)
        });
    }
    svgSize(){
        let size = this.refCallback.current.getBoundingClientRect();
        this.setState({
            svgWidth:size['width'],
            svgHeight:size['height']
        });
        setTimeout(()=>this.drawChart(),1);
        /*setTimeout(()=>{
            console.log('width: '+this.state.svgWidth);
            console.log('height: '+this.state.svgHeight);
            console.log(size);
        },1);*/
    }
    drawChart(){
        let svgData = database.slice(0,69);
        //console.log(svgData);
        //let svgData =[{num:3000001,timeLen:1},{num:3000002,timeLen:1},{num:3000003,timeLen:1},{num:3000004,timeLen:1},{num:3000005,timeLen:1}];
        //let svgData =[{num:3000001,timeLen:1},{num:3000002,timeLen:2},{num:3000003,timeLen:4},{num:3000004,timeLen:6},{num:3000005,timeLen:8}];
        //const data = [12, 5, 6, 6, 9, 10];
        let svg=d3.select("#barChart");
        svg.selectAll("*").remove();
        //let t=d3.select("#barChart");
        //let svg=t;
        /*let svg=this.state.test;
        console.log(svg);
        console.log(this.state.test);*/
        let width=this.state.svgWidth;
        let height=this.state.svgHeight;
        //console.log(width,height);
        let xScale=d3.scaleBand()
                     .domain(svgData.map(d=>d['num']))
                     .range([width,0])
                     .padding(0.03);
        let yScale=d3.scaleLinear()
                     .domain([0,10])
                     .range([height,0]);
        svg.selectAll("rect")
           .data(svgData)
           .enter()
           .append("rect")
           .attr("className","bar")
           .attr("x",d=>{
               let w=xScale(d['num']);
               return w;
            })
           .attr("y",d=>yScale(d['timeLen']))
           .attr('width',d=>xScale.bandwidth())
           .attr("height",d=>height-yScale(d['timeLen']))
           .attr("fill",(d,i)=>{
               let color=(i==0)?"#32a4be":"#e4e4e4";
               return color;
           });
    }
    render(){
        const blockList=[0,1,2,3,4].map(e=>{
            return (
            <div id={"top"+e} key={e} className="topBlock">
                <LinkContainer to={`${this.props.match.url}/${this.state.topBlocks[e]['num']}`}>
                    <div className="blockName">{this.state.topBlocks[e]['num']}</div>
                </LinkContainer>
                <div className="interval">{this.state.topInterval[e]}s ago</div>
                <div className="txns">1 Txns</div>
                <div className="bytes">1605 byte</div>
            </div>
            );
        });
        return(
            <div id="explorer">
                <div id="topBlocks">{this.props.lang?'最新区块':'Blocks'}
                {blockList}
                </div>
                <div id="chart">
                    <svg id="barChart" ref={this.refCallback}></svg>
                </div>
            </div>
        );
    }
}
function randomSec(){
    let seconds=(Math.floor((Math.random()*10)+1))*1000;
    //console.log('seconds: '+seconds);
    return seconds;
};
class Block extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let blockFind=database.find(e=>e['num']==Number(this.props.match.params.blockname));
        if(blockFind){
            return(
                <div id="block" >
                    <div id="blockDetail">
                        <div id="title">{this.props.lang?'区块详情':'BLOCK DETAILS'}</div>
                        <div id="blHeight">{this.props.lang?'区块高度':'HEIGHT'}： {blockFind['num']}</div>
                        <div id="timeSize">
                            <div id="time">{this.props.lang?'生成时间':'Time'}: <span>{blockFind['timeStr']}</span></div>
                            <div id="size">{this.props.lang?'区块大小':'Size'}: <span>2115 bytes</span></div>
                        </div>
                        <div id="hash" className="rowGrid">
                            <div className="gridTitle">{this.props.lang?'哈希值':'Hash'}: </div>
                            <div className="gridText">2530146359b57088b64aaddd94db87482a8ecc6514c4c67b270b2e65e37fef45</div>
                        </div>
                        <div id="bookkeeper" className="rowGrid">
                            <div className="gridTitle">{this.props.lang?'记账人地址':'Bookkeeper'}: </div>
                            <div className="gridText" id="bookCode">AWio34sRGxaMtsuAwaKftuh2qMD1NqXaV<br></br>
                                 AMvXn7U9S3Pq7hah16Euu7wX52UHtHyqN<br></br>
                                 ALeYCHTLVnM4G5iiHc1MGdvMQf8Wd5Tvu2<br></br>
                                 AL4CDqBikrj92pC3B747ZchYZAQf2fg1AC<br></br>
                                 AL6crv7yeS41gtQXQU976rTygVdtBiFP44</div>
                        </div>
                        <div id="merkle" className="rowGrid">
                            <div className="gridTitle">{this.props.lang?'Merkle 根':'Merkle Root'}: </div>
                            <div className="gridText">14b9507e83becc0b5ff0c2f55ce860ade612d738c7729109dd326b5ee9b5e848</div>
                        </div>
                        <div id="conData" className="rowGrid">
                            <div className="gridTitle">{this.props.lang?'共识数据':'Consensus Data'}: </div>
                            <div className="gridText">7697824987359246112</div>
                        </div>
                        <div id="table">
                            <div id="tTitle"><span>4 </span>{this.props.lang?'条交易记录在这个区块':'Transactions on this block'}</div>
                            <table>
                            <thead>
                                <tr>
                                    <th>{this.props.lang?'哈希值':'Hash'}</th>
                                    <th>{this.props.lang?'状态':'Status'}</th>
                                    <th>{this.props.lang?'时间':'Time'}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3c1d...b664</td>
                                    <td>Comfirmed</td>
                                    <td>{blockFind['timeStr']}</td>
                                </tr>
                                <tr>
                                    <td>e6d1...ce0a</td>
                                    <td>Comfirmed</td>
                                    <td>{blockFind['timeStr']}</td>
                                </tr>
                                <tr>
                                    <td>73d7...aea0</td>
                                    <td>Comfirmed</td>
                                    <td>{blockFind['timeStr']}</td>
                                </tr>
                                <tr>
                                    <td>2f4d...2286</td>
                                    <td>Comfirmed</td>
                                    <td>{blockFind['timeStr']}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}
export {Explorer, Block}