import React from 'react'
import './Academy.css';

function Academy() {
  return (
    <div className="academy-container">
      <h1 className="academy-title">Rohit Sharma Academy at DPS, Yamuna Nagar</h1>
      <div className="academy-content">
        <div className="left-section">
          <img src='/images/rohit1.png' alt="Registration Banner" className="left-image" />
        </div>
        <div className="right-section">
          <p className="academy-text">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
          </p>
          <img src='/images/rohit2.png' alt="Promotion" className="right-image" />
        </div>
      </div>
    </div>
  )
}

export default Academy