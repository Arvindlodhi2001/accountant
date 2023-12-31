import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <div className='contact1'>
        <div className='image1'></div>
    
      <div className='contact2 mt-5'>
    <h1>Contact Us</h1>
    <p><span>Home</span>/Contact Us</p>
   </div>
</div>
<div className='contact3'>
    <div className='contact3-left'>
        <h2>Send Us a Message</h2>
        <input type="text" placeholder='Name' className='name'/>
        <input type="text" placeholder='Email' className='name' />
        <input type="text" placeholder='Subject' className='subject' />
       <textarea name="" id="" cols="30" rows="5" placeholder='Message' className='message'></textarea>
       <button>SEND MESSAGE</button>
    </div>
    <div className='contact3-right'>
        <h4 className='first'>CONTACT US</h4>
        <h1>Get In Touch!</h1>
        <p>Proin laoreet nisi vitae pharetra mattis, etiam luctus suscipit.  Augue molestie a etiam quis tincidunt est, et efficitur ipsum nunc bibendum ut risus et vehicula proin tempus.</p>
        <div className='d-flex mt-10 flex'>
        <i className="ri-phone-line"></i>
            <div className=' flex flex-col'>
                <h4>Call Us</h4>
                <h5>+123-456-1234</h5>
            </div>
        </div>
        <div className='d-flex flex'>
        <i className="ri-mail-open-line"></i>
           <div className='flex flex-col'>
                <h4>Email Us</h4>
                <h5>hello@awesomesite.com</h5>
                </div>
        </div>
        <div className='d-flex flex'>
        <i className="ri-map-pin-line"></i>
          <div className='flex flex-col'>
                <h4>Office Address</h4>
                <h5>99 Roving St.,Big City,PKU 23465</h5>
                </div>
            </div>
            <div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Contact