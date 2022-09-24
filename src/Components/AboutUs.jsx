import React from 'react'
import '../About.css'
function AboutUs() {
    return (
        <>
            {/* <div>
                <hr />
                <center><h2 className='ourPrdt'>About Us</h2></center>
                <hr />
            </div> */}
            <div className="container aboutUs">
                <div className="row">
                    <div className="col-md ">
                        <h5 className='abtus'>We, Kaushal Kisan Bio Planttec Private Limited, situated at Bhopal - MP,
                            aim to promote environmental sustainability and make our country pollution-free and
                            encourage our customers to purchase more plants to be one with nature.</h5>
                        <center><button type="button" class="btn btn-secondary abtus" style={{marginBottom:'10px'}}><i class="bi bi-plus-lg"></i>Read More...</button></center>
                    </div>
                </div>
                <div className="row abtus">
                    <div className="col-md-4">
                        <div id="icon2">
                            <a class="btn1" style={{textDecoration:'none'}}><span><i class="bi bi-building icon1" style={{color:'white'}}></i></span></a>
                            <h5 className='clsh5'>Our Company</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div id="icon2">
                            <a class="btn1" style={{textDecoration:'none'}}><span><i class="bi bi-people-fill icon2" style={{color:'white'}}></i></span></a>
                            <h5 className='clsh5'>Our Employees</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div id="icon2">
                            <a class="btn1" style={{textDecoration:'none'}}><span><i class="bi bi-bank2 icon3" style={{color:'white'}}></i></span></a>
                            <h5 className='clsh5'>Nature Of Business</h5>
                        </div>
                    </div>
                </div>
                <div className="row abtus">
                    <div className="col-md">
                        <div className="contact">
                            <h4 className=''>Get in touch with us for best deals</h4>
                            <button type="button" class="btn btn-secondary">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs