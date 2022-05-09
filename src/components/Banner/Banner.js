import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/lbg-1.jpg';
import banner2 from '../../images/lbg-3.jpg'
import banner3 from '../../images/login-image2.webp'

const Banner = () => {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Best and Most Comfortable Couches and Sofas</h3>
                    <p>While there are thousands of choices to shop online, finding your exact match is a lot easier said than done.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Best and Most Comfortable Couches and Sofas</h3>
                    <p>While there are thousands of choices to shop online, finding your exact match is a lot easier said than done.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Best and Most Comfortable Couches and Sofas</h3>
                    <p>While there are thousands of choices to shop online, finding your exact match is a lot easier said than done.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;