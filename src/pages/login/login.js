import React, { Component } from "react"
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./login.css"
import logo from "./../../static/logo.png"
import {login} from "./../../apis/apis"
import md5 from "md5"
// import  browserHistory  from 'react-router';
// import {browserHistory} from "react-router"
const FormItem = Form.Item;

class NormalLoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            checkNick:true
        }
    }
    componentDidMount(){
        //console.log(111)
    }
    //提交
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                var a={
                    employee_account:values.userName,
                    password:md5(values.password)
                }
                login(a).then(res=>{
                    console.log(res);
                    if(res.code==0){
                        sessionStorage.setItem("userinfo",JSON.stringify(res.content))
                        this.props.history.push("/");
                    }
                })
                //console.log(md5(3423423))
            }
        });
    }
    //是否记住密码
    isRember=(e)=>{
        //console.log(e)
        //console.log(this.props.form.getFieldDecorator());
        this.setState({checkNick:e.target.checked},()=>{
            if(e.target.checked){
                //localStorage
                this.props.form.validateFields((err, values) => {
                    localStorage.setItem("user",JSON.stringify(values))
                })
            }
        })
        
       
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login'>
                
                <h3 className='h3'><img src={logo} alt="" className="logo"/>四保提现</h3>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {(
                            <Checkbox  value={this.state.checkNick}
            onChange={this.isRember}>记住我</Checkbox>
                        )}
                        {/* <a className="login-form-forgot" href="">Forgot password</a> */}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                           登录
          </Button>
                        {/* Or <a href="">register now!</a> */}
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;