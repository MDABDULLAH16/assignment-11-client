
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';





const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/home')

    }
    const handleCreate = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your password does not match')
            return;
        }
        if (password.length > 6) {
            setError('Password must be longer less then 6 digit')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <form onSubmit={handleCreate} >
            <div className='min-h-screen bg-gray-100 text-gray-800 antialiased py-1 flex flex-col justify-center sm:py-12'>
                <div className='ralative py-3 sm:w-96 mx-auto '>
                    <span className='text-2xl  font-light mx-8'>Sign up</span>
                    <div className='mt-4 bg-white shadow-md rounded-lg text-left'>
                        <div className='h-2 bg-indigo-400 rounded-t-md'>
                        </div>
                        <div className='px-8 py-6'>
                            <label className='block font-semibold'>Email</label>
                            <input onBlur={handleEmail} type="text" placeholder='Email' className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' required />
                            <label className='block font-semibold'>Password</label>
                            <input onBlur={handlePassword} type="password" placeholder='Password' className='border w-full h-5 px-3 py-3 mt-2 mb-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' required />
                            <label className='block font-semibold'>Confirm Password</label>
                            <input onBlur={handleConfirmPassword} type="password" placeholder='Confirm Password' className='border w-full h-5 px-3 py-3 mt-2 mb-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' required />
                            <p>{error}</p>
                            <div className='flex justify-between items-baseline'>
                                <button className='mt-4 bg-indigo-500 text-white  py-1 px-6 rounded-md hover:bg-indigo-600' type='submit'>SignUp</button>
                                <Link to='/login' className='mx-3' ><small >Already have a Account?</small><small className='text-sm hover:underline px-2' >Sign In</small></Link>
                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </form>
    );
};

export default SignUp;