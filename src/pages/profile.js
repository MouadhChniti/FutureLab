
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
import LoadingScreen from '../components/loading';

const Profile = (props) => {

    const [userdata, setuserdata] = useState('');
    useEffect(() => {
      const fetchUsername = async () => {
        try {
          const token = localStorage.getItem('token');
          console.log(token);
    
          // Create an object with the token in the request body
          const requestBody = { token };
    
          // Make a request to retrieve the username
          const response = await axios.post('http://localhost:8000/api/accounts/navbar/', requestBody);
    
          if (response.data) {
            console.log(response.data);
            setuserdata(response.data);
            console.log(response.data)
          } else {
            throw new Error('Failed to retrieve username');
          }
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchUsername();
    }, []);

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the data is loaded
    }, 2000);
  }, []);




  return (
    <div className='fmJustifier'>
      <Menu />
      <div className='bigTitleFm'>
        
            <Navbar />
            {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <div className='profileJust'>
              <div className='profileForm'>
                <div>
                  <div className='profileTitle'>Profile</div>
                </div>
                <div className='names'>
                  <div className='profileName'>
                    <div> First name</div>
                  </div>
                  <div className='profileLast'>
                    <div>Last name</div>
                  </div>
                </div>
                <div className='namesContent'>
                  <div className='namesContentfirtlast'>{userdata.firstname}</div>
                  <div className='namesContentfirstlast'>{userdata.lastname}</div>
                </div>
                <div>E-mail</div>
                <div>
                  <div className='emailContent'>{userdata.email}</div>
                </div>
                <div className='passwordProfile'>
                  Password
                  <div>...............</div>
                </div>
                <button className='editButton'>
                  <Link to='/editprofile'> Edit </Link>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
  
        }


export default Profile;