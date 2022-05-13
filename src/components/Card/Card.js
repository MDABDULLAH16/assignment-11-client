import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {

    const { name, price, dillername, quantity, image, discription } = card;
    return (
        <div className='bg-gray-200 ' >
            <div className=' border-solid border-2 border-indigo-200 rounded-lg shadow-xl  m-5  bg-white p-2'>
                <div className='bg-white text-center'>
                    <img className='mx-auto' src={image} alt="" />
                    <h1>Cars Name: {name} </h1>
                    <h2>Price:$ {price}</h2>
                    <p> Quantity: {quantity}</p>
                    <p className='text-semibold'> Diller Name: {dillername}</p>
                    <p className='text-xs'>Discription:{discription}</p>
                    <div>
                        <Link to='/inventory' ><button className='border w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-800 mt-3 font-semibold'>Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Card;