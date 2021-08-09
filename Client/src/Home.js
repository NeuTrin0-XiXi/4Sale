import React from 'react'
import './Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Items from './components/Items';
// import { getItems } from './actions/ActionCreators';
// import Proptypes from 'prop-types';
// import { connect } from 'react-redux';
import axios from 'axios';


class Home extends Component {
  state = {
    items: [
    ]
  }
  componentDidMount() {
    axios.get('/api/items')
      .then(res => {
        console.log(res);
        let newItems = [...this.state.items, res.data];
        this.setState({
          items: newItems
        })
      });
  }


  render() {
    return (
      <div>
        <div id="myCarousel" class="container-fluid carousel slide crousalCustomEdit" data-bs-ride="carousel">
          <div class="carousel-inner crousalCustomEdit">

            <div class="carousel-item active crousalCustomEdit" >
              <img src="https://source.unsplash.com/1600x900/?rain" class="bd-placeholder-img" />

              <div class="container ">
                <div class="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p>Some representative placeholder content for the first slide of the carousel.</p>
                  <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div class="carousel-item active crousalCustomEdit ">
              <img src="https://source.unsplash.com/1600x900/?ocean" class="bd-placeholder-img" />
            </div>
            <div class="carousel-item ">
              <img src="https://source.unsplash.com/1600x900/?thunder" class="bd-placeholder-img" />

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
        <ol class="carousel-indicators ">
          <li type="button" data-target="#myCarousel" data-slide-to="0"  ></li>
          <li type="button" data-target="#myCarousel" data-slide-to="1" class="active" aria-current="true"></li>
          <li type="button" data-target="#myCarousel" data-slide-to="2"  ></li>
        </ol>
        {/* ______________________________________ */}
        <br /><br /><br />
        {/* ______________________________________ */}
        <div>
          <h3 style={{ fontFamily: 'Poppins' }}><b><u>Recently Added</u></b></h3>
          <Items items={this.state.items} />
        </div>
        <br /><br /><br /><br />
      </div>
    )
  }
}

// Home.propTypes = {
//   getItems: Proptypes.func.isRequired,
//   item: Proptypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//   product: state.product
// });
// connect(mapStateToProps, { getItems })
export default Home;
