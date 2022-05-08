import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Inventroy.css'

const Inventory = (props) => {
    const { _id, product_name, description, price, quantity, supplier_name, image } = props.product
    // console.log(props);
    // console.log(props?.product)
    return (
        <Card className='col gy-5 cardclass' >
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Service Title: {product_name}</Card.Title>
                <Card.Title>Price: ${price}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>

        </Card>
    );
};

export default Inventory;