import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navber = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    const [open, setOpen] = useState(false);
    return (
        <div className='bg-indigo-700'>

            <div onClick={() => setOpen(!open)} className=' md:hidden w-6 h-6 '>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}

            </div>
            <nav className={`bg-indigo-700 w-full md:flex justify-around  font-semibold text-white absolute md:static duration-500 ease-in ${open ? 'top-6' : 'bottom-80'}`}>
                <div>
                    <h1 className='md:mx-auto text-xl md:my-3' >Auto Drive</h1>
                </div>
                <div className='p-3 md:flex items-end justify-center   '>
                    <CustomLink className=' m-2' to='/' >Home</CustomLink>
                    <CustomLink className=' m-2' to='/inventory' >Inventory</CustomLink>
                    <CustomLink className='m-2' to='/blogs'>Blog</CustomLink>


                    {
                        user ? <>
                            <CustomLink className='m-2' to='/manageInventory'>Manage Invetory</CustomLink>
                            <CustomLink className='m-2' to='/myItem'>My Item</CustomLink>

                            <button className='font-semibold' onClick={handleSignOut} >LogOut</button>

                        </> :
                            <CustomLink className=' m-4' to='/login' >Login</CustomLink>}


                </div>


            </nav>
        </div>
    );
};

export default Navber;