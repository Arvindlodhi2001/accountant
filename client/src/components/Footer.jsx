import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div id="footer" className="bg-[#0d536a]">
        <div className="footercenter">
          <div className="fcp1">
            <h1>LOGO</h1>
            <p>
              Donec neque massa, faucibus nec lorem vitae feugiat pharetra sem.
              Nulla elementum eget lectus dapibus amatug mix finibus.
            </p>
            <div className="navlogo w-40">
                    <div className="logo h-8 w-8 bg-[#006f93]"><i className=" text-white ri-facebook-circle-fill"></i></div>
                    <div className="logo h-8 w-8 bg-[#006f93]"><i className="ri-twitter-fill"></i></div>
                    <div className="logo h-8 w-8 bg-[#006f93]"><i className="ri-instagram-fill"></i></div>
                    <div className="logo h-8 w-8 bg-[#006f93]"><i className="ri-youtube-fill"></i></div>
                </div>
          </div>
          <div className="fcp2">
            <h1>Quick Links</h1>
                <ul>
                    <li> <a href="/">Home</a> </li>
                    <li> <a href="/">About Us</a> </li>
                    <li> <a href="/">Services</a> </li>
                    <li> <a href="/">Cases</a> </li>
                    <li> <a href="/">Pricing</a> </li>
                    <li> <a href="/">FAQ's</a> </li>
                    <li> <a href="/">Contact</a> </li>
                </ul>
          </div>
          <div className="fcp3">
          <h1>Services</h1>
                <ul>
                    <li> <a href="/">Bookkeeping</a> </li>
                    <li> <a href="/">Payroll Services</a> </li>
                    <li> <a href="/">Tax Planning </a> </li>
                    <li> <a href="/">Audit & Assurance </a> </li>
                    <li> <a href="/">Financial Statement </a> </li>
                    <li> <a href="/">Tech Consulting</a> </li>
                    <li> <a href="/">Business Advisory</a> </li>
                    <li> <a href="/">Outsourced CFO</a> </li>
                </ul>
          </div>
          <div className="fcp4">
            <h1>Information</h1>
            <div className="fcp4d">
            <i className="ri-phone-line"></i>
            <div className="txtf4">
                <h2>Phone</h2>
                <h3>+91 000-00-00000</h3>
            </div>
            </div>
            <div className="fcp4d">
            <i className="ri-mail-check-line"></i>
            <div className="txtf4">
                <h2>Email</h2>
                <h3>email@gmail.com</h3>
            </div>
            </div>
            <div className="fcp4d">
            <i className="ri-map-pin-line"></i>
            <div className="txtf4">
                <h2>Address</h2>
                <h3>99 Roving St., Big City, PKU 23456</h3>
            </div>
            </div>
          </div>
        </div>
            <h3>Copyright 2023 © All Right Reserved Design by Rometheme</h3>
      </div>
    </>
  );
};

export default Footer;
