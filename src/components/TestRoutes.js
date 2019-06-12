import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import Products from './Products';
import Product from "./Product";
class TestRoutes extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Category' component={Category} />
                    {/*<Route path='/Products' component={Products} />*/}
                    <Route path='/Products' component={RouteProducts} />
                </Switch>
            </div>
        );
    }
}
class RouteProducts extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/Products' component={Products} />
                    <Route path={`/Products/:productId`} component={Product} />
                </Switch>
            </div>
        );
    }
}
export default TestRoutes;