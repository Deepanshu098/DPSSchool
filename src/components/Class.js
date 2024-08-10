import React from 'react'
import './Class.css';

function Class() {

    const cardData = [
        { title: 'Academics', text: 'Join us to enthuse, empower and excel your ward', image: '/images/class1.png' },
        { title: 'Infrastructure', text: '17 acres eco-friendly campus', image: '/images/class2.png' },
        { title: 'Sports', text: 'Passion first and everything will come into place', image: '/images/class3.png' },
        { title: 'Pastoral Care', text: 'Where caring is not just a duty but culture', image: '/images/class4.png' },
      ];

  return (
    <div className="classroom-container">
      <h1 className="classroom-title">Beyond The Classroom</h1>
      <div className="card-grid">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Class