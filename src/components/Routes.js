import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Homepage';
import DappList from './DappList';
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
                    {/*<Route exact path='/' component={Homepage} />
                    <Route exact path='/test' component={Test} />*/}
                </Switch>
            </div>
        );
    }
}
export default Routes;