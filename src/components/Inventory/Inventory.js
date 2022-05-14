import React from 'react';
import { Link } from 'react-router-dom';
import useCards from '../../hooks/useCards';
import InventoryCard from '../InventoryCard/InventoryCard';

const Inventory = () => {
    const [cards] = useCards([])
    return (
        <div>
            <div className='bg-gray-200 pt-4 py-0'>
                <span className='text-2xl font-bold'>Our Top Cars</span>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 text-gray-800 font-semibold bg-white">
                {
                    cards.map(card => <InventoryCard
                        key={card._id}
                        card={card}


                    ></InventoryCard>
                    )
                }

            </div>
            <div className='bg-black pb-4'>
                <Link to='/manageInventory'>  <button className='mt-4 bg-indigo-500 text-white  py-1 px-6 rounded-md hover:bg-indigo-600' type='submit'>Manage Inventory</button></Link>
            </div>
            <hr />

        </div>
    );
};

export default Inventory;