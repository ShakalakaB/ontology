import React from 'react';
import NavbarS from './NavbarS';
import Routes from './Routes';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../index.scss';

class Ontology extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <div>
          <NavbarS />
          {/*<Test />*/}
          {/*<Homepage />*/}
          <Routes />
          {/*<Test />*/}
        </div>
      );
    }
  }

  export default Ontology;