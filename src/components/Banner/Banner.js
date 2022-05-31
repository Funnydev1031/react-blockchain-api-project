import React from 'react'
import bannerImgage from '../../assets/images/banner.png'
import '../../assets/scss/home/banner.scss'

const Topbar = () => {
  return (
    <div className="banner--container">
      <div className="row">
        <div className="banner--left col-xxl-6 col-12 d-flex flex-column align-items-xxl-start align-items-center">
          <h3>Blockchain Games</h3>
          <h2>Enginnered</h2>
          <p className="BB_34 text-center text-xxl-start">
            To Be Social, Exciting & Time Efficient
          </p>
          <img
            src={bannerImgage}
            alt="Banner Image"
            className="d-block d-xxl-none banner--left__image"
          />
          <p className="Bb_22 text-left">
            The WorkGenius Platform holds over 350,000 registered freelancers
            (“Geniuses”) providing professional services across.
          </p>
          <button type="button" className="btn btn-primary btn-learn">
            <div className="bb_18">Learn More</div>
          </button>
        </div>
        <div className="banner--right col-xxl-6 col-12 d-xxl-block d-none">
          <img src={bannerImgage} alt="Banner Image" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
