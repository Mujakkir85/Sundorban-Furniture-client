import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Mycollections = () => {
    // const [products, setProducts] = useState([])
    //const [user] = useAuthState(auth);
    //let navigate = useNavigate()
    //console.log(navigate)
    // useEffect(() => {
    //     fetch('https://fast-crag-11183.herokuapp.com/mycollections')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    // useEffect(() => {
    //     fetch(`https://fast-crag-11183.herokuapp.com/mycollections`, {
    //         headers: {
    //             'authorization': `${user?.email} `,
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    return (
        <div>
            {/* <h1>From mycollections {products.length}</h1> */}
        </div>
    );
};

export default Mycollections;