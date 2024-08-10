import React from 'react'

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaGlobe,
  } from "react-icons/fa";

import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="quick-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Admissions</a></li>
          <li><a href="#">Hostel Facilities</a></li>
          <li><a href="#">Jobs and Careers</a></li>
          <li><a href="#">CBSE Mandatory Disclosure</a></li>
          <li><a href="#">Alumni Portal</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Reach Us</a></li>
        </ul>
      </div>
      <div className="about">
        <h4>Delhi Public School Yamuna Nagar-Jagadhri</h4>
        <p>
          Delhi Public School Yamuna Nagar, under the aegis of Delhi Public School Society, Delhi, believes that quality education is not just about academic excellence, but also about fostering values and skills to prepare students for the challenges of tomorrow.
        </p>
        <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
      </div>
      <div className="contact-us">
        <h4>Contact Us</h4>
        <p><FaMapMarkerAlt className='text-yellow-500 text-2xl'/> Delhi Public School Yamuna Nagar/IMT, Bhatoli P.O. Mirzapur –Jagadhri-Ambala Road, Opposite Power Grid Substation, Jagadhri Yamuna Nagar, Pin - 135103 Haryana INDIA</p>
        <p><FaEnvelope className='text-yellow-500'/> info@dpsyamunanagar.com</p>
        <p><FaPhoneAlt className='text-yellow-500'/> 1800-891-0977</p>
        <p><FaGlobe className='text-yellow-500'/>www.dpsyamunanagar.com</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2004-2023 Delhi Public School, Yamuna Nagar</p>
    </div>
  </footer>
  )
}

export default Footer