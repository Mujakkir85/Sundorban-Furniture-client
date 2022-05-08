import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Inventroy.css'

const Inventory = (props) => {
    const { _id, product_name, description, price, quantity, supplier_name, image } = props.product
    // console.log(props);
    // console.log(props?.product)
    let navigate = useNavigate()

    const handleInventroy = () => {
        navigate(`/inventory/${_id}`)
    }
    return (
        <Card className='col gy-5 cardclass' >
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Service Title: {product_name}</Card.Title>
                <Card.Title>Price: {price}</Card.Title>
                <Card.Title>Quantity: {quantity}</Card.Title>
                <Card.Title>Supplier: {supplier_name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button onClick={() => handleInventroy(_id)} variant="primary">Manage</Button>
            </Card.Body>

        </Card>
    );
};

export default Inventory;