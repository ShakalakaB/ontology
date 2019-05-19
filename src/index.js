import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage';
import Test from './components/Test';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.scss';


const projectName = 'Practice Project- Ontology(https://ont.io/home)';
localStorage.setItem('practiceProject','Ontology');

class Ontology extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Homepage />
        {/*<Test />*/}
      </div>
    );
  }
}
ReactDOM.render(
  <Ontology />,
  document.getElementById('ontology')
);

module.hot.accept();