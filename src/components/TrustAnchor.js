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
            </div>
        );
    }
}
export default TrustAnchor;