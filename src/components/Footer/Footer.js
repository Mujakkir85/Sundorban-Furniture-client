import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <footer className="mt-5 pt-5 pb-2 footer ">
            <div className="container mx-auto">
                <div className="row mx-auto">
                    <div className="col-md-4 col-xs-12">
                        <h2>Abute US</h2>
                        <p className="pr-2 text-white-100"> Sundorban Furniture® is a fully integrated manufacturer concentrating on four key segments of the contract market—Healthcare, Education, Corporate and Government.

                            Established in 1991 out of a desire to bring a uniquely customer-oriented approach to the contract marketplace, we design durable, elegant furniture that excels at meeting all core requirements. Combined with a huge array of options, choices, price points, and scales, our customers can specify the best possible solution.</p>
                    </div>
                    <div className="col-lg-3 col-xs-12 ms-5">
                        <h4 className="mt-lg-0 mt-2">We Have Best</h4>
                        <ul className="m-0 p-0">
                            <li>Beds</li>
                            <li>Chairs and Seating</li>
                            <li>Chests</li>
                            <li>Tables</li>
                            <li>Couch</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-xs-12 ">
                        <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                        <p>54, Mirabazar ,Sundorban Furniture</p>
                        <p className="mb-0">(111) 554-5560</p>
                        <p>Sundorban@gmail.com</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col copyright">
                        <p className="text-center"><small className="text-white-100">© 2022. All Rights Reserved.</small></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;