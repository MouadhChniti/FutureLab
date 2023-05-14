
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import '../styles/forgetPass.css'
import socialLogo from '../images/socialLogo.png'
import financialLogo from '../images/financialLogo.png'
import timeSeriesLogo from '../images/timeSeriesLogo.png'
import forgetpassimg from '../images/forgetpassimg.png'

import "aos/dist/aos.css";



const Forgetpass = (props) => {





    return (
        <div className='allHome'>
            <div className='home'>
                <div className='leftJustifier'>
                    <div className='left'>

                        <img src={forgetpassimg} id="forgetpassimg" />


                    </div>
                </div>
                <div className='rightForget'>
                    <div className='form'>
                        <div className='rightJust'>
                            <div className='forgetTitle'>Forget password</div>
                            <div className='descForget'>
                                <div>Please enter your email address below</div>
                            </div>
                            <div className='inputForge'>
                                <div className='inpJust'><input type='text' placeholder='Enter your E-mail'></input></div>
                            </div>


                            <div className='forgetButtons'>
                               <div className='cancelButtonF'> <Link to='/login'>Cancel</Link></div>
                                <div className='SendButtonF'>Send</div>

                            </div>
                        </div>
                    </div>


                </div>









            </div>


        </div>
    );
};



export default Forgetpass;