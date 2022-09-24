import React from 'react'

function Footer() {
    return (
        <div className='container footer1'>
            <div className="row footer2">
                <div className="col-md-4">
                    <h4>Anam Charity Bio Planttec Pvt Ltd</h4>
                    <hr />
                    <p>Home</p>
                    <p>Our Products</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
                <div className="col-md-4">
                    <h4>Products</h4>
                    <hr />
                    <p>Timber Plant</p>
                    <p>Tissue Culture Plant</p>
                    <p>Fruit Plant</p>
                    <p>Fruit Plant</p>
                </div>
                <div className="col-md-4">
                    <h4>Contact Us</h4>
                    <hr />
                    <div className='mail'>
                        <p><i className="bi bi-house-door-fill"></i>Saket Nagar, Ward No. 57, Teh. Hujur, Bhopal - 462026, Madhya Pradesh, India</p>
                        <p><i className="bi bi-envelope-fill"></i>anamcharity.info@gmail.com</p>
                        <p><i className="bi bi-phone-fill"></i><a href="tel:08046087635">08046087635</a></p>
                    </div>
                </div>
            </div>
            <div className="row footer3">
                <div className="col-md">
                    <p>©2022 Copyright: Anam Charity Bio Planttec Pvt Ltd</p>
                </div>
            </div>
        </div>
    )
}

export default Footer