import React, { useEffect, useState } from 'react';
import Allinvnetrory from '../Allinvnetrory/Allinvnetrory';
import './Managefurniture.css'

const Managefurniture = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='row row-cols-1 row-cols-md-3 d-flex justify-content-center'>

            {
                products?.map(product => <Allinvnetrory
                    key={product._id}
                    product={product}></Allinvnetrory>)
            }

        </div>
    );
};

export default Managefurniture;