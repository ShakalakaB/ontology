import React from 'react';


let database=[];
let numStart;
class Explorer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            blockState:true
        }
        this.blockData=this.blockData.bind(this);
    }
    componentDidMount() {
        this._blockState=true;
        numStart=3000000;
        this.blockData();
    }
    componentWillUnmount() {
        this._blockState=false;
    }
    blockData(){
        //console.log(new Date())
        let setTime=new Date();
        let strTime=setTime.toString().split(' ');
        let blockTime=strTime[3]+'-'+setTime.getMonth()+'-'+strTime[2]+' '+strTime[4];
        database.unshift({num:numStart,time:setTime,timeStr:blockTime});
        numStart++;
        console.log(new Date(),database);
        if(this._blockState){
            setTimeout(()=>this.blockData(),randomSec());
        }else{
            numStart=3000000;
            database=[];
        }
    }
    render(){
        return(
            <div id="explorer">
                Explorer
            </div>
        );
    }
}
function randomSec(){
    let seconds=(Math.floor((Math.random()*10)+1))*1000;
    console.log('seconds: '+seconds);
    return seconds;
};

export default Explorer;