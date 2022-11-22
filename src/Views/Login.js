import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const logIn = () => {
        window.localStorage.setItem('isLoggedIn', true);
        window.location.reload()
    };

    return (
        <div className='mt-5'>
            <button className='btn btn-dark' onClick={logIn} >Login</button>
        </div>
    )
}

export default Login