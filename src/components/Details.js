import React from 'react'
import './Details.css'


function Details() {
  return (
    <div className="testimonial-container">
    <h2>What Our Parents Say</h2>
    <div className="testimonial-wrapper">
      <div className="testimonial-card">
        <div className="logo-image">
          <img
            src="/images/sign.png" 
            alt="Logo"
          />
        </div>
        <div className="testimonial-image">
          <img
            src="/images/person1.png"
            alt="Shilpa Kumar"
          />
        </div>
        <div className="testimonial-content">
          <h3>Shilpa Kumar</h3>
          <p>
            The school always upholds the highest standards of academic excellence. The staff is 
            incredibly supportive, always working to help students reach their full potential...
          </p>
        </div>
      </div>
      <div className="testimonial-card">
        <div className="logo-image">
          <img
            src="/images/sign.png" 
            alt="Logo"
          />
        </div>
        <div className="testimonial-image">
          <img
            src="/images/person2.png"
            alt="Jasmeen Bhatia"
          />
        </div>
        <div className="testimonial-content">
          <h3>Jasmeen Bhatia</h3>
          <p>
            DPS is a school of excellence, with a team of dedicated staff members who consistently 
            strive for the best for each student...
          </p>
        </div>
      </div>
    </div>
  </div>
  
  )
}


export default Details