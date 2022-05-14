import React from 'react';
import useCards from '../../hooks/useCards';

const MyItem = () => {
    const [cards, setCards] = useCards([])



    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure ?', id)
        if (proceed) {
            console.log('delete id', id);
            const url = `http://localhost:5000/food/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    const remaining = cards.filter(card => card._id !== id)

                    setCards(remaining);
                })

        }

    }
    return (
        <div className=' min-h-screen '>
            <div className=' bg-gray-200 py-4 '>
                <span className='text-2xl font-bold'>My Item!</span>
            </div>
            <div className="grid md:grid-cols-3  sm:grid-cols-1 text-gray-800 font-semibold min-h-screen w-fit bg-white">
                {
                    cards?.slice(8, 100).map(card => <div
                        key={card._id}
                        card={card} >
                        <div>
                            <div className=' ' >
                                <div className=' border-solid border-2 border-indigo-200 rounded-lg shadow-xl  m-5  bg-white p-2'>
                                    <div className='bg-white text-center mx-auto'>
                                        <img className='mx-auto' src={card.image} alt="" />

                                        <h1>Cars Name: {card.name} </h1>
                                        <h2>Price:$ {card.price}</h2>
                                        <p> Quantity: {card.quantity}</p>
                                        <p className='text-semibold'> Supplier Name: {card.dillername}</p>
                                        <p className='text-xs'>Discription:{card.discription}</p>
                                        <button onClick={() => handleDelete(card._id)} className='border w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-800 mt-3 font-semibold'>Delete</button>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    )
                }

            </div>



        </div>
    );
};
export default MyItem;