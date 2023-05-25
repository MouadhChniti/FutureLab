
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import '../styles/navbar.css'
import "aos/dist/aos.css";
import Profile from '../pages/profile'



const Navbar = (props) => {
    const [username, setUsername] = useState('');
    /*useEffect(() => {
        axios
          .get('http://localhost:8000/api/accounts/navbar/')
          .then((response) => {
            const username = response.data.username;
            setUsername(username);
          })
          .catch((err) => {
            console.log('error', err);
          });
      }, []);*/
      useEffect(() => {
        const fetchUsername = async () => {
          try {
            const token = localStorage.getItem('token');
    
            // Perform token validation or decoding here
    
            // Make a request to retrieve the username
            const response =    axios.post('http://localhost:8000/api/accounts/navbar/',token);
            
            if (response.ok) {
              const data = await response.json();
              setUsername(data.username);
            } else {
              throw new Error('Failed to retrieve username');
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchUsername();
      }, []);
    

    return (
        <div className='allNavbar'>
            <div className='nav'>
                <div className='userIcon'>
                    <div>
                        {username}
                        {/*username*/}
                    </div>
                    <Link to='/profile'> <div className="user-image-container"><img src="path/to/user/image" alt="User" /></div></Link>


                </div>

            </div>



        </div>
    );
};



export default Navbar;