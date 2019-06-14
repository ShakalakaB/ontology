import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Homepage';
import DappList from './DappList';
//import Explorer from './Explorer';
//import Block from './Explorer';
import {Explorer,Block} from './Explorer';
import Test from './Test';
/*import Home from './Home';
import Category from './Category';
import Products from './Products';*/

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
                    <Route path='/dapplist' 
                        render={(props)=><DappList {...props} lang={this.props.lang}></DappList>} />
                    <Route path='/explorer' 
                        render={(props)=><ExplorerRoute {...props} lang={this.props.lang}></ExplorerRoute>} />
                    {/*<Route render={(props)=><Homepage {...props} lang={this.props.lang} langCho={this.props.onClick}></Homepage>} />
                    <Route component={Homepage} />*/}
                    {/*<Route path='/explorer' 
                        render={(props)=><Explorer {...props} lang={this.props.lang}></Explorer>} />
                    {/*<Route exact path='/' component={Homepage} />
                    <Route exact path='/test' component={Test} />*/}
                </Switch>
            </div>
        );
    }
}

class ExplorerRoute extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Switch>
                <Route exact path='/explorer' 
                    render={ (props)=><Explorer {...props} lang={this.props.lang}></Explorer>} />
                {/*<Route path={`${this.props.match.url}/:blockname`}*/}
                <Route path={`/explorer/:blockname`}
                    render={ (props)=><Block {...props} lang={this.props.lang}></Block>} />
            </Switch>
        );
    }
}

export default Routes;