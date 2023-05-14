
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import '../styles/signup.css'
import socialLogo from '../images/socialLogo.png'
import financialLogo from '../images/financialLogo.png'
import timeSeriesLogo from '../images/timeSeriesLogo.png'
import signupimg from '../images/signupimg.png'
import apple from '../images/apple.png'
import google from '../images/google.png'
import facebook from '../images/Facebook.png'
import "aos/dist/aos.css";



const Signup = (props) => {





    return (
        <div className='allHome'>
            <div className='home'>
                <div className='leftJustifier'>
                    <div className='left'>

                        <img src={signupimg} id="signupimg" />


                    </div>
                </div>
                <div className='rightSignup'>
                    <div className='formSighup'>
                        <div className='rightJust'>
                            <div className='sighupTitle'>Sign up</div>
                            <div>
                                <input type='text' placeholder='Enter your E-mail'></input>
                            </div>

                            <div className='inputNames'>
                                <input type='text' placeholder='First name' id='name'></input>
                                <input type='text' placeholder='Last name' id='name'></input> 
                            </div>

                            <div className='inputsLog'>
                                <div className='inpJust'><input type='text' placeholder='Password'></input></div>

                                <div className='inpJust'><input type='text' placeholder='Confirm Password'></input></div>
                            </div>

                            <div className='logButton'>Login</div>

                            <div className='cont'>or continue with</div>
                            <div className='logosSign'>
                                <img src={facebook} id="facebook" />
                                <img src={apple} id="apple" />
                                <img src={google} id="google" />
                            </div>

                            <div className='noAcc'>You don't have an account?</div>
                            <Link to='/login'><div className='regHere'>Login here!</div></Link>
                        </div>
                    </div>


                </div>









            </div>


        </div>
    );
};



export default Signup;