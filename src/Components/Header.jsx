import React from 'react'
import '../App.css'
import logo from '../images/Hd/logo.png'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white sticky-top" style={{ boxShadow: '0px 2px 8px 6px', opacity: '0.9', borderRadius: '2px' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ float: 'left' }}>
                        <img src={logo} style={{ height: '50px', width: '50px' }} alt="NA" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ paddingLeft: '150px' }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link hvr-fade" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link hvr-fade" aria-current="page">Our Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link hvr-fade" aria-current="page">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link hvr-fade" aria-current="page">Contact Us</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" style={{ paddingRight: '20px' }}>
                            <button type="button" class="btn btn-secondary">
                                <i className="bi bi-telephone-fill"></i>
                                <span data-bs-toggle="modal" data-bs-target="#exampleModal">Contact Us</span>
                            </button>
                            <div className="vr" style={{ margin: "4px" }}></div>
                            <button type="button" class="btn btn-success">
                                <i className="bi bi-envelope-fill" style={{ color: "white" }}></i>
                                <span data-bs-toggle="modal" data-bs-target="#exampleModal">Send Enquiry</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="modal fade" id="exampleModal" tabindex="-1" style={{ opacity: 'unset ! important' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Contact Us</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='container' style={{ color: 'white',height:'fit-content'}}>
                                <div className="row">
                                    <div className="col-md-6 modal1" style={{backgroundColor:'#1F965F'}}>
                                        <h4>Anam Charity Bio Planttec Pvt Ltd</h4>
                                        <hr />
                                        <div className="col">
                                            <h4><i class="bi bi-person-circle"></i>Contact Person</h4>
                                            <h5>Anam | Manager</h5>
                                        </div>
                                        <div className="col">

                                            <h4><i class="bi bi-geo-alt"></i>Address</h4>
                                            <h5>Saket Nagar, Ward No. 57, Teh. Hujur, Bhopal - 462026, Madhya Pradesh, India</h5>
                                        </div>
                                        <div className="col">
                                            <h4><i class="bi bi-telephone"></i>Contact</h4>
                                            <h5>Mob:<a href="tel:08046087635" style={{ textDecoration: 'none', color: 'white' }}>08046087635</a></h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6" style={{ color: 'black', padding: '20px' }}>
                                        <h3>Contact Us</h3>
                                        <form action="" className='form2'>
                                            <label htmlFor="">Your Mobile Number</label>
                                            <input type="text" placeholder='Enter your number' />
                                            <label htmlFor="">Your Name</label>
                                            <input type="text" placeholder='Enter your name' />
                                            <label htmlFor="">Your Message</label>
                                            <textarea name="" id="" style={{ height: '100px' }} placeholder='Write your message here' cols="30" rows="10"></textarea>
                                            <center><button type="button" style={{ width: '130px', margin: '15px' }} class="btn btn-success">Submit</button>
                                            </center>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header