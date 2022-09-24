import React from 'react'

function ContactUs() {
    return (
        <div className='container contactFrm1' style={{color:'white'}}>
            <div className="row">
                <div className="col-md-6 contactFrm">
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
                        <h5>Mob:<a href="tel:08046087635" style={{textDecoration:'none',color:'white'}}>08046087635</a></h5>
                    </div>
                </div>
                <div className="col-md-6"  style={{color:'black',padding:'20px'}}>
                    <h3>Contact Us</h3>
                    <form action="" className='form2'>
                        <label htmlFor="">Your Mobile Number</label>
                        <input type="text" placeholder='Enter your number' />
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder='Enter your name' />
                        <label htmlFor="">Your Message</label>
                        <textarea name="" id="" style={{height:'100px'}} placeholder='Write your message here' cols="30" rows="10"></textarea>
                        <center><button type="button" style={{width:'130px',margin:'15px'}} class="btn btn-success">Submit</button>
                        </center>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs