
import React, { useState } from 'react';

const InventoryCard = ({ card }) => {
    const { name, price, dillername, quantity, image, discription } = card;
    const [count, setCount] = useState([quantity])


    const handleDelivared = () => {
        const newCount = count - 1;
        setCount(newCount);

    }
    const addItem = (event) => {
        const newCount = quantity + parseInt(event.target.value);
        const amount = newCount;

        setCount(amount)
        event.target.value = '';

    }

    const handleAddItem = (event) => {

        event.preventDefault();






    }





    return (
        <div className='bg-gray-200 ' >
            <div className=' border-solid border-2 border-indigo-200 rounded-lg shadow-xl  m-5  bg-white p-2'>
                <div className='bg-white text-center mx-auto'>
                    <img className='mx-auto' src={image} alt="" />

                    <h1>Cars Name: {name} </h1>
                    <h2>Price:$ {price}</h2>
                    <p> Quantity: {count}</p>
                    <p className='text-semibold'> Diller Name: {dillername}</p>
                    <p className='text-xs'>Discription:{discription}</p>
                    <div>
                        <button onClick={handleDelivared} className='border w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-800 mt-3 font-semibold'>Delivared</button>
                    </div>
                    <div>
                        <form onSubmit={handleAddItem} >
                            <input onBlur={addItem} type="number" placeholder='Add Item' className='border w-full h-5 px-3 py-3 mt-2 mb-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' />
                            <button className='mt-4 bg-indigo-500 text-white  py-1 px-6 rounded-md hover:bg-indigo-600' type='submit'>Add Item</button>

                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default InventoryCard;