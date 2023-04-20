import React, {useState} from 'react';
import logo from '../images/todo-list-logo.png';
import '../styling/Login.css';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("The email is " + email);
    }

    const Register = () => {
        navigate('/register');
    }


    return (
        <div id='login'>
            <img src={logo} id='logo'/>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' className='login-input' id='login-email'/><br/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='login-input' id='login-password' /><br/>
                
                <button className='login-button' type='submit'>Submit</button>
            </form>
        <button onClick={Register} className='login-button'>Register</button>
        <div id='forgot-pass-section'>
            <div className='forgot-pass-line'></div>
                <p className='forgot-pass'>Forgot Password?</p>
            <div className='forgot-pass-line'></div>
        </div>
        </div>
    )
}
