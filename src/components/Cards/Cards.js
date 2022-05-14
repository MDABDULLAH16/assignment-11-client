import useCards from '../../hooks/useCards';
import Card from '../Card/Card';

const Cards = () => {
    const [cards] = useCards([]);

    return (
        <div>
            <div className=' bg-gray-200 py-4 '>
                <span className='text-2xl font-bold'>Foods Simple</span>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 text-gray-800 font-semibold bg-white">
                {
                    cards?.slice(0, 6).map(card => <Card
                        key={card._id}
                        card={card}


                    ></Card>
                    )
                }


            </div>
        </div>
    );
};

export default Cards;