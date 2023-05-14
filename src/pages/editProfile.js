
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
import '../styles/editProfile.css'
import "aos/dist/aos.css";
import Navbar from '../components/navbar'
import Menu from '../components/menu'

const Editprofile = (props) => {





    return (
        <div className='fmJustifier'>
            <Menu />




            <div className='bigTitleFm'>

                <Navbar />
                <div className='profileJust'>
                    <div className='profileForm'>
                        <div >
                            <div className='profileTitleEdit'>Edit Profile</div>

                        </div>
                        <div className='namesEdit'>
                            <div className='profileNameEdit'>
                                <div> First name</div>

                            </div>
                            <div className='profileLastEdit'>
                                <div>Last name</div>
                            </div>


                        </div>
                        <div className='namesContentEdit'>

                            <div className='namesInputEdit'><input type='text' id='nameEdit'></input></div>
                            <div className='namesInputEdit'><input type='text' id='lastEdit'></input></div>
                        </div>
                        <div className='emailEdit'>E-mail
                            <div><div className='emailInputEdit'><input type='text' id='emailEdit'></input></div>
                            </div>
                        </div>

                        <div className='emailContent'></div>

                        <div className='passwordProfile'>Current password
                            <div>
                                <div><input type='text' id='currentPassword'></input></div>
                            </div>
                        </div>

                        <div className='passwordProfile'>New password
                            <div>
                                <div><input type='text' id='newPassword'></input></div>
                            </div>
                        </div>

                        <div className='passwordProfile'>Rewrite new Password
                            <div>
                                <div><input type='text' id='rePassword'></input></div>
                            </div>
                        </div>
                        <div className='editprofileButtons'>
                            <div className='cancelEdit'>
                               <Link to='/profile'> cancel</Link>
                            </div>

                            <div className='saveButtonEdit'>
                                Save
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>





    );
};



export default Editprofile;