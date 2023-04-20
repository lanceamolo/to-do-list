import React, {useState} from 'react';
import logo from '../images/todo-list-logo.png';
import '../styling/Login.css';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("The email is " + email);
    }

    return (
        <div id='login'>
            <img src={logo} id='logo'/>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' className='login-input' id='login-email'/><br/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='login-input' id='login-password' /><br/>
                <button className='login-button' type='submit'>Submit</button>
            </form>
        <button className='login-button'>Register</button>
        </div>
    )
}
