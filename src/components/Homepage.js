import React from 'react';
import {Carousel} from 'react-bootstrap';
import {Collapse,Dropdown} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontsawesome';
import {navContent,breakpoint} from '../constants';

let footerNav=[false,false,false,false];
class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item1:false,
            item2:false,
            item3:false,
            item4:false
        };
        this.viewWidth = this.viewWidth.bind(this);
        this.clickItem1=this.clickItem1.bind(this);
        this.clickItem2=this.clickItem2.bind(this);
        this.clickItem3=this.clickItem3.bind(this);
        this.clickItem4=this.clickItem4.bind(this);
    }
    componentDidMount() {
        this.viewWidth();
        window.addEventListener('resize', this.viewWidth);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.viewWidth);
    }
    viewWidth() {
        if(window.innerWidth>=breakpoint){
            this.setState({item1:true,item2:true,item3:true,item4:true});
        }else{
            this.setState({ item1:footerNav[0],item2:footerNav[1],item3:footerNav[2],item4:footerNav[3]});
        }
    }
    clickItem1(){
        let icon=document.getElementById('itemIcon1');
        if(window.innerWidth<breakpoint){
            this.setState({item1:!this.state.item1});
            footerNav[0]=!this.state.item1;
        }
        if(this.state.item1){
            icon.style.transform="rotate(0deg)";
            icon.style.transition="all 0.1s";
        }else{
            icon.style.transform="rotate(-180deg)";
            icon.style.transition="all 0.5s";
        }
    }
    clickItem2(){
        let icon=document.getElementById('itemIcon2');
        if(window.innerWidth<breakpoint){
            this.setState({item2:!this.state.item2});
            footerNav[1]=!this.state.item2;
        }
        if(this.state.item2){
            icon.style.transform="rotate(0deg)";
            icon.style.transition="all 0.1s";
        }else{
            icon.style.transform="rotate(-180deg)";
            icon.style.transition="all 0.5s";
        }
    }
    clickItem3(){
        let icon=document.getElementById('itemIcon3');
        if(window.innerWidth<breakpoint){
            this.setState({item3:!this.state.item3});
            footerNav[2]=!this.state.item3;
        }
        if(this.state.item3){
            icon.style.transform="rotate(0deg)";
            icon.style.transition="all 0.1s";
        }else{
            icon.style.transform="rotate(-180deg)";
            icon.style.transition="all 0.5s";
        }
    }
    clickItem4(){
        let icon=document.getElementById('itemIcon4');
        if(window.innerWidth<breakpoint){
            this.setState({item4:!this.state.item4});
            footerNav[3]=!this.state.item4;
        }
        if(this.state.item4){
            icon.style.transform="rotate(0deg)";
            icon.style.transition="all 0.1s";
        }else{
            icon.style.transform="rotate(-180deg)";
            icon.style.transition="all 0.5s";
        }
    }
    render(){
        return(
            <div id="homepage">
                <div id="header">
                    <p id="headerText1">Ready for all Businesses</p> 
                    <p id="headerText2">本体是新一代公有基础链项目和分布式信任协作平台。</p>
                    <button id="headerLink">了解更多</button>
                    {/*<img id="homeImage" src={require("../images/Home.jpg")}></img>*/}
                </div>
                <div id="newsWrap">
                    <div id="newsTop">
                        <div className="topnews" id="newsTop1">
                            <div className="keyword">新闻</div>
                            <div className="newsTitle">本体dApp风云榜</div>
                            <img className="newsTopImages" alt="newTopimage1" src={require("../images/Homepage/newsTop1.jpg")}></img>
                        </div>
                        <div className="topnews" id="newsTop2">
                            <div className="keyword">生态共建</div>
                            <div className="newsTitle">本体即将发行本体平台PAX,开拓DeFi领域新格局</div>
                            <img className="newsTopImages" alt="newTopimage2" src={require("../images/Homepage/newsTop2.jpg")}></img>
                        </div>
                        <div className="topnews" id="newsTop3">
                            <div className="keyword">生态共建</div>
                            <div className="newsTitle">本体与全球最大dApp数据和分发平台DappRadar达成合作</div>
                            <img className="newsTopImages" alt="newTopimage3" src={require("../images/Homepage/newsTop3.jpg")}></img>
                        </div>
                    </div>
                </div>
                <div id="intro">
                    <div className="introInfo" id="intro1">
                        <div className="introText">
                            <div className="introTitle">强大的开发工具</div>
                            <p className="introP">为去中心化应用产品提供支持多种开发语言的多样化开发工具。</p>
                            <a href="https://developer.ont.io/" target="_blank" className="introLink">开发者中心</a>
                        </div>
                        <img className="introImages" src={require("../images/Homepage/introImage1.png")} alt="introImage1"></img>
                    </div>
                    <div className="introInfo" id="intro2">
                        <div className="introText">
                            <div className="introTitle">定制化区块链服务</div>
                            <p className="introP">本体网络框架支持公有链网体系，为不同的场景提供定制服务。同时，本体通过独有的协议群支持跨链合作，为不同场景的应用落地提供可能。</p>
                        </div>
                        <img className="introImages" src={require("../images/Homepage/introImage2.png")} alt="introImage2"></img>
                    </div>
                    <div className="introInfo" id="intro3">
                        <div className="introText">
                            <div className="introTitle">可扩展区块链解决方案</div>
                            <p className="introP">凭借高TPS，本体分片设计能够为全球千万区块链用户提供应用支持。</p>
                            <a className="introLink" href="https://medium.com/ontologynetwork/ontology-sharding-design-released-c900331f71fa" target="_blank">本体分片设计</a>
                        </div>
                        <img className="introImages" src={require("../images/Homepage/introImage3.png")} alt="introImage3"></img>
                    </div>
                </div>
                <div id="reports">
                    <div id="reportsTitle">新闻</div>
                    <Carousel id="car">
                        <Carousel.Item className="carItem">
                            <div id="reportWrap">
                                <div className="report">
                                    <img className="reportImages" src={require("../images/Homepage/report1.png")} alt="reportImage1"></img>
                                    <p>本体所提供的平台可以让缺乏资金或资源的开发人员和初创公司构建去中心化的应用程序。</p>
                                </div>
                                <div className="report">
                                    <img className="reportImages" src={require("../images/Homepage/report2.png")} alt="testreportImage2"></img>
                                    <p>基础性链网“本体网络”预览发布，为行业应用提供“最后一公里”支持。</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="carItem">
                        <div id="reportWrap">
                            <div className="report">
                                <img className="reportImages" src={require("../images/Homepage/report3.png")} alt="reportImage3"></img>
                                <p>本体致力于打造开放平台，加速区块链商业应用落地。</p>
                                </div>
                                <div className="report">
                                    <img className="reportImages" src={require("../images/Homepage/report4.png")} alt="reportImage4"></img>
                                    <p>「本体」要用高性能、可跨链协作的链网体系构建信任生态。</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div id="partner">
                    <div id="partnerTitle">生态共建者</div>
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
                            <div id="smTitle">本体官方社交平台</div>
                            <a href="https://discord.gg/4TQujHj" target="_black">加入本体Discord社区</a>
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
                <div id="footer">
                    <div id="footerTitle">
                        <img id="footerImage" src={require("../images/logo-footer.png")} />
                        <FontAwesomeIcon id="footerAngle" icon="angle-right" size="lg" />
                        首页
                    </div>
                    <div id="footerItems">
                        <div id="footerItem1" className="footerItem">
                            <div className="itemTitle" onClick={this.clickItem1} aria-controls="item1_Text" aria-expanded={open}>
                            开发者
                            <FontAwesomeIcon id="itemIcon1" className="itemIcon" icon="angle-down" size="lg" />
                            </div>
                            <Collapse in={this.state.item1}>
                                <div id="item1_Text" className="itemText">
                                    <div>Bounty Program</div>
                                    <div>区块链浏览器</div>
                                </div>
                            </Collapse>
                        </div>
                        <div id="footerItem2" className="footerItem">
                            <div className="itemTitle" onClick={this.clickItem2} aria-controls="item2_Text" aria-expanded={open}>
                            dApps
                            <FontAwesomeIcon id="itemIcon2" className="itemIcon" icon="angle-down" size="lg" />
                            </div>
                            <Collapse in={this.state.item2}>
                                <div id="item2_Text" className="itemText">
                                    <div>dApps列表</div>
                                    <div>提交应用</div>
                                </div>
                            </Collapse>
                        </div>
                        <div id="footerItem3" className="footerItem">
                            <div className="itemTitle" onClick={this.clickItem3} aria-controls="item3_Text" aria-expanded={open}>
                            信任生态
                            <FontAwesomeIcon id="itemIcon3" className="itemIcon" icon="angle-down" size="lg" />
                            </div>
                            <Collapse in={this.state.item3}>
                                <div id="item3_Text" className="itemText">
                                    <div>Bounty Program</div>
                                    <div>区块链浏览器</div>
                                </div>
                            </Collapse>
                        </div>
                        <div id="footerItem4" className="footerItem">
                            <div className="itemTitle" onClick={this.clickItem4} aria-controls="item4_Text" aria-expanded={open}>
                            关于
                            <FontAwesomeIcon id="itemIcon4" className="itemIcon" icon="angle-down" size="lg" />
                            </div>
                            <Collapse in={this.state.item4}>
                                <div id="item4_Text" className="itemText">
                                    <div>Bounty Program</div>
                                    <div>区块链浏览器</div>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                    <div id="footerBottom">
                        <p>Copyright © 2019 The Ontology Team</p>
                        <Dropdown id="footerLang">
                            <Dropdown.Toggle id="langToggle">中文
                                <FontAwesomeIcon id="langIcon" icon="angle-down" size="lg" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu id="langMenu">
                                <Dropdown.Item className="langItem">中文</Dropdown.Item>
                                <Dropdown.Item className="langItem">English</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        );
    }
}
export default Homepage;