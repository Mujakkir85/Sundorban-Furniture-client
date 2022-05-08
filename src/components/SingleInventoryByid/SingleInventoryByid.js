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
                    <Button variant="primary">Deleverd</Button>
                    {/* onClick={() => handleInventroy(_id)} */}
                </Card.Body>

            </Card>
        </div>
    );
};

export default SingleInventoryByid;