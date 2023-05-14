
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import '../styles/login.css'
import socialLogo from '../images/socialLogo.png'
import financialLogo from '../images/financialLogo.png'
import timeSeriesLogo from '../images/timeSeriesLogo.png'
import loginimg from '../images/loginimg.png'
import apple from '../images/apple.png'
import google from '../images/google.png'
import facebook from '../images/Facebook.png'
import Signup from '../pages/signup'
import "aos/dist/aos.css";



const Login = (props) => {





    return (
        <div className='allHome'>
            <div className='home'>
                <div className='leftJustifier'>
                    <div className='left'>

                        <img src={loginimg} id="loginimg" />


                    </div>
                </div>
                <div className='right'>
                    <div className='form'>
                        <div className='rightJust'>
                        <div className='loginTitle'>Login</div>
                        
                            <div className='inputsLog'>
                                <div className='inpJust'><input type='text' placeholder='E-mail'></input></div>

                                <div  className='inpJust'><input type='text' placeholder='Password'></input></div>
                            </div>
                            <div className='RememberForgrt'>
                                <div><input type='checkbox' />Remember me</div>
                                <Link to='/forgetpassword'> <div className='forgetPass'>Forget password?</div> </Link>

                            </div>

                            <div className='logButton'>Login</div>

                            <div className='cont'>or continue with</div>
                            <div className='logosSign'>
                                <img src={facebook} id="facebook" />
                                <img src={apple} id="apple" />
                                <img src={google} id="google" />
                            </div>

                            <div className='noAcc'>You don't have an account?</div>
                            <Link to='/signup'>
                            <div className='regHere'>Register here!</div></Link>
                        </div>
                    </div>


                </div>









            </div>


        </div>
    );
};



export default Login;