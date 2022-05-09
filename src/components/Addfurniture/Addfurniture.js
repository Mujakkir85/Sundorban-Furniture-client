import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Addfurniture.css'

const Addfurniture = () => {

    const [user] = useAuthState(auth);

    let senduser = user.email;

    let product_name = useRef('');
    let description = useRef('');
    let price = useRef('');
    let image = useRef('');
    let quantity = useRef('');
    let supplier_name = useRef('');


    const handleAddFurniture = event => {
        event.preventDefault();
        product_name = product_name.current.value;
        description = description.current.value;
        price = price.current.value;
        image = image.current.value;
        quantity = quantity.current.value;
        supplier_name = supplier_name.current.value;


        const newfurniture = { product_name, description, price, image, quantity, supplier_name, senduser };
        console.log(newfurniture);

        fetch('https://fast-crag-11183.herokuapp.com/addfurniture', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newfurniture),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', newfurniture);
                alert('Newfurniture added successfullly!!')
                event.target.reset();
            })
    }

    return (
        <div className='mt-3 d-flex justify-content-center'>
            <form className='w-50 ' onSubmit={handleAddFurniture}>
                <div className="form-floating mb-3">
                    <input ref={product_name} type="text" className="form-control" name="product_name" placeholder="product_name" required />
                    <label>product_name</label>
                </div>
                <div className="form-floating mb-3">
                    <input ref={description} type="text" className="form-control" name="description" placeholder="description" required />
                    <label>description</label>
                </div>
                <div className="form-floating mb-3">
                    <input ref={price} type="text" className="form-control" name="price" placeholder="price" required />
                    <label>price</label>
                </div>
                <div className="form-floating mb-3">
                    <input ref={image} type="text" className="form-control" name="image" placeholder="image" required />
                    <label>image</label>
                </div>
                <div className="form-floating mb-3">
                    <input ref={quantity} type="number" className="form-control" name="quantity" placeholder="quantity" required />
                    <label>quantity</label>
                </div>
                <div className="form-floating">
                    <input ref={supplier_name} type="text" className="form-control" name="supplier_name" placeholder="supplier_name" required />
                    <label>supplier_name</label>
                </div>
                <input className='btn-submit' type="submit" value="Add Furniture" />
            </form>
        </div>
    );
};

export default Addfurniture;