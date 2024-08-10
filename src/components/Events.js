import React from 'react'
import './Events.css'

function Events() {
  return (
    <div className="events">
      <div className="virtual-tour">
        <h2 className='mb-4'>Discover the Best Co-ed CBSE School</h2>
        <div className="video-wrapper">
          <img
            src="/images/virtual.png"
            alt="DPS Virtual Tour"
            className="video-thumbnail"
          />
        </div>
      </div>

      <div className="news-events">
        <h2 className='mb-4 font-bold'>News and Events</h2>
        <div className="news-cards">
          <div className="news-card">
            <img src="/images/one.png" alt="Event 1" />
            <div className="card-content">
              <h3>Janmashtami Celebration</h3>
              <p>An event was organized on the Indian evening of Janmashtami...</p>
            </div>
          </div>

          <div className="news-card">
            <img src="/images/two.png" alt="Event 2" />
            <div className="card-content">
              <h3>Sports Meet 2021-22</h3>
              <p>The school hosted its annual sports meet with active participation...</p>
            </div>
          </div>

          <div className="news-card">
            <img src="/images/three.png" alt="Event 3" />
            <div className="card-content">
              <h3>MUN 4.0</h3>
              <p>MUN 4.0 was organized from August 21st to 23rd, where students discussed...</p>
            </div>
          </div>
            <p>Read More---</p>
        </div>
      </div>
    </div>
  )
}

export default Events