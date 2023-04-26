import React, {useState} from 'react';
import logo from '../images/todo-list-logo.png';
import '../styling/Register.css';
import { useNavigate } from 'react-router-dom';


export const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("The email is " + email);
    }

    const backToLogin = () => {
        navigate('/');
    }

    return (
        <div className='main-content'>
            <div id='register'>
            <h1 className='app-headline'>To Do List</h1>
                <form onSubmit={handleSubmit}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' className='register-input' id='register-email' /><br/>
                    <input value={name} onChange={(e) => setName(e.target.value)} type='name' placeholder='Name' className='register-input' id='register-name'/><br/>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='register-input' id='register-password' /><br/>
                    <input value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} type='password' placeholder='Confirm Password' className='register-input' id='register-confirm-pass' /><br/>
                    <button className='register-button' type='submit'>Submit</button>
                </form>
            <button onClick={backToLogin} className='register-button'>Go Back</button>
            </div>
        </div>
    )
}