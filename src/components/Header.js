import React from 'react'
import Section from './Section'
import School from './School'
import Academy from './Academy'
import Class from './Class'
import Events from './Events'
import Details from './Details'
import Footer from './Footer'

function Header() {
  return (
    <>
    <header className='relative'>
        <img src='/images/bg_image.png'  alt=''/>
        <h1 className='header-title font-bold text-3xl text-center text-white'>Bringing<br/>Excellence to Students</h1>
        <div className='header-color'>
            <div className="data-item">
                <h2 className='text-white'>1400</h2>
                <p>STUDENTS</p>
            </div>
            <div className="data-item">
                <h2 className='text-white'>75</h2>
                <p>TEACHERS</p>
            </div>
            <div className="data-item">
                <h2 className='text-white'>40</h2>
                <p>CLASSES</p>
            </div>
            <div className="data-item">
                <h2 className='text-white'>10</h2>
                <p>LABS</p>
            </div>
        </div>
    </header>

    <section>
    <div className="welcome-text">
                <h1>Welcome To DPS Yamuna Nagar:</h1>
                <h2>The Best CBSE School In Haryana</h2>
                <p>
                    Delhi Public School Yamuna Nagar, under the aegis of Delhi Public School Society, Delhi offers an inspiring, enriching, and inclusive academic environment to the students. As a school with a global perspective, we believe in honing the natural intellect, individual excellence, and the capacity for interdisciplinary collaboration in our students. We guide our learners to become confident and meticulous citizen-leaders and encourage them to pursue their passion for growth in life. The school inspires and equips them to be risk-takers and explore new horizons. We pride ourselves on being one of the top CBSE schools in Yamuna Nagar, providing unique all-round education to our wards.
                </p>
                <p>
                    The school inculcates innovation and creativity in the students through holistic learning in state-of-the-art classrooms and labs. The sports academy is equipped with world-class infrastructure for multiple indoor and outdoor games. The students are trained under the guidance of national and international level coaches. We recognize that the knowledge, skills, and experience of our faculty members are significant for achieving our commitment to academic excellence. In our endeavor to provide the best educators and staff, we offer an outstanding work environment with excellent facilities that are as conducive for the staff as they are for the students by following valuable guidelines from the DPS Society. <span className="read-more">Read More</span>
                </p>
            </div>
            <div className="welcome-video">
                <div className="video-container">
                    <img src='/images/youtube.png' alt="Video Thumbnail" className="video-image" />
                    {/* <div className="play-button">&#9658;</div> */}
                </div>
            </div>
    </section>

    <main>
      <div className="left">
        <h1 className='left-heading'>Why DPS?</h1>
        <img src="/images/school.png" alt="School Building" className="school-image" />
      </div>
      <div className="right">
        <div className="info-card">
          <img src='/images/logo1.png' alt="Logo" className="card-logo" />
          Established in April 2007
        </div>
        <div className="info-card">
          <img src='/images/logo2.png' alt="Logo" className="card-logo" />
          Student Teachers Ratio 1:15
        </div>
        <div className="info-card">
          <img src='/images/logo3.png' alt="Logo" className="card-logo" />
          1st to XIIth CBSE Curriculum Offered
        </div>
        <div className="info-card">
          <img src='/images/logo4.png' alt="Logo" className="card-logo" />
          200+ In-house staff
        </div>
        <div className="info-card">
          <img src='/images/logo5.png' alt="Logo" className="card-logo" />
          Situated in Yamuna Nagar, Haryana
        </div>
        <div className="info-card">
          <img src='/images/logo6.png' alt="Logo" className="card-logo" />
          Spread Across an Area of 17 Acres
        </div>
        <div className="info-card">
          <img src='/images/logo7.png' alt="Logo" className="card-logo" />
          ATAL Tinkering Lab Robotics Lab
        </div>
        <div className="info-card">
          <img src='/images/logo8.png' alt="Logo" className="card-logo" />
          Co-ed Boarding School (Abode of Bliss) For Classes IIIrd to XIIth
        </div>
      </div>
    </main>

    <div className="container">
      <div className="content">
        <h1>DPS, Yamuna Nagar</h1>
        <h2>The Best CBSE Boarding School in North India</h2>
        <p>
          The environment at DPS Yamuna Nagar, one of the best boarding schools in Haryana, is highly nurturing, caring, and aims towards providing every child with the opportunities to develop their talents as well as achieve their full academic potential. Our objective at the day boarding school is to make students' life fun, safe, and rewarding, and help them achieve independence and maturity. We take great pride in providing the best amenities to all of our students. We focus on every element required for the holistic growth of our wards.
        </p>
        <p>
          Teachers at the day boarding school in Yamuna Nagar take 100% responsibility for the holistic development of children. Our landmark day boarding school provides unmatched ambiance and a highly motivating learning environment to the students. Besides providing high-quality education, we focus on the overall growth and development of the students. Students from different backgrounds and cultures come together and thrive as their differences are embraced and celebrated by our vibrant community of boarders. The school offers boarding facilities to students from multiple nationalities, making it one of the best residential schools in India.
          <span className="read-more">Read More</span>
        </p>
      </div>
      <div className="image-container">
        <img src='/images/back_school.png' alt="School" className="schools-image" />
      </div>
    </div>

    <Section/>

    <School/>

    <Academy/>

    <Class/>

    <Events/>

    <Details/>

    <Footer/>
    
    </>
  )
}

export default Header