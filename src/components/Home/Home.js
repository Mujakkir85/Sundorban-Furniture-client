import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Loadallproducts from '../Loadallproducts/Loadallproducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Loadallproducts></Loadallproducts>
            {/* <Inventory></Inventory> */}
        </div>
    );
};

export default Home;