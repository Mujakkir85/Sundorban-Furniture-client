import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Allinvnetrory from '../Allinvnetrory/Allinvnetrory';
import './Managefurniture.css'

const Managefurniture = () => {
    const [products, setProducts] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
        fetch('https://fast-crag-11183.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddFurniture = () => {
        navigate(`/addfurniture`)
    }

    return (
        <div>
            <div className='row row-cols-1 row-cols-md-3 d-flex justify-content-center'>

                {
                    products?.map(product => <Allinvnetrory
                        key={product._id}
                        product={product}></Allinvnetrory>)
                }

            </div>


            <div className='d-flex justify-content-center mt-3'>
                <button onClick={handleAddFurniture} type="button" className="btn btn-primary w-50 ">Add more Furniture</button>
            </div>


        </div>
    );
};

export default Managefurniture;