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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;