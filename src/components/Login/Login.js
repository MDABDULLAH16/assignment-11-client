
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import SignInButton from '../SignInButton/SignInButton';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword,
        user,
        loading,
        error,] = useSignInWithEmailAndPassword(auth)

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleEmail = event => {
        setEmail(event.target.value);

    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    return (
        <form onSubmit={handleUserSignIn} className='min-h-screen bg-gray-100 text-gray-800 antialiased py-1 flex flex-col justify-center sm:py-12'>
            <div className='ralative py-3 sm:w-96 mx-auto '>
                <span className='text-2xl  font-light mx-8'>Login Your Account</span>
                <div className='mt-4 bg-white shadow-md rounded-lg text-left'>
                    <div className='h-2 bg-indigo-400 rounded-t-md'>
                    </div>
                    <div className='px-8 py-6'>
                        <label className='block font-semibold'>Username or Email</label>
                        <input onBlur={handleEmail} type="text" placeholder='Email' className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' required />
                        <label className='block font-semibold'>Password</label>
                        <input onBlur={handlePassword} type="password" placeholder='Password' className='border w-full h-5 px-3 py-3 mt-2 mb-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' required />
                        <p>{error?.message}</p>
                        {
                            loading && <p>Looding...</p>
                        }

                        <div className='flex justify-between items-baseline'>
                            {/* <button type='submit' className='mt-4 bg-indigo-500 text-white  py-1 px-6 rounded-md hover:bg-indigo-600'>Login</button> */}
                            <button className='mt-4 bg-indigo-500 text-white  py-1 px-6 rounded-md hover:bg-indigo-600' type='submit'>LogIn</button>

                            <Link to='/signup' className='mx-3' ><small >Don't have a Account?</small><small className='text-sm hover:underline px-2' >SignUP</small></Link>
                        </div>
                        <div>
                            <SignInButton></SignInButton>
                        </div>

                    </div>

                </div>

            </div>

        </form>
    );
};

export default Login;