import React from 'react';
import useCards from '../../hooks/useCards';
import Card from '../Card/Card';

const Inventory = () => {
    const [cards] = useCards([])
    return (
        <div>
            <div className='bg-gray-200 pt-4 py-0'>
                <span className='text-2xl font-bold'>Our Top Cars</span>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 text-gray-800 font-semibold bg-white">
                {
                    cards.map(card => <Card
                        key={card.id}
                        card={card}


                    ></Card>
                    )
                }
            </div>
        </div>
    );
};

export default Inventory;