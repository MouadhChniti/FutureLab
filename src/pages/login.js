
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import '../styles/login.css'
import socialLogo from '../images/socialLogo.png'
import financialLogo from '../images/financialLogo.png'
import timeSeriesLogo from '../images/timeSeriesLogo.png'
import loginimg from '../images/loginimg.png'
import apple from '../images/apple.png'
import google from '../images/google.png'
import facebook from '../images/Facebook.png'
import Signup from '../pages/signup'
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import LoadingScreen from "../components/loading";


const Login = (props) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        const formData = {
            email,
            password
        };

        axios.post("http://localhost:8000/api/accounts/login/", formData)
            .then(response => {
                //localStorage.setItem('userId', response.data.user_id);  // Store user ID
                localStorage.setItem('token', response.data.token);
                console.log(response.data); // Check the response data in the console
                navigate("/home");
            })
            .catch(err => {
                console.log('error', err);
            });
    };






    return (
        <div className='allHome'>
            {isLoading ? (
                    <LoadingScreen />
                ) : (
                    <>
            <div className='home'>
                <div className='leftJustifier'>
                    <div className='left'>

                        <img src={loginimg} id="loginimg" />


                    </div>
                </div>
                <div className='right'>
                    <div className='form'>
                        <div className='rightJust'>
                            <form className='formSignUp' onSubmit={handleLogin} >
                                <div className='loginTitle'>Login</div>

                                <div className='inputsLog'>
                                    <div className='inpJust'><input type='text' placeholder='E-mail'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}></input></div>

                                    <div className='inpJust'><input className='passwordInput' type='password' placeholder='Password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}></input></div>
                                </div>
                                <div className='RememberForgrt'>
                                    <div><input type='checkbox' />Remember me</div>
                                    <Link to='/forgetpassword'> <div className='forgetPass'>Forget password?</div> </Link>

                                </div>

                                <button className='logButton' onSubmit={handleLogin}>Login</button>

                                <div className='cont'>or continue with</div>
                                <div className='logosSign'>
                                    <img src={facebook} id="facebook" />
                                    <img src={apple} id="apple" />
                                    <img src={google} id="google" />
                                </div>

                                <div className='noAcc'>You don't have an account?</div>
                                <Link to='/signup'>
                                    <div className='regHere'>Register here!</div></Link>
                            </form>
                        </div>
                    </div>


                </div>









            </div>

            </>)}
        </div>
    );
};



export default Login;