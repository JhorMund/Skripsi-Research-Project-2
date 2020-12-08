import React, {Component} from 'react';
import './Register.scss'
import { connect } from 'react-redux';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Footer from "components/Footer/Footer.js";
import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";
import image from "assets/img/bg7.jpg";
import { loginUserAPI } from '../components/config/redux/action';
import Button from '../components/atom/Button';
import Router from "next/router";
import Link from 'next/link';
import { route } from 'next/dist/next-server/server/router';

const useStyles = makeStyles(styles);

class Login extends Component{

    state ={
        email: '',
        password: ''
    }
    handleChangeText = e => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }
    handleLoginSubmit = async () => {
        const {email, password} = this.state;
        this.props.loginAPI({email, password})
        const {history} = this.props;
        const res = await this.props.loginAPI({email, password}).catch(err => err);
        if(res){
            alert("success");
            console.log('login success',res)
            localStorage.setItem('userData', JSON.stringify(res))
            this.setState({
                email: '',
                password: ''
            })
            Router.push('/components')
        }else {
            console.log('login failed')
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
                        <p className="auth-title">Login Page</p>
                        <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} value={this.state.email} />
                        <input className="input" id="password" placeholder="Password" type="Password" onChange={this.handleChangeText} value={this.state.password} />
                        <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading}/>   
                        <p className="auth-titlee"><Link href="/register" >Go To Register</Link></p>
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
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Login);

// import React from "react";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Icon from "@material-ui/core/Icon";
// // @material-ui/icons
// import Email from "@material-ui/icons/Email";
// import People from "@material-ui/icons/People";
// // core components
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
// import Footer from "components/Footer/Footer.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardFooter from "components/Card/CardFooter.js";
// import CustomInput from "components/CustomInput/CustomInput.js";

// import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";

// import image from "assets/img/bg7.jpg";

// const useStyles = makeStyles(styles);

// export default function LoginPage(props) {
//   const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
//   setTimeout(function() {
//     setCardAnimation("");
//   }, 700);
//   const classes = useStyles();
//   const { ...rest } = props;
//   return (
//     <div>
      
//       <div
//         className={classes.pageHeader}
//         style={{
//           backgroundImage: "url(" + image + ")",
//           backgroundSize: "cover",
//           backgroundPosition: "top center"
//         }}
//       >
//         <div className={classes.container}>
//           <GridContainer justify="center">
//             <GridItem xs={12} sm={6} md={4}>
//               <Card className={classes[cardAnimaton]}>
//                 <form className={classes.form}>
//                   <CardBody>
//                     <CustomInput
//                       labelText="Email..."
//                       id="email"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                       inputProps={{
//                         type: "email",
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <Email className={classes.inputIconsColor} />
//                           </InputAdornment>
//                         )
//                       }}
//                     />
//                     <CustomInput
//                       labelText="Password"
//                       id="pass"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                       inputProps={{
//                         type: "password",
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <Icon className={classes.inputIconsColor}>
//                               lock_outline
//                             </Icon>
//                           </InputAdornment>
//                         ),
//                         autoComplete: "off"
//                       }}
//                     />
//                   </CardBody>
//                   <CardFooter className={classes.cardFooter}>
//                     <Button simple color="primary" size="lg">
//                       Log In
//                     </Button>
//                   </CardFooter>
//                 </form>
//               </Card>
//             </GridItem>
//           </GridContainer>
//         </div>
//         <Footer whiteFont />
//       </div>
//     </div>
//   );
// }
