
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
import LoadingScreen from '../components/loading';
import { useNavigate } from 'react-router-dom';

const Editprofile = (props) => {
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
          console.log(response.data);
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

  const token = localStorage.getItem('token');
  const [formData, setFormData] = useState({
    first_name: userdata.firstname,
    last_name: userdata.lastname,
    email: userdata.email,
    currentPassword: '',
    newPassword: '',
    rePassword: '',
    token: token,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      first_name: id === 'nameEdit' ? value : prevData.first_name,
      last_name: id === 'lastEdit' ? value : prevData.last_name,
    }));
  };
  const navigate = useNavigate()
  const handleEdit = async (event) => {
    event.preventDefault();
    console.log('formddata::::', formData)

    axios.post("http://localhost:8000/api/accounts/edituser/", formData)
      .then(response => {
        console.log(response.data); // Check the response data in the console
        navigate("/profile");
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  return (
    <div className='fmJustifier'>
      <Menu />
      <div className='bigTitleFm'>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Navbar />
            <div className='profileJust'>
              <div className='profileForm'>
              <div >
                  <div className='profileTitleEdit'>Edit Profile</div>

                </div>
                {/* <div className='profileJust'>
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

                <div className='passwordProfile'>Confirm password
                  <div>
                    <div><input type='text' id='rePassword'></input></div>
                  </div>
                </div>
                <div className='editprofileButtons'>

                  <Link to='/profile' className='cancelEdit'>
                    <div className='cancelEditBtn'>
                      Cancel
                    </div>
                  </Link>



                  <Link to='/profile' className='saveButtonEdit'>
                    <div className='saveButtonEditBtn'>
                      Save
                    </div>
                  </Link>

                </div> */}

                {/* </div> */}
                <form className='formEditProfile' onSubmit={handleEdit}>
                  <div className='namesEdit'>
                    <div className='profileNameEdit'>
                      <div> First name</div>
                    </div>
                    <div className='profileLastEdit'>
                      <div>Last name</div>
                    </div>
                  </div>
                  <div className='namesContentEdit'>
                    <div className='namesInputEdit'>
                      <input type='text' id='nameEdit' value={userdata.firstname} />
                    </div>
                    <div className='namesInputEdit'>
                      <input type='text' id='lastEdit' value={userdata.lastname} />
                    </div>
                  </div>
                  <div className='emailEdit'>
                    E-mail
                    <div>
                      <div className='emailInputEdit'>
                        <input type='text' id='emailEdit' value={userdata.email} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                  <div className='emailContent'></div>
                  <div className='passwordProfile'>
                    Current password
                    <div>
                      <div>
                        <input type='text' id='currentPassword' />
                      </div>
                    </div>
                  </div>
                  <div className='passwordProfile'>
                    New password
                    <div>
                      <div>
                        <input type='text' id='newPassword' />
                      </div>
                    </div>
                  </div>
                  <div className='passwordProfile'>
                    Rewrite new Password
                    <div>
                      <div>
                        <input type='text' id='rePassword' />
                      </div>
                    </div>
                  </div>
                  <div className='editprofileButtons'>
                    <div className='cancelEdit'>
                      <Link to='/profile'>Cancel</Link>
                    </div>
                    <button className='saveButtonEdit' onSubmit={handleEdit}>Save</button>
                  </div>
                </form>
              </div>
            </div >
          </>
        )
        }

      </div>
    </div >
  );

};



export default Editprofile;