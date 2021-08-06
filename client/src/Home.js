import React from 'react'
import Footer2 from './Footer2'
import Navbarnew from './Navbarnew'
import Combined from './Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
      
        <div>
          <br />
            <div id="myCarousel" class="container-fluid carousel slide crousalCustomEdit" data-bs-ride="carousel">
    <div class="carousel-inner crousalCustomEdit">
           
      <div class="carousel-item active crousalCustomEdit" >
       <img src = "https://source.unsplash.com/1600x900/?rain" class="bd-placeholder-img" />

        <div class="container ">
          <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item active crousalCustomEdit ">
      <img src = "https://source.unsplash.com/1600x900/?ocean" class="bd-placeholder-img" />

        <div class="container ">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item ">
      <img src = "https://source.unsplash.com/1600x900/?thunder" class="bd-placeholder-img" />

        <div class="container ">
          <div class="carousel-caption text-end ">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev " type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
 
  </div>
  <div class="carousel-indicators ">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
    </div>
    {/* ______________________________________ */}
    <br /><br /><br />
    {/* ______________________________________ */}
    

    
        <br /><br /><br /><br />
    <div>
        <Footer2 />
    </div>
        </div>
    )
}

export default Home
