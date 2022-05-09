import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Allinvnetrory = (props) => {
    const { _id, product_name, description, price, quantity, supplier_name, image } = props.product


    const DeleteInventroy = () => {

    }



    return (


        <Card className='col gy-5 cardclass' >
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title> Title: {product_name}</Card.Title>
                <Card.Title>Price: {price}</Card.Title>
                <Card.Title>Quantity: {quantity}</Card.Title>
                <Card.Title>Supplier: {supplier_name}</Card.Title>
                {/* <Card.Text>{description}</Card.Text> */}
                <Button onClick={() => DeleteInventroy(_id)} variant="primary">Delete</Button>
            </Card.Body>
        </Card>



    );
};

export default Allinvnetrory;