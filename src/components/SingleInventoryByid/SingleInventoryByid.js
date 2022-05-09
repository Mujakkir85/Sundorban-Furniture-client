import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleInventoryByid = () => {
    const { id } = useParams();

    const [singleInventorydetails, setSingleInventorydetails] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setSingleInventorydetails(data))
    }, [])
    console.log(singleInventorydetails);

    // handleDelivered
    const handleDelivered = evnet => {

        const quantity = singleInventorydetails.quantity;

        console.log(quantity)

        if (quantity > 0) {
            singleInventorydetails.quantity = singleInventorydetails.quantity - 1
            setSingleInventorydetails({ ...singleInventorydetails })

        }
        const quantitys = singleInventorydetails.quantity;

        console.log(quantitys)

        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quantitys })
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    //restock quantity
    const restock = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;

        const updateQuantity = { quantity };

        singleInventorydetails.quantity = quantity;
        setSingleInventorydetails({ ...singleInventorydetails })

        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateQuantity),
        })
            .then(response => response.json())
            .then(data => {
                //console.log('Success:', updateQuantity);
                // alert('restock quantity successfullly!!')
                event.target.reset();
            })
    }


    return (
        <div className='row row-cols-1 row-cols-md-1 d-flex justify-content-center'>
            <Card className='col gy-5 cardclass' >
                <Card.Img variant="top" src={singleInventorydetails.image} />
                <Card.Body>
                    <Card.Title>Service Title: {singleInventorydetails.product_name}</Card.Title>
                    <Card.Title>Price: {singleInventorydetails.price}</Card.Title>
                    <Card.Title>Quantity: {singleInventorydetails.quantity}</Card.Title>
                    <Card.Title>Supplier: {singleInventorydetails.supplier_name}</Card.Title>
                    <Card.Text>{singleInventorydetails.description}</Card.Text>
                    <Button onClick={handleDelivered} variant="primary">Delivered</Button>

                </Card.Body>
            </Card>
            <form className=' d-flex justify-content-center' onSubmit={restock}>
                <div className="mb-3 w-25 ">
                    <label className="form-label mt-3">Add Quantity</label>
                    <input type="text" name='quantity' className="form-control" />
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SingleInventoryByid;