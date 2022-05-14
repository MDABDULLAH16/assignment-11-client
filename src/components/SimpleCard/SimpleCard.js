import React from 'react';

const SimpleCard = () => {
    return (
        <div>
            <div className=' bg-gray-200 py-4 '>
                <span className='text-2xl font-bold'>Vegetable Simple</span>
            </div>
            <div className='grid grid-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center'>
                <div>
                    <img className=' shadow-lg p-4' src="https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
                <div>
                    <p className='text-justify font-semibold p-4'>Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds. Hare, we collect out fresh Vegetable on the field from the Farmer. This is my bussiness. the real fermer create the vegetable with his hard work. we never use any formaline on the vegetable. this is fresh and orginal food and vegetable store. What are 10 examples of vegetables?
                        Types of vegetables:
                        Leafy green: lettuce, spinach and silverbeet.
                        Cruciferous- cabbage, cauliflower, Brussels sprouts and broccoli.
                        Marrow - pumpkin, cucumber and zucchini.
                        Root - potato, sweet potato and yam.
                        Edible plant stem - celery and asparagus.
                        Allium - onion, garlic and shallot.</p>
                </div>
            </div>
        </div>
    );
};

export default SimpleCard;