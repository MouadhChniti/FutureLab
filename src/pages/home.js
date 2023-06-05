
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import '../styles/home.css'
import socialLogo from '../images/socialLogo.png'
import financialLogo from '../images/financialLogo.png'
import timeSeriesLogo from '../images/timeSeriesLogo.png'
import Navbar from '../components/navbar'
import Menu from '../components/menu'
import "aos/dist/aos.css";



const Home = (props) => {





    return (
        <div className='homeJustifier'>
            <Menu />
            <div className='allHomeJust'>
                <div className='allHomee'>
                    <Navbar />
                    <div className='homeeJust'>
                        <div className='homee'>




                            <div className='financial'>
                                <Link to={'/fm'}>
                                    {/* <div>Financial Model</div> */}
                                    <div className='imgContainer'>
                                        <img src={financialLogo} id="financiallogo" />
                                    </div>
                                    <div className='button'>
                                        <div>Financial Model</div>

                                    </div>
                                </Link>

                            </div>





                            <div className='social'>
                                {/* <div>social media emotion detection</div> */}
                                <Link to={'/socialmodel'}>
                                    <div className='imgContainer'>
                                        <img src={socialLogo} id="sociallogo" /></div>
                                    <div className='button'>
                                        <div>Social media Model</div>
                                    </div>
                                </Link>

                            </div>

                            {/* <div className='timeSeries'>
                                
                                <div className='imgContainer'><img src={timeSeriesLogo} id="timeSerieslogo" /></div>
                                <div className='button'>
                                    <div>Time Series Model</div>
                                </div>


                            </div> */}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};



export default Home;