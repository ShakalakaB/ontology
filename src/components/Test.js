import React from 'react';
import {Link} from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


class Test extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
               <Carousel id="car">
                    <Carousel.Item>
                    <div className="report">
                                <img className="reportImages d-block w-100" src={require("../images/Homepage/report1.png")} alt="reportImage1"></img>
                                <Carousel.Caption>
                                    <p>本体所提供的平台可以让缺乏资金或资源的开发人员和初创公司构建去中心化的应用程序。</p>
                                </Carousel.Caption>
                            </div>
                            <div className="report">
                                <img className="reportImages d-block w-100" src={require("../images/Homepage/report2.png")} alt="reportImage2"></img>
                                <Carousel.Caption>
                                    <p>基础性链网“本体网络”预览发布，为行业应用提供“最后一公里”支持。</p>
                                </Carousel.Caption>
                            </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require("../images/Homepage/report1.png")} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require("../images/Homepage/report1.png")} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        );
    }
}
export default Test;