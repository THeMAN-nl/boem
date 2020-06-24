import React from 'react'
import fitgirl from "./img/article.jpg"
import boygirl from "./img/boygirl.jfif"
import girl from "./img/boygirl.jfif"
import fysio from "./img/fysio2.jfif"
function Cards() {
    return (
        <section id="cards" >

         <div className="row">
  <div className="performance-card col-lg-4 col-md-6">
    <div className="card">
      <div className="performance-card card-body">
      <img className="fitgirl" src={fitgirl} alt="fit girl" />
        <h5 className="card-items white-text card-title"> Performance</h5>
        <p className="card-items white-text card-text">Achieve your fitness goals with our guidance.</p>
        <a href="#" className="card-items white-btn btn btn-outline-light">learn more</a>
        <a href="#" className="card-items white-btn btn btn-light">Make an appointment</a>
      </div>
    </div>
  </div>
  <div className="card  col-lg-4 col-md-6">
  <div className="midcard card-body">
      <img className="girl"  src={girl} alt="fit girl" />
        <h5 className="card-items  card-title">Boem Life</h5>
        <p className="midcard-text card-text">Check our blog for fitness tips & tricks.See What our community is doing</p>
        <a href="#" className=" btn btn-outline-dark">learn more</a>
      </div>
  </div>
  <div className="revelidatie-card  col-lg-4 col-md-6">
    <div className="card">
      <div className="revelidatie-card card-body">
      <img className="girl"  src={fysio} alt="fit girl" />
        <h5 className="card-items white-text card-title">Physio</h5>
        <p className="card-items white-text card-text">Feel fresh and green again.</p>
        <a href="#" className="white-btn card-items btn btn-outline-light">learn more</a>
        <a href="#" className="card-items white-btn btn btn-light">Make an appointment</a>
      </div>
    </div>
  </div>
</div>
        </section>


    )
}

export default Cards
