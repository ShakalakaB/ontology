import React from 'react';

import {trustAnchorBanner,trustAnchorImages} from '../constants';
class TrustAnchor extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const images=trustAnchorImages.map(e=>{
            return(
                <img className="image" src={e} alt="trust anchor image" />
            )
        });
        return(
            <div id="trustAnchor">
                <div id="banner">
                    <div id="title">{this.props.lang?'Ontology 信任锚':'Ontology Trust Anchor'}</div>
                    <div id="bannerFlex">
                        <img id="bannerIcon" src={require("../images/TrustAnchor/anchor1.png")} alt="bannerIcon"></img>
                        <div id="des">{this.props.lang?trustAnchorBanner['chinese']:trustAnchorBanner['english']}</div>
                    </div>
                    <div id="bannerBottom">
                        {images}
                    </div>
                    <img className="bottomImage" id="image1" src={require("../images/TrustAnchor/bannerBottom1.png")} alt="background image"></img>
                    <img className="bottomImage" id="image2" src={require("../images/TrustAnchor/bannerBottom2.png")} alt="background image"></img>
                </div>
                <div id="midBanner">
                    {/*<div id="anchorInfoWrap">*/}
                        <div className="anchorInfo">
                            <div className="num">5</div>
                            <div className="infoText">{this.props.lang?'信任锚':'Trust Anchors'}</div>
                        </div>
                        <div className="anchorInfo">
                            <div className="num">6</div>
                            <div className="infoText">{this.props.lang?'认证文件类型':'Types of Identify Documents'}</div>
                        </div>
                        <div className="anchorInfo">
                            <div className="num">218</div>
                            <div className="infoText">{this.props.lang?'国家及地区':'Countries and regions around the world'}</div>
                        </div>
                    {/*</div>*/}
                    <img id="midBackImage" src={require("../images/TrustAnchor/map.png")} alt="background image map" ></img>
                </div>
            </div>
        );
    }
}
export default TrustAnchor;