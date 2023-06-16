
import { Link,useLocation  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import '../styles/forgetPass.css'
import socialLogo from '../images/socialLogo.png'
import financialLogo from '../images/financialLogo.png'
import timeSeriesLogo from '../images/timeSeriesLogo.png'
import forgetpassimg from '../images/forgetpassimg.png'

import "aos/dist/aos.css";



const Resetpass = (props) => {
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const emailParam = searchParams.get('email');
        setEmail(emailParam);
    }, [location.search]);

    const handlePasswordChange = () => {
        if (newPassword === retypePassword) {
            // Make an API request to send the email and new password to the back-end
            const data = {
                email: email,
                password: newPassword
            };
            axios.post('http://localhost:8000/api/accounts/reset_password/', data)
                .then(response => {
                    // Handle the response from the back-end
                    console.log(response.data);
                    // Display a success message or redirect to a success page
                    alert(response.data.message);
                })
                .catch(error => {
                    // Handle errors
                    console.error(error);
                    // Display an error message
                });
        } else {
            // Display an error message for mismatched passwords
            console.error('Passwords do not match');
        }
    };

    return (
        <div className='allHome'>
            <div className='home'>
                <div className='leftJustifier'>
                    <div className='left'>

                        <img src={forgetpassimg} id="forgetpassimg" />


                    </div>
                </div>
                <div className='rightForget'>
                    <div className='form'>
                        <div className='rightJust'>
                            <div className='forgetTitle'>Reset password</div>
                            {/* <div className='descForget'>
                                <div>Type new password</div>
                            </div> */}
                            <div className='inputForge'>
                                <div className='inpJust'><input type="password" className='sendmailInput' value={newPassword} onChange={e => setNewPassword(e.target.value)}  placeholder='new password'></input></div>
                            </div>
                            <div className='inputForge'>
                                <div className='inpJust'><input type="Password" className='sendmailInput' value={retypePassword} onChange={e => setRetypePassword(e.target.value)} placeholder='retype new password'></input></div>
                            </div>


                            <div className='forgetButtons'>
                               <div className='cancelButtonF'> <Link to='/forgetPassword'>Cancel</Link></div>
                                <button className='SendButtonF'onClick={handlePasswordChange} >Send</button>

                            </div>
                        </div>
                    </div>


                </div>









            </div>


        </div>
    );
};



export default Resetpass;