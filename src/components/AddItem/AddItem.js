import React from 'react';

const AddItem = () => {
    return (

        <form className='min-h-screen bg-gray-100 text-gray-800 antialiased py-1 flex flex-col justify-center sm:py-12'>
            <div className='ralative py-3 sm:w-96 mx-auto '>
                <span className='text-2xl  font-bold mx-8'>Add a Product</span>
                <div className='mt-4 bg-white shadow-md rounded-lg text-left'>
                    <div className='h-2 bg-indigo-400 rounded-t-md'>
                    </div>
                    <div className='px-8 py-6'>
                        <input type="text" placeholder='Enter Product Name' className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' required />
                        <input type="text" placeholder='Enter Supplier Name' className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' required />
                        <input type="number" placeholder='Price' className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' required />
                        <input type="number" placeholder='Quantity' className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' required />
                        <input type="text" placeholder='Enter Photo URL' className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' required />
                        <input type="text" placeholder='Discriptions' className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' required />
                        <input type="email" placeholder='Enter Your Email' className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' required />
                        <button className='border w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-800 mt-2 font-semibold'>Add Item</button>
                    </div>
                </div>
            </div>
        </form>




    );
};

export default AddItem;