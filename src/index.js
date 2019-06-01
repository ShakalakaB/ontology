import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
//import registerServiceWorker from './registerServiceWorker';
import Ontology from './components/Ontology';
import Testapp from './components/Testapp';

const projectName = 'Practice Project- Ontology(https://ont.io/home)';
localStorage.setItem('practiceProject','Ontology');

/*ReactDOM.render(
  <Ontology />,
  document.getElementById('ontology')
);*/
ReactDOM.render((
  <BrowserRouter basename={"/ontology"}>
    <Ontology />
</BrowserRouter>),
  document.getElementById('ontology'));
/*ReactDOM.render((
  <BrowserRouter>
    <Testapp />
  </BrowserRouter>),
    document.getElementById('ontology'));*/
module.hot.accept();