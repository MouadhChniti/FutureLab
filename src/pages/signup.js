
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import '../styles/signup.css'
import socialLogo from '../images/socialLogo.png'
import financialLogo from '../images/financialLogo.png'
import timeSeriesLogo from '../images/timeSeriesLogo.png'
import signupimg from '../images/signupimg.png'
import apple from '../images/apple.png'
import google from '../images/google.png'
import facebook from '../images/Facebook.png'
import "aos/dist/aos.css";
import { Navigate } from 'react-router-dom/dist';



const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignup = async (event) => {
        // Create an object with the form data
        const formData = {
            email,
            first_name,
            last_name,
            password,
            confirmPassword,
        };
        try {
            
            const response = await axios.post('http://localhost:8000/api/accounts/signup/', formData);
            console.log(response.data);
            alert(response.data.message);

            //Navigate('/login');

        } catch (error) {

            console.error(error);
            setError(error.response.data.msg);
        }
    };





    return (
        <div className='allHome'>
            <div className='home'>
                <div className='leftJustifier'>
                    <div className='left'>

                        <img src={signupimg} id="signupimg" />


                    </div>
                </div>
                <div className='rightSignup'>
                    <div className='formSighup'>
                        <div className='rightJust'>
                            <form className='formSignUp' onSubmit={handleSignup} >
                                <div className='sighupTitle'>Sign up</div>
                                <div>
                                    <input type='text' placeholder='Enter your E-mail'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}></input>
                                </div>

                                <div className='inputNames'>
                                    <input type='text' placeholder='First name' id='name'
                                        value={first_name}
                                        onChange={(e) => setFirstName(e.target.value)}></input>
                                    <input type='text' placeholder='Last name' id='name'
                                        value={last_name}
                                        onChange={(e) => setLastName(e.target.value)}></input>
                                </div>

                                <div className='inputsLog'>
                                    <div className='inpJust'><input className='passwordInput'type='password' placeholder='Password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}></input></div>

                                    <div className='inpJust'><input className='passwordInput' type='password' placeholder='Confirm Password'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}></input></div>
                                </div>

                                <button className='logButton' onSubmit={handleSignup}>Sign up</button>

                                <div className='cont'>or continue with</div>
                                <div className='logosSign'>
                                    <img src={facebook} id="facebook" />
                                    <img src={apple} id="apple" />
                                    <img src={google} id="google" />
                                </div>

                                <div className='noAcc'>You don't have an account?</div>
                                <Link to='/login'><div className='regHere'>Login here!</div></Link>
                            </form>
                        </div>
                    </div>


                </div>









            </div>


        </div>
    );
};



export default Signup;