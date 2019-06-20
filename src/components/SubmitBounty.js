import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

class SubmitBounty extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="submitBounty">
                <div id="title">{this.props.lang?'新 Bounty 想法':'New Bounty Ideas'}</div>
                <div id="note">
                    {this.props.lang?'请告诉关于你的团队、Bounty想法、 以及完成它所需要的预算。如果你的想法被选中，我们将通过你提供的邮件地址和你联系。':
                        'Please tell us about yourself/your team, your bounty idea, and how much you feel it should be compensated for its implementation. If your idea is chosen to go forward with, we will be in contact via the email address you provided.'}
                </div>
                <form>
                    <div>{this.props.lang?'姓名':'Name'}</div>
                    <input className="input" type="text" ></input>
                    <div>{this.props.lang?'邮箱':'Email'}</div>
                    <input className="input" type="text" ></input>
                    <div>{this.props.lang?'简介':'Brief Description'}</div>
                    <input className="input" type="text" placeholder={this.props.lang?'最多20字':'20 words maximum'}></input>
                    <div>{this.props.lang?'详细介绍':'Detailed Description'}</div>
                    <textarea rows="4" cols="50"></textarea>
                    <div>{this.props.lang?'编程语言（选填）':'Programming Languages(optional)'}</div>
                    <input className="input" type="text" ></input>
                    <div>{this.props.lang?'预算要求（选填）':'Budget Requested(optional)'}</div>
                    <input className="input" type="text" placeholder={this.props.lang?'从Ontology基金(ONT 或 ONG)':'From Ontology Foundation(ONT or ONG)'}></input>
                    <div>{this.props.lang?'预估所需时间（选填）':'Estimated Days to Complete(optional)'}</div>
                    <input className="input" type="text" placeholder={this.props.lang?'天数':'Days'}></input><br></br>
                    <div id="buttons">
                        <LinkContainer to="/bounty">
                            <input id="back" type="button" value={this.props.lang?'返回':'Back'} ></input>
                        </LinkContainer>
                        <input id="submit" type="submit" value={this.props.lang?'申请':'Apply'} ></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default SubmitBounty;