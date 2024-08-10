import React from 'react'
import './School.css'

function School() {

    const images = [
        { src: '/images/school1.png', alt: 'School Event 1' },
        { src: '/images/school2.png', alt: 'School Event 2' },
        { src: '/images/school5.png', alt: 'School Event 3' },
        { src: '/images/school3.png', alt: 'School Event 4' },
        { src: '/images/school4.png', alt: 'School Event 5' },
      ];


  return (
    <div className="highlights-container">
      <div className="title-section">
        <h1>School Highlights</h1>
        <button className="gallery-button">Full Gallery &gt;</button>
      </div>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className={`image-card image-${index + 1}`}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default School