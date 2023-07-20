import React from 'react'
import './nav.css'
import 'remixicon/fonts/remixicon.css'
import { Link } from "react-router-dom";

const Nav = () => {
    function myFunction() {
        // Get the checkbox
        var checkBox = document.getElementById("menu-btn");
        // Get the output text
        var text = document.getElementById("text");
      
        // If the checkbox is checked, display the output text
        if (checkBox.checked == true){
          text.style.display = "block";
        } else {
          text.style.display = "none";
        }
      };
  return (
    <>
    <div id="Nav">
        <div className="nav1">
            <div className="cnav1 h-20">
                <div><h4><i className=" text-[#006f93] mr-2 ri-map-pin-line"></i>99 Roving St, Big City PUK 462022</h4></div>
                <h4><i className=" text-[#006f93] mr-2 ri-mail-send-line"></i>hello@gmail.com</h4>
                <div className="navlogo w-40">
                    <div className="logo h-8 w-8 bg-[#006f93]"><i className=" text-white ri-facebook-circle-fill"></i></div>
                    <div className="logo h-8 w-8 bg-[#006f93]"><i className="ri-twitter-fill"></i></div>
                    <div className="logo h-8 w-8 bg-[#006f93]"><i className="ri-instagram-fill"></i></div>
                    <div className="logo h-8 w-8 bg-[#006f93]"><i className="ri-youtube-fill"></i></div>
                </div>
            </div>
        </div>
        <div className="nav2">
            <div className="cnav2 flex ">
                <h1>logo</h1>
                <div className="cnp1 w-[200%] justify-around ">
                    <Link to="/">Home</Link>
                    <Link to="about">About Us</Link>
                    <Link to="service">Services</Link>
                    <Link to="studio">Cases</Link>
                    <Link to="blog">Blog</Link>
                    <Link to="contact">Contact Us</Link>
                     
                </div>
                <div className="cnp2  ml-6 flex flex-row w-full">
                <i className="text-sm ri-phone-line"></i>
                <div className="w-full flex">
                    <a><h1 className='m-0 hidden md:flex p-0 w-full'>Call Us +91 000-00-00000</h1></a>
                    
                </div>
                <input type='checkbox' className='h-2 hidden w-2' id='menu-btn' />
                <label className='flex md:hidden' htmlFor='menu-btn'>Menu</label>
                </div>
            </div>
        </div>
    </div>  
    </>
  )
}

export default Nav