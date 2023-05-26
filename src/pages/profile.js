
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import CSVReader from 'react-csv-reader';
import ReactDOM from 'react-dom';
import uploadImg from '../images/uploadImg.png'
import formFmImg from '../images/financialModelImg.png'
import backIcon from '../images/backIcon.png'
import '../styles/profile.css'
import "aos/dist/aos.css";
import Navbar from '../components/navbar'
import Menu from '../components/menu'

const Profile = (props) => {





    return (
        <div className='fmJustifier'>
            <Menu />




            <div className='bigTitleFm'>

                <Navbar />
                <div className='profileJust'>
                    <div className='profileForm'>
                        <div>
                            <div className='profileTitle'>Profile</div>

                        </div>
                        <div className='names'>
                            <div className='profileName'>
                                <div>First name</div>

                            </div>
                            <div className='profileLast'>
                                <div>Last name</div>
                            </div>


                        </div>
                        <div className='namesContent'></div>
                        <div>E-mail
                            <div></div>
                        </div>

                        <div className='emailContent'></div>

                        <div className='passwordProfile'>Password
                            <div>
                                ...............
                            </div>
                        </div>

                        <Link to='/editprofile' className='editButton'>
                            Edit Profile
                        </Link>

                    </div>


                </div>
            </div>
        </div>





    );
};



export default Profile;