
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import '../styles/navbar.css'
import "aos/dist/aos.css";
import Profile from '../pages/profile'



const Navbar = (props) => {





    return (
        <div className='allNavbar'>
            <div className='nav'>
                <div className='userIcon'>
                    <div>
                        Full name
                    </div>
                    <Link to='/profile'> <div className="user-image-container"><img src="path/to/user/image" alt="User" /></div></Link>
                    

                </div>

            </div>



        </div>
    );
};



export default Navbar;