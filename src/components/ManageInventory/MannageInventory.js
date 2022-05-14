import React from 'react';
import useCards from '../../hooks/useCards';
import ManageItenventoryCard from '../ManageInvetoryCard/ManageItenventoryCard';

const MannageInventory = () => {
    const [cards] = useCards([])
    return (
        <div>
            <div className='bg-gray-200 pt-4 py-0'>
                <span className='text-2xl font-bold'>All Item Is Hare!</span>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 text-gray-800 font-semibold bg-white">
                {
                    cards.map(card => <ManageItenventoryCard
                        key={card._id}
                        card={card}


                    ></ManageItenventoryCard>
                    )
                }
            </div>

        </div>
    );
};
export default MannageInventory;