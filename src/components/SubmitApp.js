import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SubmitApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            logoURL:'',
            shootURL:[],
            auditFile:false,
            codeFile:false,
            contract:[1]
        }
        this.logoSelect=this.logoSelect.bind(this);
        this.shootSelect=this.shootSelect.bind(this);
        this.auditFileSelect=this.auditFileSelect.bind(this);
        this.codeFileSelect=this.codeFileSelect.bind(this);
        this.contractAdd=this.contractAdd.bind(this);
        this.decContract=this.decContract.bind(this);
    }
    logoSelect(event){
        if(event.target.files && event.target.files[0]){
            if(event.target.files[0].size>262144){
                alert(`Beyond the imited image size 256kb`)
            }else{
                this.setState({
                    logoURL:URL.createObjectURL(event.target.files[0])
                });
            }
        }else{
            this.setState({
                logoURL:''
            });
        }
        //console.log(event);
        //console.log(event.target);
        //console.log(event.target.files);
        //console.log(event.target.files[0]);
    }
    shootSelect(event){
        console.log("inside shoot");
        let index=event.target.id;
        if(event.target.files && event.target.files[0]){
            if(event.target.files[0].size>1228800){
                alert(`Beyond the imited image size 1200kb`)
            }else{
                this.state.shootURL[index]=URL.createObjectURL(event.target.files[0]);
                this.setState({
                    shootURL:this.state.shootURL
                });
            }
        }else{
            this.state.shootURL[index]='';
            this.setState({
                shootURL:this.state.shootURL
            });
        }
    }
    auditFileSelect(event){
        if(event.target.files && event.target.files[0]){
            if(event.target.files[0].size>5242880){
            //if(event.target.files[0].size<262144){
                alert(`Beyond the imited file size 5Mb`)
            }else{
                this.setState({
                    auditFile:true
                });
            }
        }else{
            this.setState({
                auditFile:false
            });
        }
    }
    codeFileSelect(event){
        if(event.target.files && event.target.files[0]){
            if(event.target.files[0].size>5242880){
            //if(event.target.files[0].size<262144){
                alert(`Beyond the imited file size 5Mb`)
            }else{
                this.setState({
                    codeFile:true
                });
            }
        }else{
            this.setState({
                codeFile:false
            });
        }
    }
    contractAdd(){
        this.state.contract.push(1);
        this.setState({
            contract:this.state.contract
        });
        //console.log(this.state.contract);
    }
    decContract(){
        this.state.contract.pop();
        this.setState({
            contract:this.state.contract
        });
    }
    render(){
        let arrLen=this.state.shootURL.length;
        let shoots=(arrLen>0)?(
            this.state.shootURL.map((e,i)=>{
                return(
                <label key={i} className="shootsUpload">
                    <input id={i} onChange={this.shootSelect} className="xlInput" type="file" name="shoot" accept="image/png,image/jpg" required="required"></input>
                    {!e?(
                    <div className="uploadNote">
                        <FontAwesomeIcon className="icon" icon="image" size="3x" />
                        {(this.props.lang)?(
                            <div className="note">将图片拖至此处，或<span>选择文件</span></div>
                            ):(
                            <div className="note">Drag image here，or <span>choose a image</span></div>
                        )}
                    </div>):(
                    <img className="shoot" src={this.state.shootURL[i]} alt="snapshoot"></img>
                    )}
                </label>);})):([]);
        if(arrLen<6){
            shoots.push(
            <label key={arrLen} className="shootsUpload">
                <input id={arrLen} onChange={this.shootSelect} className="xlInput" type="file" name="logo" accept="image/*" required="required"></input>
                {(!this.state.shootURL[arrLen])?(
                <div className="uploadNote">
                    <FontAwesomeIcon className="icon" icon="image" size="3x" />
                    {(this.props.lang)?(
                        <div className="note">将图片拖至此处，或<span>选择文件</span></div>
                        ):(
                        <div className="note">Drag image here，or <span>choose a image</span></div>
                    )}
                </div>):(
                <img className="shoot" src={this.state.shootURL[arrLen]} alt="snapshoot"></img>
                )}
            </label>
        );}
        let contractLen=this.state.contract.length;
        let contracts=this.state.contract.map((e,i)=>{
            return(
                <div key={i} id={"contract"+i} className="contract">
                    {(contractLen>1)?(
                        <div className="contractTitle">
                            <div className="address">Contract address {i+1}</div>
                            <div className="delButton" onClick={this.decContract}>Delete</div>
                        </div>
                    ):(
                        null
                    )}
                    <div className="inputBox">  
                        <div className="inputTitle">{this.props.lang?'协议地址* :':'Contract address* :'}</div>
                        <textarea className="mdInput" placeholder="24b3a5u0936a2ef70344bbdb4a9de82f0147duuy" name="conAddress" required></textarea>
                    </div>
                    <div className="inputBox">
                        <div className="inputTitle">Contract ABI* :</div>
                        <textarea className="lgInput" name="conABI" required></textarea>
                    </div>
                    <div className="inputBox">
                        <div className="inputTitle">Contract bytecode* :</div>
                        <textarea className="lgInput" name="conABI" required></textarea>
                    </div>
                    <div className="inputBox">
                        <div className="inputTitle">Contract source code* :</div>
                        <label className="fileUpload">
                        <input onChange={this.codeFileSelect} className="mdInput" type="file" name="auditFile" required="required"></input>
                        {(!this.state.codeFile)? (
                        <div className="uploadNote">
                            <FontAwesomeIcon className="icon" icon="file-upload" size="3x" />
                            {(this.props.lang)?(
                                <div className="note">将 txt. 文件拖至此处，或<span>选择文件</span></div>
                                ):(
                                <div className="note">Drag txt. file here，or <span>choose a file</span></div>
                                )}
                        </div>):(
                        <FontAwesomeIcon className="fileIcon" icon="file-alt" size="3x" /> 
                        )}
                    </label>
                    <div  className="note">{this.props.lang?'只接受txt格式，最大5MB':'Txt only，maximum 5MB'}</div>
                    </div>
                </div>
            );
        });
        return(
        <div id="submitApp">
            <div id="title">{this.props.lang?'提交你的应用':'Submit Your dApp'}</div>
            <div id="subtitle">{this.props.lang?'带*框为必填项。':'The fields with a "*" are required.'}</div>
            <form>
                <div className="inputGrid">
                    <div id="name" className="inputBox">
                        <div className="inputTitle">{this.props.lang?'应用名称* :':'dApp name* :'}</div>
                        <input className="smInput" name="dAppName" type="text" maxLength="40" required></input>
                        <div  className="note">{this.props.lang?'40字以内':'Maximum 40 characters'}</div>
                    </div>
                    <div id="tag" className="inputBox">
                        <div className="inputTitle">{this.props.lang?'标签* :':'Tagline* :'}</div>
                        <input className="smInput" name="tag" type="text" maxLength="40" required></input>
                        <div  className="note">{this.props.lang?'40字以内':'Maximum 40 characters'}</div>
                    </div>
                </div>
                <div className="inputBox">
                    <div className="inputTitle">{this.props.lang?'描述* :':'Description* :'}</div>
                    <textarea className="lgInput" placeholder={this.props.lang?'请介绍你的dApp':'Please introduce your dApp'} minLength="30" maxLength="600" name="description" required></textarea>
                    <div  className="note">{this.props.lang?'30-600字以内':'30-600 characters'}</div>
                </div>
                <div className="inputGrid">
                    <div className="inputBox" id="chooseBox">
                        <div className="inputTitle">{this.props.lang?'分类* :':'Category* :'}</div>
                        <input className="smInput" name="category" id="choose" list="cateList" placeholder={this.props.lang?'请选择':'Please choose'} required></input>
                        <datalist id="cateList">
                            <option value={this.props.lang?'游戏':'Game'} name="cateGame"></option>
                            <option value={this.props.lang?'交换':'Exchange'} name="cateExchange"></option>
                            <option value={this.props.lang?'可代收':'Collectibles'} name="cateCollectibles"></option>
                            <option value={this.props.lang?'其它':'Other'} name="cateOther"></option>
                        </datalist>
                    </div>
                    <div id="email" className="inputBox">
                        <div className="inputTitle">{this.props.lang?'邮箱地址* :':'Email address* :'}</div>
                        <input className="smInput" placeholder="name@email.com" name="email" type="email" required></input>
                    </div>
                    <div className="inputBox">
                        <div className="inputTitle">{this.props.lang?'网址* :':'Website* :'}</div>
                        <input className="smInput" placeholder="www.yourdapp.com" name="appWebsite" type="url" required></input>
                    </div>
                    <div id="referal" className="inputBox">
                        <div className="inputTitle">{this.props.lang?'推荐人* :':'referal Person* :'}</div>
                        <input className="smInput" placeholder={this.props.lang?'推荐人':'referal Person'} name="referal Person" type="text" required></input>
                    </div>
                </div>
                <div className="inputBox">
                    <div className="inputTitle">Logo* :</div>
                    <label className="logoUpload">
                        <input onChange={this.logoSelect} className="xlInput" type="file" name="logo" accept="image/png,image/jpg" required="required"></input>
                        {(!this.state.logoURL)? (
                        <div className="uploadNote">
                            <FontAwesomeIcon className="icon" icon="image" size="3x" />
                            {(this.props.lang)?(
                                <div className="note">将图片拖至此处，或<span>选择文件</span></div>
                                ):(
                                <div className="note">Drag image here，or <span>choose a image</span></div>
                                )}
                        </div>):(
                        <img className="logo" src={this.state.logoURL} alt="logo"></img>
                        )}
                    </label>
                    <div  className="note">{this.props.lang?'256kb大小以内，jpg或png格式，无圆边角':'256kb in jpg or png, no rounded corners'}</div>
                </div>
                <div className="inputBox">
                    <div className="inputTitle">{this.props.lang?'dApp 截图* :':'dApp screenshot* :'}</div>
                    <div className="uploadWrap">
                        {shoots}
                    </div>
                    <div className="note">{this.props.lang?'1-6张图片，1200大小以内，jpg或png格式，无圆边角':'1-6 images; 1200kb in jpg or png, no rounded corners'}</div>
                </div>
                <div className="radioSelection">
                    <div className="inputTitle">{this.props.lang?'dApp 类型* :':'dApp type* :'}</div>
                    <label className="radio">Web-based dApp
                        <input type="radio" name="appType" value="Web-based dApp" defaultChecked  required />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio">Mobile dApp
                        <input type="radio" name="appType" value="Mobile dApp" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="inputBox">
                    <div className="inputTitle">ONT ID</div>
                    <textarea className="mdInput" placeholder="did:ont:ANStVb6ymAMdAlCUikHpNk3cMq8S44dx87" name="ontID"></textarea>
                    {(this.props.lang)?
                        (<div  className="note">请点击<a href="https://dev-docs.ont.io/#/docs-en/Cyano/02-getting-started" target="_blank">Cyano</a>，以获得ONT ID。</div>):
                        (<div  className="note">To get an ONT ID, please use <a href="https://dev-docs.ont.io/#/docs-en/Cyano/02-getting-started" target="_blank">Cyano</a> here.</div>)}
                </div>
                <div className="inputBox">
                    <div className="inputTitle">{this.props.lang?'ONT 地址* :':'ONT address* :'}</div>
                    <textarea className="mdInput" placeholder="24b3a5u0936a2ef70344bbdb4a9de82f0147duuy" name="ontAddress" required></textarea>
                    <div  className="note">{this.props.lang?'用于接收ONT':'For receiving ONT'}</div>
                </div>
                <div id="contractWrap">
                    {contracts}
                    <input id="button" onClick={this.contractAdd} type="button" name="conSource" value={this.props.lang?'新增':'Add another'}></input>
                    <div  className="buttonNote">{this.props.lang?'最多10个':'10 contracts maximum'}</div>
                </div>
                <div className="radioSelection">
                    <div className="inputTitle">{this.props.lang?'开源状态* :':'Open source status* :'}</div>
                    <label className="radio">Open source 
                        <input type="radio" name="opensource" value="Open source" defaultChecked />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio">No 
                        <input type="radio" name="opensource" value="No" required  />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="inputBox">
                    <div className="inputTitle">{this.props.lang?'协议审计报告：':'Contract audit report:'}</div>
                    <label className="fileUpload">
                        <input onChange={this.auditFileSelect} className="mdInput" type="file" name="auditFile" required="required"></input>
                        {(!this.state.auditFile)? (
                        <div className="uploadNote">
                            <FontAwesomeIcon className="icon" icon="file-upload" size="3x" />
                            {(this.props.lang)?(
                                <div className="note">将 .pdf或.doc 文件拖至此处，或<span>选择文件</span></div>
                                ):(
                                <div className="note">Drag .pdf or .doc file here，or <span>choose a file</span></div>
                                )}
                        </div>):(
                        <FontAwesomeIcon className="fileIcon" icon="file-alt" size="3x" /> 
                        )}
                    </label>
                    <div  className="note">{this.props.lang?'最大5MB,建议上传 .pdf或.doc文件':'Maximum 5MB, .pdf and .doc files are suggested'}</div>
                </div>
                <div className="dateGrid">
                    <div id="name" className="inputBox">
                        <div className="inputTitle">GitHub address* :</div>
                        <input className="smInput" name="github" placeholder="http://git.example.com" type="url" required></input>
                    </div>
                    <div id="launchDate" className="inputBox">
                        <div className="inputTitle">Launch date* :</div>
                        <input className="smInput" name="launchDate"  type="date" required></input>
                    </div>
                </div>
                <div className="inputGrid">
                    <div className="inputBox">
                        <div className="inputTitle">Twitter:</div>
                        <input className="smInput" name="twitter" type="text"></input>
                    </div>
                    <div id="facebook" className="inputBox">
                        <div className="inputTitle">Facebook:</div>
                        <input className="smInput" name="facebook" type="text"></input>
                    </div>
                    <div className="inputBox">
                        <div className="inputTitle">Telegram:</div>
                        <input className="smInput" name="telegram" type="text"></input>
                    </div>
                    <div id="reddit" className="inputBox">
                        <div className="inputTitle">Reddit:</div>
                        <input className="smInput" name="reddit" type="text"></input>
                    </div>
                </div>
                <button id="submit" type="submit">{this.props.lang?'提交':'Submit'}</button>
            </form>
        </div>
        );
    }
}
export default SubmitApp;