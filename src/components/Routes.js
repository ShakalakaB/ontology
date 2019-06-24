import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Homepage';
import DappList from './DappList';
import {Explorer,Block} from './Explorer';
import Bounty from './Bounty';
import SubmitBounty from './SubmitBounty';
import SubmitApp from './SubmitApp';
import TrustAnchor from './TrustAnchor';
import NodesList from './NodesList';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
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
                    <Route path='/bounty' 
                            render={(props)=><BountyRoute {...props} lang={this.props.lang}></BountyRoute>} />
                    <Route path='/explorer' 
                        render={(props)=><ExplorerRoute {...props} lang={this.props.lang}></ExplorerRoute>} />
                    <Route path='/dapplist' 
                        render={(props)=><DappList {...props} lang={this.props.lang}></DappList>} />
                    <Route path='/submit_dapp' 
                        render={(props)=><SubmitApp {...props} lang={this.props.lang}></SubmitApp>} />
                    <Route path='/trust-anchor' 
                        render={(props)=><TrustAnchor {...props} lang={this.props.lang}></TrustAnchor>} />
                    <Route path='/nodeslist' 
                        render={(props)=><NodesList {...props} lang={this.props.lang}></NodesList>} />
                    <Route path='/aboutus' 
                        render={(props)=><AboutUs {...props} lang={this.props.lang}></AboutUs>} />                        
                    <Route path='/contactus' 
                        render={(props)=><ContactUs {...props} lang={this.props.lang}></ContactUs>} />
                    {/*<Route path='/bounty' 
                        render={(props)=><Bounty {...props} lang={this.props.lang}></Bounty>} />
                    <Route render={(props)=><Homepage {...props} lang={this.props.lang} langCho={this.props.onClick}></Homepage>} />
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
class BountyRoute extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Switch>
                <Route exact path='/bounty' 
                    render={(props)=><Bounty {...props} lang={this.props.lang}></Bounty>} />
                <Route path='/bounty/new_bounty_ideas' 
                    render={(props)=><SubmitBounty {...props} lang={this.props.lang}></SubmitBounty>} />
            </Switch>
        );
    }
}

export default Routes;