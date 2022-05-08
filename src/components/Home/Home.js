import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
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
                <button onClick={handleManageInventroy} type="button" className="btn btn-primary ">Manage Inventories</button>
            </div>
        </div>
    );
};
export default Home;