import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import Footer from './Footer';
import {bountyActive,progressBounty,doneBounty} from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontsawesome';

class Bounty extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let done=doneBounty.map((e,i)=>{
            return(<div key={i} className="doneBor">
                        <div className="doneName">{e['name']}</div>
                        <div className="doneAuthor">by <span>{e['author']}</span></div>
                        <div className="result">
                            {(e['url'])?
                                (<a className="doneLink" href="https://github.com/ontio-community/ontology-csharp-sdk" target="_blank">See Result</a>):
                                ('See Result')}
                        </div>
                    </div>);
                });
        let progress=progressBounty.map((e,i)=>{
            return(
                <div key={i} className="proBorder">
                    <div className="proNameWrap">
                        <div className="proName">{e['name']}</div>
                        {e['url']&&
                            <a className="link" href="https://github.com/ohmountain/ontology-php-sdk" target="_blank">
                                <FontAwesomeIcon size="lg" icon="ellipsis-h" />
                            </a>
                        }
                    </div>
                    <div className="proAuthor">by <span>{e['author']}</span></div>
                </div>
            )
        })
        let active=bountyActive.map((e,i)=>{
            return (
                <div key={i} className="bountyAct">
                    <div className="flip">
                        <div className="flipCon">{e['flipCon']}</div>
                        <div className="circle">
                            <FontAwesomeIcon size="3x" className="bountyIcon" 
                                //icon={(typeof e['icon']=='string')?(e['icon']):(e['icon'])}/>
                                icon={e['icon']} />
                        </div>
                        <div className="bountyName">{e['name']}</div>
                        <div className="bountyDes">{e['des']}</div>
                    </div>
                    <div className="action">
                        <a href="https://slowmist.io/ontology/" target="_blank">Claim it</a>
                    </div>
                </div>
            );
        })
        return(
            <div id="bounty">
                <div id="bountyIntro">
                    <div id="introTitle">{this.props.lang?'Bounty 项目':'Bounty Program'}</div>
                    {this.props.lang?(
                        <div id="suggestion">通过多种渠道加入我们赢取奖金或告诉我们你的 <a href="#">建议</a>。</div>
                    ):(
                        <div id="suggestion">Join us in various types of missions to gain rewards,
                        or let us know if you have <a href="#">suggestions</a>.</div>
                    )}
                    {this.props.lang?(
                        <div id="faq">若对Bounty项目有任何疑问，请点击阅读我们的 <a 
                            target="_blank" href="https://medium.com/ontologynetwork/bounty-program-faq-b988e0ab1e59">FAQ</a>。</div>
                    ):(
                        <div id="faq">Have any questions about the bounty program? Please read our <a  
                            target="_blank" href="https://medium.com/ontologynetwork/bounty-program-faq-b988e0ab1e59">FAQ</a>.</div>
                    )}
                </div>
                <div id="active">
                    <div id="activeTitle">Active</div>
                    <div id="activeBlo">
                        <div id="bountyAct">
                            <div id="flip">
                                <div id="circle">
                                    <div id="new">NEW</div>
                                    <FontAwesomeIcon icon={['far','lightbulb']} size="3x" id="bountyIcon" />
                                </div>
                                <div id="bountyName">Your Bounty Idea</div>
                                <div id="bountyDes">5+ ONG</div>
                            </div>
                            <LinkContainer to="/bounty/new_bounty_ideas">
                                <div id="action">Submit</div>
                            </LinkContainer>
                        </div>
                        {active}
                    </div>
                </div>
                <div id="progressWrap">
                    <div id="progress">
                        <div id="proTitle">In Progress</div>
                        <div id="proBlo">
                            {progress}
                        </div>
                    </div>
                </div>
                <div id="doneWrap">
                    <div id="done">
                        <div id="doneTitle">Done</div>
                        <div id="doneBlo">
                            {done}
                        </div>
                    </div>
                </div>
                {/*<Footer />*/}
            </div>
        )
    }
}

export default Bounty;