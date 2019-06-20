import React from 'react';
import {Carousel} from 'react-bootstrap';
import styled,{ keyframes } from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontsawesome';
let slideKey=keyframes`
            0% {transform:translateY(60px)}
            100%{transform:translateY(0)}`;
/*let SlideUp=styled.div`
    animation:${props=>(props.show ?`${slideKey} 5s ease forwards`:`${slideKey} 2s ease forwards`)};
    webkitAnimation:${props=>(props.show ?`${slideKey} 5s ease forwards`:`${slideKey} 2s ease forwards`)};
    `;*/
/*let SlideUp=styled.div`
    border:${props=>(props.show ?'2px solid white':'2px solid red')};
    `;*/
let SlideUp=styled.div`
    animation:${slideKey} 0.5s ease forwards;
    webkitAnimation:${slideKey} 0.5s ease forwards;
`;
let NoSlideUp=styled.div`
    transform: translateY(0);
    animation: none;
`;
class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            headerText1:false,
            introText1:false,
            introText2:false,
            introText3:false,
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleScroll=this.handleScroll.bind(this);
        this.slideUp=this.slideUp.bind(this);
        this.headerRef=React.createRef();
        this.intro1Ref=React.createRef();
        this.intro2Ref=React.createRef();
        this.intro3Ref=React.createRef();
    }
    componentDidMount(){
        this.slideUp();
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event){
        this.slideUp();
    }
    slideUp(){
        let headerPos=this.headerRef.current.getBoundingClientRect();
        let intro1Pos=this.intro1Ref.current.getBoundingClientRect();
        let intro2Pos=this.intro2Ref.current.getBoundingClientRect();
        let intro3Pos=this.intro3Ref.current.getBoundingClientRect();
        let headerTop=headerPos.top;
        let intro1Top=intro1Pos.top;
        let intro2Top=intro2Pos.top;
        let intro3Top=intro3Pos.top;
        let headerBottom=headerPos.bottom;
        let intro1Bottom=intro1Pos.bottom;
        let intro2Bottom=intro2Pos.bottom;
        let intro3Bottom=intro3Pos.bottom;
        if(headerTop>=0 && headerBottom<=window.innerHeight){
            this.setState({
                headerText1:true
            });
        }
        if(intro1Top>=0 && intro1Bottom<=window.innerHeight){
            this.setState({
                introText1:true
            });
        }
        if(intro2Top>=0 && intro2Bottom<=window.innerHeight){
            this.setState({
                introText2:true
            });
        }
        if(intro3Top>=0 && intro3Bottom<=window.innerHeight){
            this.setState({
                introText3:true
            });
        }
    }
    handleClick(){
        this.setState({
            hearderText1:!this.state.hearderText1
        });
    }
    render(){
        return(
            <div id="homepage">
                {/*<div  style={{backgroundImage: `url(require("./images/Home.jpg"))`}} id="header">
                    <div id="headerText1">Ready for all Businesses</div> */}
                <div id="header">
                    {(this.state.headerText1)?(
                        <SlideUp id="headerText1" ref={this.headerRef}>Ready for all Businesses</SlideUp>
                        ):(
                        <NoSlideUp id="headerText1" ref={this.headerRef}>Ready for all Businesses</NoSlideUp>
                    )}
                    <div id="headerText2">{this.props.lang?'本体是新一代公有基础链项目和分布式信任协作平台。':'Ontology is a high-performance public blockchain project and a distributed trust collaboration platform.'}</div>
                    <button id="headerLink">{this.props.lang?'了解更多':'Learn More'}</button>
                    {/*<img src={require("../images/Home.jpg")} alt="homeBackground"></img>*/}
                </div>
                <div id="newsWrap">
                    <div id="newsTop">
                        <div className="topnews" id="newsTop1">
                            <div className="keyword">{this.props.lang?'新闻':'News'}</div>
                            <div className="newsTitle">{this.props.lang?'本体dApp风云榜':'Ontology dApp Incentive Models: Receive a 60% ONG rebate'}</div>
                            <a 
                                target="_blank" href={this.props.lang?
                                    "https://mp.weixin.qq.com/s/2ZolmXGyFJVJBe2Xqw46iA":
                                    "https://medium.com/ontologynetwork/ontology-dapp-incentive-models-receive-a-60-ong-rebate-from-your-dapp-48b54b5f33cc"}>
                                        <img className="newsTopImages" alt="newTopimage1" src={require("../images/Homepage/newsTop1.jpg")}></img>
                            </a>
                        </div>
                        <div className="topnews" id="newsTop2">
                            <div className="keyword">{this.props.lang?'生态共建':'Ecosystem'}</div>
                            <div className="newsTitle">{this.props.lang?'本体即将发行本体平台PAX,开拓DeFi领域新格局':'Ontology to Launch Regulated USD Stablecoin PAX'}</div>
                            <a 
                                target="_blank" href={this.props.lang?
                                    "https://wallstreetcn.com/articles/3519632?ivk=1":
                                    "https://medium.com/ontologynetwork/ontology-to-launch-regulated-usd-stablecoin-pax-on-ontology-c7a264240640"}>
                                        <img className="newsTopImages" alt="newTopimage2" src={require("../images/Homepage/newsTop2.jpg")}></img>
                            </a>
                        </div>
                        <div className="topnews" id="newsTop3">
                            <div className="keyword">{this.props.lang?'生态共建':'Ecosystem'}</div>
                            <div className="newsTitle">{this.props.lang?'本体与全球最大dApp数据和分发平台DappRadar达成合作':'Leading EOS Community joins Ontology as a new node'}</div>
                            <a 
                                target="_blank" href={this.props.lang?
                                    "https://mp.weixin.qq.com/s/6Iaot2C7NPba9epzz8dK9g":
                                    "https://medium.com/ontologynetwork/leading-eos-community-joins-ontology-as-a-new-node-21bc814a377c"}>
                                        <img className="newsTopImages" alt="newTopimage3" src={require("../images/Homepage/newsTop3.jpg")}></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="intro">
                    <div className="introInfo" id="intro1">
                        {(this.state.introText1)?(
                            <SlideUp className="introText">
                                <div ref={this.intro1Ref} className="introTitle">{this.props.lang?'强大的开发工具':'Powerful tools for powerful dApps'}</div>
                                <p className="introP">{this.props.lang?'为去中心化应用产品提供支持多种开发语言的多样化开发工具。':'Ontology provides development tools and supports multiple programming languages for decentralized application development.'}</p>
                                <a href="https://developer.ont.io/" target="_blank" className="introLink">{this.props.lang?'开发者中心':'Learn more in Developer Center'}</a>
                            </SlideUp>
                        ):(
                            <NoSlideUp className="introText">
                                <div ref={this.intro1Ref} className="introTitle">{this.props.lang?'强大的开发工具':'Powerful tools for powerful dApps'}</div>
                                <p className="introP">{this.props.lang?'为去中心化应用产品提供支持多种开发语言的多样化开发工具。':'Ontology provides development tools and supports multiple programming languages for decentralized application development.'}</p>
                                <a href="https://developer.ont.io/" target="_blank" className="introLink">{this.props.lang?'开发者中心':'Learn more in Developer Center'}</a>
                            </NoSlideUp>
                        )}
                        <img className="introImages" src={require("../images/Homepage/introImage1.png")} alt="introImage1"></img>
                    </div>
                    <div className="introInfo" id="intro2">
                        {(this.state.introText2)?(
                            <SlideUp className="introText">
                                <div ref={this.intro2Ref} className="introTitle">{this.props.lang?'定制化区块链服务':'Customizable blockchains'}</div>
                                <p className="introP">
                                    {this.props.lang?'本体网络框架支持公有链网体系，为不同的场景提供定制服务。同时，本体通过独有的协议群支持跨链合作，为不同场景的应用落地提供可能。':'Ontology blockchain framework supports public blockchain systems and is able to customize public blockchains for applications. Ontology also supports collaboration among chain networks with protocol groups.'}
                                </p>
                            </SlideUp>
                        ):(
                            <NoSlideUp className="introText">
                                <div ref={this.intro2Ref} className="introTitle">{this.props.lang?'定制化区块链服务':'Customizable blockchains'}</div>
                                <p className="introP">
                                    {this.props.lang?'本体网络框架支持公有链网体系，为不同的场景提供定制服务。同时，本体通过独有的协议群支持跨链合作，为不同场景的应用落地提供可能。':'Ontology blockchain framework supports public blockchain systems and is able to customize public blockchains for applications. Ontology also supports collaboration among chain networks with protocol groups.'}
                                </p>
                            </NoSlideUp>
                        )}
                        <img className="introImages" src={require("../images/Homepage/introImage2.png")} alt="introImage2"></img>
                    </div>
                    <div className="introInfo" id="intro3">
                        {(this.state.introText3)?(
                            <SlideUp className="introText">
                                <div ref={this.intro3Ref} className="introTitle">{this.props.lang?'可扩展区块链解决方案':'Scalable solutions'}</div>
                                <p className="introP">{this.props.lang?'凭借高TPS，本体分片设计能够为全球千万区块链用户提供应用支持。':'With high performance features like VBFT and sharding, Ontology is ready to power applications for the world’s millions of blockchain users.'}</p>
                                <a className="introLink" href="https://medium.com/ontologynetwork/ontology-sharding-design-released-c900331f71fa" target="_blank">{this.props.lang?'本体分片设计':'Learn more about Ontology Sharding'}</a>
                            </SlideUp>
                        ):(
                            <NoSlideUp className="introText">
                               <div ref={this.intro3Ref} className="introTitle">{this.props.lang?'可扩展区块链解决方案':'Scalable solutions'}</div>
                                <p className="introP">{this.props.lang?'凭借高TPS，本体分片设计能够为全球千万区块链用户提供应用支持。':'With high performance features like VBFT and sharding, Ontology is ready to power applications for the world’s millions of blockchain users.'}</p>
                                <a className="introLink" href="https://medium.com/ontologynetwork/ontology-sharding-design-released-c900331f71fa" target="_blank">{this.props.lang?'本体分片设计':'Learn more about Ontology Sharding'}</a>
                            </NoSlideUp>
                        )}
                        <img className="introImages" src={require("../images/Homepage/introImage3.png")} alt="introImage3"></img>
                    </div>
                </div>
                <div id="reports">
                    <div id="reportsTitle">{this.props.lang?'新闻':"Press"}</div>
                    <Carousel id="car">
                        <Carousel.Item className="carItem">
                            <div id="reportWrap">
                                <div className="report">
                                    <img className="reportImages" src={require("../images/Homepage/report1.png")} alt="reportImage1"></img>
                                    <p>{this.props.lang?'本体所提供的平台可以让缺乏资金或资源的开发人员和初创公司构建去中心化的应用程序。':'A trust search engine which provides authentication and connects services.'}</p>
                                </div>
                                <div className="report">
                                    <img className="reportImages" src={require("../images/Homepage/report2.png")} alt="testreportImage2"></img>
                                    <p>{this.props.lang?'基础性链网“本体网络”预览发布，为行业应用提供“最后一公里”支持。':"Ontology’s distributed trust platform defines digital identity protocols. "}</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="carItem">
                        <div id="reportWrap">
                            <div className="report">
                                <img className="reportImages" src={require("../images/Homepage/report3.png")} alt="reportImage3"></img>
                                <p>{this.props.lang?'本体致力于打造开放平台，加速区块链商业应用落地。':"NAGA and Ontology formed a long-term strategic partnership to reshape fintech market."}</p>
                                </div>
                                <div className="report">
                                    <img className="reportImages" src={require("../images/Homepage/report4.png")} alt="reportImage4"></img>
                                    <p>{this.props.lang?'「本体」要用高性能、可跨链协作的链网体系构建信任生态。':"Ontology’s distributed trust platform defines digital identity protocols."}</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div id="partner">
                    <div id="partnerTitle">{this.props.lang?'生态共建者':"Ecosystem Co-builders"}</div>
                    <Carousel id="partnerCar">
                        <Carousel.Item className="partnerItem">
                            <div className="partnerWrap">
                                <img className="partnerImages" src={require("../images/Homepage/partner1.png")} alt="partner1"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner2.png")} alt="partner2"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner3.png")} alt="partner3"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner4.png")} alt="partner4"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner5.png")} alt="partner5"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner6.png")} alt="partner6"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner7.png")} alt="partner7"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner8.png")} alt="partner8"></img>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="partnerItem">
                            <div className="partnerWrap">
                                <img className="partnerImages" src={require("../images/Homepage/partner9.png")} alt="partner9"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner10.png")} alt="partner10"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner11.png")} alt="partner11"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner12.png")} alt="partner12"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner13.png")} alt="partner13"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner14.png")} alt="partner14"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner15.png")} alt="rpartner15"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner16.png")} alt="partner16"></img>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="partnerItem">
                            <div className="partnerWrap">
                                <img className="partnerImages" src={require("../images/Homepage/partner17.png")} alt="partner17"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner18.png")} alt="partner18"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner19.png")} alt="partner19"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner20.png")} alt="partner20"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner21.png")} alt="partner21"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner22.png")} alt="partner22"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner23.png")} alt="partner23"></img>
                                <img className="partnerImages" src={require("../images/Homepage/partner24.png")} alt="partner24"></img>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="partnerItem">
                            <div className="partnerWrap">
                                <img className="partnerImages" src={require("../images/Homepage/partner25.png")} alt="partner25"></img>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div id="socialMedia">
                    <div id="smWrap">
                        <div id="smText">
                            <div id="smTitle">{this.props.lang?'本体官方社交平台':"Join our ecosystem today and be a part of the future"}</div>
                            <a href="https://discord.gg/4TQujHj" target="_black">{this.props.lang?'加入本体Discord社区':'Join our tech community in Discord'}</a>
                        </div>
                        <div id="smLogos">
                            <FontAwesomeIcon icon={['fab', 'discord']} title="Discord" size="2x" className="smLogo" color="white" />
                            <FontAwesomeIcon icon={['fab', 'twitter-square']}  title="Twitter" size="2x" className="smLogo" color="white" />
                            <FontAwesomeIcon icon={['fab', 'facebook-square']}  title="Facebook" size="2x" className="smLogo" color="white" />
                            <FontAwesomeIcon icon={['fab', 'medium']}  title="Medium" size="2x" className="smLogo" color="white" />
                            <FontAwesomeIcon icon={['fab', 'reddit-square']}  title="Reddit" size="2x" className="smLogo" color="white" />
                            <FontAwesomeIcon icon={['fab', 'github-square']}  title="Github" size="2x" className="smLogo" color="white" />
                            <FontAwesomeIcon icon={['fab', 'telegram']}  title="Telegram" size="2x" className="smLogo" color="white" />
                            <FontAwesomeIcon icon={['fab', 'youtube']}  title="Youtube" size="2x" className="smLogo" color="white" />
                            <FontAwesomeIcon icon={['fab', 'linkedin']}  title="Linkedin" size="2x" className="smLogo" color="white" />  
                            <FontAwesomeIcon icon={['fab', 'tencent-weibo']}  title="Tengxunshipin" size="2x" className="smLogo" color="white" />
                            <FontAwesomeIcon icon={['fab', 'weixin']}  title="Wechat" size="2x" className="smLogo" color="white" />
                            <FontAwesomeIcon icon={['fab', 'weibo']}  title="Weibo" size="2x" className="smLogo" color="white" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;