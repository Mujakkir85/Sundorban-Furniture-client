import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Chairs from '../Chairs/Chairs';
import Expensive from '../Expensive/Expensive';
import Inventory from '../Inventory/Inventory';
import Loadallproducts from '../Loadallproducts/Loadallproducts';

const Home = () => {
    let navigate = useNavigate()

    const handleManageInventroy = () => {
        navigate(`/managefurniture`)
    }
    return (
        <div>
            <Banner></Banner>
            <Loadallproducts></Loadallproducts>
            {/* <Inventory></Inventory> */}
            <div className='d-flex justify-content-center mt-3'>
                <button onClick={handleManageInventroy} type="button" className="btn btn-primary w-50">Manage Inventories</button>
            </div>

            <div className='d-flex justify-content-center mt-3'>
                <h2 className="text-primary ">Expensive items</h2>
            </div>
            <Expensive></Expensive>


            <div className='d-flex justify-content-center mt-3'>
                <h2 className="text-primary ">Best Chairs</h2>
            </div>

            <Chairs></Chairs>

        </div>
    );
};
export default Home;