import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Mycollections = () => {
    const [products, setProducts] = useState([])
    //let navigate = useNavigate()
    //console.log(navigate)
    useEffect(() => {
        fetch('http://localhost:5000/mycollections')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>From mycollections {products.length}</h1>
        </div>
    );
};

export default Mycollections;