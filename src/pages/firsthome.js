
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import '../styles/firsthome.css'
import socialLogo from '../images/socialLogo.png'
import financialLogo from '../images/financialLogo.png'
import timeSeriesLogo from '../images/timeSeriesLogo.png'
import homeimg from '../images/homeimg.png'
import "aos/dist/aos.css";



const Fhome = (props) => {





    return (
        <div className='allHome'>
            <div className='home'>
                <div className='leftJustifier'>
                    <div className='leftS'>

                        <div className='title'>
                            Data <div className='pred'>Prediction</div>
                        </div>

                        <div className='desc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>

                        <Link to='login'>

                        <div className='startButton'>
                            Let's get started
                        </div></Link>


                    </div>
                </div>
                <div className='rightS'>
                <img src={homeimg} id="homeimg" />

                </div>









            </div>


        </div>
    );
};



export default Fhome;