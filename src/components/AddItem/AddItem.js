import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const email = event.target.email.value;
        const discription = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const dillername = event.target.SupplierName.value;


        const item = {
            name, email, discription, price, quantity, dillername, image
        };

        // send data to the server
        fetch('http://localhost:5000/food', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('food successfully added')
                event.target.reset();
            })
    }
    return (
        <form onSubmit={handleAddItem} className='min-h-screen bg-gray-100 text-gray-800 antialiased py-1 flex flex-col justify-center sm:py-12' >
            <div className='ralative py-3 sm:w-96 mx-auto '>
                <span className='text-2xl  font-light mx-8'>Add A Product</span>
                <div className='mt-4 bg-white shadow-md rounded-lg text-left'>
                    <div className='h-2 bg-indigo-400 rounded-t-md'>
                    </div>
                    <div className='px-8 py-6'>

                        <input className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' type="text" name='name' placeholder='Enter Product Name' required /> <br />
                        <input className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' type="text" name='SupplierName' placeholder='Supplier Name' required /> <br />
                        <input className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' type="text" name='price' placeholder='Price' required /> <br />
                        <input className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' type="text" name='quantity' placeholder='Quantity' required /> <br />
                        <input className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' type="text-area" name='description' placeholder='Description' required /> <br />
                        <input className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' type="text" name='image' placeholder='Enter Photo URL' /> <br />
                        <input className='border w-full h-5 px-3 py-3 mt-2 mb-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' type="email" name='email' placeholder='Your Email' value={user?.email} disabled required /> <br />
                        <button className='border w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-800 mt-2 font-semibold'>Add Item</button>

                    </div>
                    <div>

                        <ToastContainer />
                    </div>
                </div>

            </div>
        </form>


    );
};
export default AddItems;