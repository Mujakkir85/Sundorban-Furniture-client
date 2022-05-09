import React from 'react';
import { Card } from 'react-bootstrap';

const Chairs = () => {
    return (
        <div className='row row-cols-1 row-cols-md-1 d-flex justify-content-center'>
            <Card className='col gy-5 cardclass' >
                <Card.Img variant="top" src={ex1} />
                <Card.Body>
                    <Card.Title>Service Title: Leather Sofa </Card.Title>
                    <Card.Title>Price: $300000 </Card.Title>
                    <Card.Title>Quantity: 10</Card.Title>
                    <Card.Title>Supplier: Otobi</Card.Title>
                    <Card.Text></Card.Text>
                </Card.Body>
            </Card>
            <Card className='col gy-5 cardclass' >
                <Card.Img variant="top" src={ex2} />
                <Card.Body>
                    <Card.Title>Service Title: White Sofa </Card.Title>
                    <Card.Title>Price:$500000 </Card.Title>
                    <Card.Title>Quantity: 20</Card.Title>
                    <Card.Title>Supplier: Otobi </Card.Title>
                    <Card.Text></Card.Text>
                </Card.Body>
            </Card>
            <Card className='col gy-5 cardclass' >
                <Card.Img variant="top" src={ex3} />
                <Card.Body>
                    <Card.Title>Service Title: Brown Sofa</Card.Title>
                    <Card.Title>Price: $70000</Card.Title>
                    <Card.Title>Quantity:15 </Card.Title>
                    <Card.Title>Supplier: Otobi </Card.Title>
                    <Card.Text></Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chairs;