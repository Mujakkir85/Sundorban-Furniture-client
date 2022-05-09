import React from 'react';
import { Card } from 'react-bootstrap';
import ch1 from '../../images/ch1.webp'
import ch2 from '../../images/ch2.webp'
import ch3 from '../../images/ch3.webp'
const Chairs = () => {
    return (
        <div className='row row-cols-1 row-cols-md-1 d-flex justify-content-center'>
            <Card className='col gy-5 cardclass' >
                <Card.Img variant="top" src={ch1} />
                <Card.Body>
                    <Card.Title>Service Title: Red   </Card.Title>
                    <Card.Title>Price: $3000 </Card.Title>
                    <Card.Title>Quantity: 06</Card.Title>
                    <Card.Title>Supplier: Otobi</Card.Title>
                    <Card.Text></Card.Text>
                </Card.Body>
            </Card>
            <Card className='col gy-5 cardclass' >
                <Card.Img variant="top" src={ch2} />
                <Card.Body>
                    <Card.Title>Service Title: White Chair </Card.Title>
                    <Card.Title>Price:$5000 </Card.Title>
                    <Card.Title>Quantity: 20</Card.Title>
                    <Card.Title>Supplier: Pitto </Card.Title>
                    <Card.Text></Card.Text>
                </Card.Body>
            </Card>
            <Card className='col gy-5 cardclass' >
                <Card.Img variant="top" src={ch3} />
                <Card.Body>
                    <Card.Title>Service Title: Unique White Chiar</Card.Title>
                    <Card.Title>Price: $17000</Card.Title>
                    <Card.Title>Quantity:9 </Card.Title>
                    <Card.Title>Supplier: Pitto </Card.Title>
                    <Card.Text></Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chairs;