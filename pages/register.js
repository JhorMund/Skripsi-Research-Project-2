import React, {Component} from 'react';
import './Register.scss'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Footer from "components/Footer/Footer.js";
import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";
import image from "assets/img/bg7.jpg";
import Link from 'next/link';
import Button from '../components/atom/Button';
import Routerr from "next/router";
import { registerUserAPI } from '../components/config/redux/action';
import { connect } from 'react-redux';
import { Router } from '@material-ui/icons';

const useStyles = makeStyles(styles);

class Register extends Component{

    state ={
      name: '',
      alamat: '',
      email: '',
      password: ''
    }
    handleChangeText = (e) => {
        // console.log(data);
        this.setState({
            [e.target.id]: e.target.value,
        });
    }
    handleRegisterSubmit = async () => {
        const {name, alamat, email, password} = this.state;
        this.props.registerAPI({name, alamat, email, password})
        console.log('data before send: ',name, alamat, email, password)
        const res = await this.props.registerAPI({name, alamat, email, password}).catch(err => err);
        if(res){
            alert("SUCCESS...")
        }else {
            this.setState({
                name: '',
                alamat: '',
                email: '',
                password: '',
            })

        }
    }

    render(){
        return(
            <div  className={useStyles.pageHeader} style={{
                backgroundImage: "url(" + image + ")",
                backgroundSize: "cover",
                backgroundPosition: "top center"
            }}>
                <div className="auth-container">
                    <div className="auth-card">
                        <p className="auth-title">Register Page</p>
                        <input className="input" id="name" placeholder="Username" type="text" onChange={this.handleChangeText} value={this.state.name} />
                        <input className="input" id="alamat" placeholder="Alamat" type="text" onChange={this.handleChangeText} value={this.state.alamat} />
                        <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} value={this.state.email} />
                        <input className="input" id="password" placeholder="Password" type="Password" onChange={this.handleChangeText} value={this.state.password} />
                        <Button className="btn" onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading} />
                        <p className="auth-titlee"><Link href="/login" >Back To Login</Link></p>
                    </div>
                </div> 
                <Footer whiteFont />
            </div>
        )
    }
}
const reduxState = (state) => ({
    isLoading: state.isLoading
})
const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register);