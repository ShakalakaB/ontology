import React from 'react';

class ContactUs extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="contactUs">
                <div id="title">{this.props.lang?'本体的区块链基础设施和生态系统将改变许多行业的格局。想加入吗？':'Ontology\'s blockchain infrastructure and ecosystem will change the landscape of many industries. Want to be a part of it?'}</div>
                <form>
                    <div className="inputBox">
                        <div className="inputTitle">{this.props.lang?'咨询类别':'Type of Inquiry'}</div>
                        <input className="input" type="text" list="typeList" name="type of inquiry" required></input>
                        <datalist id="typeList">
                            <option value={this.props.lang?'加入核心团队':'Join the core team'} name="join team"></option>
                            <option value={this.props.lang?'成为节点':'Become a node'} name="be node"></option>
                            <option value={this.props.lang?'成为信任锚':'Become a trust anchor'} name="be trust anchor"></option>
                            <option value={this.props.lang?'区块链解决方案咨询':'Blockchain solution inquiry'} name="solution inquiry"></option>
                        </datalist>
                    </div>
                    <div className="inputGrid">
                        <div className="inputBox">
                            <div className="inputTitle">{this.props.lang?'名':'First name'}</div>
                            <input className="input" type="text" name="first name" required></input>
                        </div>
                        <div className="inputBox">
                            <div className="inputTitle">{this.props.lang?'姓':'Last name'}</div>
                            <input className="input" type="text" name="last name" required></input>
                        </div>
                        <div className="inputBox">
                            <div className="inputTitle">{this.props.lang?'公司':'Company'}</div>
                            <input className="input" type="text" placeholder={this.props.lang?'选填':'Optional'} name="company"></input>
                        </div>
                        <div className="inputBox">
                            <div className="inputTitle">{this.props.lang?'职位':'Job Title'}</div>
                            <input className="input" type="text" placeholder={this.props.lang?'选填':'Optional'} name="job title"></input>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div className="inputTitle">{this.props.lang?'邮箱':'Email'}</div>
                        <input className="input" type="email" name="email" required></input>
                    </div>
                    <div className="inputBox">
                        <div className="inputTitle">{this.props.lang?'留言':'Your Message'}</div>
                        <textarea className="xlInput" placeholder={this.props.lang?'请介绍你和你的团队':'Please tell us about you and your organization'} name="message" required></textarea>
                    </div>
                    <button id="send" type="submit">{this.props.lang?'发送':'Send'}</button>
                </form>
            </div>
        );
    }
}
export default ContactUs;