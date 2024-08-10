import React from 'react'
import './Section.css'

function Section() {
  return (
    <div className="containers bg-gray-100">
    <h1>DPS - Where Education Meets Inspiration</h1>
    <div className="contents">
      <div className="column mission">
        <img src='/images/image1.png' alt="Our Mission" className="column-image" />
        <div className="overlay">
          <h2>Our Mission</h2>
          <p>
            We aim towards being a center of excellence in education by educating our privileged youth in the essence of enlightened leadership and citizenship.
          </p>
        </div>
      </div>
      <div className="column vision">
        <img src='/images/image2.png' alt="Our Vision" className="column-image" />
        <div className="overlay">
          <h2 className='second'>Our Vision</h2>
        </div>
      </div>
      <div className="column core-values">
        <img src='/images/image3.png' alt="Our Core Values" className="column-image" />
        <div className="overlay">
          <h2 className='third'>Our Core Values</h2>
        </div>
      </div>
      <div className="text-column">
        <p>
          DPS, Yamuna Nagar is deeply committed towards holistic education of the learners. Our focus not only in the development educational skills of the students but also their non-cognitive skills. The team at DPS, Yamuna Nagar comprises of well-qualified and experienced teachers and instructors supported by experienced administrative staff members. The school campus houses a well-equipped and technologically advanced academic wing, boarding houses, amply equipped sports amenities, medical facilities and state-of-the-art labs, spread over acres of campus, which are well-planned and constructed.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Section