import React from 'react';

const ManageItenventoryCard = ({ card }) => {
    const { name, price, image, quantity, dillername, discription } = card;
    return (
        <div>
            <div className='bg-gray-200 ' >
                <div className=' border-solid border-2 border-indigo-200 rounded-lg shadow-xl  m-5  bg-white p-2'>
                    <div className='bg-white text-center mx-auto'>
                        <img className='mx-auto' src={image} alt="" />

                        <h1>Cars Name: {name} </h1>
                        <h2>Price:$ {price}</h2>
                        <p> Quantity: {quantity}</p>
                        <p className='text-semibold'> Diller Name: {dillername}</p>
                        <p className='text-xs'>Discription:{discription}</p>
                        <div>
                            <button className='border w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-800 mt-3 font-semibold'>Delete</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageItenventoryCard;