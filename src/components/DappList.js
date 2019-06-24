import React from 'react';
import Slider from "react-slick";
import BootstrapTable from 'react-bootstrap-table-next';
import TableHeaderColumn  from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {dAppdata} from "../constants";

const dAppCol = {
    "chinese":[{
      dataField: 'id',
      text: ''
    }, {
      dataField: 'name',
      text: 'dApp',
      formatter:nameFormatter
    }, {
      dataField:'activeUser',
      text:'活跃用户',
      formatter:userFormatter
    },{
      dataField:'transactions',
      text:'交易数',
      formatter:transacFormatter
    },{
      dataField:'volume',
      text:"交易总量",
      formatter:volumeFormatter
    },{
      dataField:'weeklyReward',
      text:"周激励（美元）"
    },{
      dataField:"totalReward",
      text:"累计激励（美元）"
    }],
    "english":
      [{
        dataField: 'id',
        text: ''
      }, {
        dataField: 'name',
        text: 'dApp',
        formatter:nameFormatter
      }, {
        dataField:'activeUser',
        text:'Active users',
        formatter:userFormatter
      },{
        dataField:'transactions',
        text:'Transactions',
        formatter:transacFormatter
      },{
        dataField:'volume',
        text:"Volume",
        formatter:volumeFormatter
      },{
        dataField:'weeklyReward',
        text:"Weekly Reward(USD)"
      },{
        dataField:"totalReward",
        text:"Total Reward(USD)"
      }]};
class DappList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        return(
            <div id="appList">
                <AppSlider />
                <AppTable lang={this.props.lang}/>
                <div id="appStore">
                  <div id="storeTitle">{this.props.lang?'第三方dApp统计':'Third Party dApp Store'}</div>
                  <div id="apps">
                    <img className="storeImage" src={require('../images/DappList/thirdApp1.png')} alt="thirdApp1" />
                    <img className="storeImage" src={require('../images/DappList/thirdApp2.png')} alt="thirdApp2" />
                    <img className="storeImage" src={require('../images/DappList/thirdApp3.png')} alt="thirdApp3" />
                    <img className="storeImage" src={require('../images/DappList/thirdApp4.png')} alt="thirdApp4" />
                    <img className="storeImage" src={require('../images/DappList/thirdApp5.png')} alt="thirdApp5" />
                    <img className="storeImage" src={require('../images/DappList/thirdApp6.png')} alt="thirdApp6" />
                  </div>
                </div>
                {/*<Footer lang={this.props.lang} />*/}
            </div>
        );
    }
}

class AppTable extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
          <div id="appTable">
            <div id="title">{this.props.lang?'dApp 排行榜':'dApp Rankings'}</div>
            <div id="sumWrap">
              <div id="appTotal">{this.props.lang?'dApp总数: ':'dApp Total: '}<span>{appTotal}</span></div>
              <div id="userTotal">{this.props.lang?'24H活跃用户数: ':'24h Active Users: '}<span>{userTotal.toLocaleString()}</span></div>
              <div id="transacTotal">{this.props.lang?'24H交易数: ':'24h Transactions: '}<span>{transacTotal.toLocaleString()}</span></div>
              <div id="volumeTotal">{this.props.lang?'24H交易总量: ':'24h Volume: '}<span>{volumeTotal.toLocaleString()}</span></div>
            </div>
            <BootstrapTable keyField='id' pagination={paginationFactory()} data={ dAppdata } columns={ this.props.lang?dAppCol["chinese"]:dAppCol["english"] } >
                <TableHeaderColumn dataField="name" dataFormat={nameFormatter} />
                <TableHeaderColumn dataField="activeUser" dataFormat={userFormatter} />
                <TableHeaderColumn dataField="transactions" dataFormat={transacFormatter} />
                <TableHeaderColumn dataField="volume" dataFormat={volumeFormatter} />
            </BootstrapTable>
            <div id="note">Note: Data on 24-hour transaction and activity addresses from the previous day (UTC) is collected.</div>
          </div>
        );
    }
}
let appTotal=dAppdata.length;
let userTotal=0;
let transacTotal=0;
let volumeTotal=0;
dAppdata.map(e=>{
  userTotal=userTotal+parseInt(e['activeUser']['hours'].match(/\d/g).join(''));
  transacTotal=transacTotal+parseInt(e['transactions']['hours'].match(/[\d\.]/g).join(''));
  volumeTotal=volumeTotal+parseInt(e['volume']['hours'].match(/[\d\.]/g).join(''));
});

function nameFormatter(cell,row){
    return(
        <div className="tname">
            <img className="nameImage" alt={cell.appName} src={cell.image}></img>
            <div className="appName">
              <a href={cell.appURL} target="_blank">{cell.appName}</a>
            </div>
            <div className="category">{cell.category}</div>
            <div className="des" title={cell.des}>{cell.des}</div>
        </div>
    );
}
function userFormatter(cell,row){
  return(
    <div className="tuser">
      <div className="noteHours">24h:</div>
      <div className="noteDays">7days:</div>
      <div className="hours">{cell.hours}</div>
      <div className="days">{cell.days}</div>
    </div>
  );
}
function transacFormatter(cell,row){
  return(
    <div className="tTransac">
      <div className="noteHours">24h:</div>
      <div className="noteDays">7days:</div>
      <div className="hours">{cell.hours}</div>
      <div className="days">{cell.days}</div>
    </div>
  );
}
function volumeFormatter(cell,row){
  return(
    <div className="tvolume">
      <div className="noteHours">24h:</div>
      <div className="noteDays">7days:</div>
      <div className="hours">{cell.hours} ONG</div>
      <div className="days">{cell.days} ONG</div>
    </div>
  );
}
class AppSlider extends React.Component {
    render() {
        let settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true,
            speed: 500,
            responsive:[
                {
                    breakpoint:2000,
                    settings:{
                        className: "center",
                        centerMode: true,
                        variableWidth: true
                    }
                },
                {
                    breakpoint:991.98,
                    settings:{
                        className: "center",
                        centerMode: true
                    }
                },
                {
                    breakpoint:767.98,
                    settings:{dots:true}
                }
            ]
      };
      return (
        <div id="sliderWrap">
          <Slider {...settings}>
              <a target="_blank" href="https://candy.ont.io/#/">
                  <img className="sliderImage" alt="banner1" src={require("../images/DappList/banner1.png")} />
              </a>
              <a target="_blank" href="https://blockwar.online/">
                  <img className="sliderImage" alt="banner2" src={require("../images/DappList/banner2.png")} />
              </a>
              <a target="_blank" href="https://hyd-go.alfakingdom.com/">
                  <img className="sliderImage" alt="banner3" src={require("../images/DappList/banner3.jpg")} />
              </a>
          </Slider>
        </div>
      );
    }
  }

export default DappList;