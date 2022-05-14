import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import SimpleCard from '../SimpleCard/SimpleCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <SimpleCard></SimpleCard>
            <div className='bg-black pb-4'>
                <Link to='/manageInventory'><button className='mt-4 bg-indigo-500 text-white  py-1 px-6 rounded-md hover:bg-indigo-600' type='submit'>Manage Inventory</button></Link>
            </div>
            <hr />


        </div>
    );
};

export default Home;