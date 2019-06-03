import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Test from './Test';
/*import Home from './Home';
import Category from './Category';
import Products from './Products';*/

//const Routes=(lang)=>(
//function Routes(prop){
class Routes extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Switch>
                <Route exact path='/' 
                    render={(props)=><Homepage {...props} lang={this.props.lang} langCho={this.props.onClick}></Homepage>} />
                {/*<Route exact path='/' component={Homepage} />
                <Route exact path='/test' component={Test} />*/}
                </Switch>
            </div>
        );
    }
}
/*const Mainroutes=()=>(
    <div>
        <Route path="/" component={Home}/>
        <Route path="/category" component={Category}/>
        <Route path="/products" component={Products}/>
    </div>
);*/
export default Routes;