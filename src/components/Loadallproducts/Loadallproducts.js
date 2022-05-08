import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Loadallproducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const homeproduct = products.slice(0, 6);

    console.log(homeproduct)
    return (
        <div className='row row-cols-1 row-cols-md-3 d-flex justify-content-center'>

            {
                homeproduct?.map(product => <Inventory
                    key={product._id}
                    product={product}></Inventory>)
            }

        </div>
    );
};

export default Loadallproducts;