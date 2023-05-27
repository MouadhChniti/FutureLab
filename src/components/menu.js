
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import '../styles/menu.css'
import homeicon from '../images/homeicon.png'
import dataseticon from '../images/datasetsicon.png'
import settingsicon from '../images/settingsicon.png'
import platformlogoicon from '../images/platformlogo.png'
import Home from '../pages/home'
import Fhome from '../pages/firsthome'
import "aos/dist/aos.css";
import DropdownMenu from './dropmenu';



const Menu = (props) => {





    return (
        <div className='allMenu'>
            <div className='menu'>
                <div>
                    <div className='platformLogo'>
                       <Link to='/'> <div><img src={platformlogoicon} id='platformlogoicon'></img></div></Link>
                    </div>
                    <div className='menuJust'>

                        <div className='navIcons'>
                            <Link to='/home'><div className='homeiconjust'><img src={homeicon} id='homeicon'></img></div></Link>
                            <Link to='/datasets'><div className='dataseticonjust'><img src={dataseticon} id='dataseticon'></img></div></Link>
                        </div>

                        <div className='settingsIcon'>
                            {/* <img src={settingsicon} id='settingsicon '></img> */}
                            <DropdownMenu/>
                        </div>
                    </div>
                </div>

            </div>
            


        </div>
    );
};



export default Menu;