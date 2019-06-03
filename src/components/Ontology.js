import React from 'react';
import NavbarS from './NavbarS';
import Routes from './Routes';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../index.scss';

if(localStorage.getItem('lang')==null){
  localStorage.setItem('lang',true);
}
let language=(localStorage.getItem('lang')=='true');

class Ontology extends React.Component{
    constructor(props){
      super(props);
      this.state={
        langCho:language
      };
      this.langChoose=this.langChoose.bind(this);
    }
    langChoose(){
      if(event.target.id=='chinese'){
        localStorage.setItem('lang',true);
        this.setState({langCho:true});
      }else{
        localStorage.setItem('lang',false);
        this.setState({langCho:false});
      }
  }
    render(){
      return(
        <div>
          <NavbarS onClick={this.langChoose} lang={this.state.langCho} />
          <Routes onClick={this.langChoose} lang={this.state.langCho} />
          {/*<Test />*/}
          {/*<Homepage />*/}
        </div>
      );
    }
  }

  export default Ontology;