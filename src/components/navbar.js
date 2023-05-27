
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import '../styles/navbar.css'
import "aos/dist/aos.css";
import userIcon from '../images/account.png'




const Navbar = (props) => {
    const [username, setUsername] = useState('');
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
            setUsername(response.data.username);
            console.log(response.username)
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
                        
                    </div>
                    <Link to='/profile'> <div className="user-image-container"><img src={userIcon}alt="User" id='usericon' /></div></Link>


                </div>

            </div>



        </div>
    );
};



export default Navbar;