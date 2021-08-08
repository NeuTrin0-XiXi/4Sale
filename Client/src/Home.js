import React from 'react'
import './Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { getItems } from './actions/ActionCreators';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';


class Home extends Component {

  state = {
    items: {
      name:'',
      date:'',
      price:''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:80/api/items')
      .then(res => {
        console.log(res);
        // let newState=[...this.state,res.data.slice(0,10)];
        // this.setState({
        //   items:newState
        // })
        // console.log(this.state);
      });
  }


  render() {
    // this.props.something.items;
    const { items } = this.props.product;
    return (

      <div>
        <br />
        <div id="myCarousel" className="container-fluid carousel slide crousalCustomEdit" data-bs-ride="carousel">
          <div className="carousel-inner crousalCustomEdit">
            <div className="carousel-item active crousalCustomEdit" >
              <img src="https://source.unsplash.com/1600x900/?rain" class="bd-placeholder-img" />
              <div className="container ">
                <div class="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p>Some representative placeholder content for the first slide of the carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item active crousalCustomEdit ">
              <img src="https://source.unsplash.com/1600x900/?ocean" className="bd-placeholder-img" />

              <div className="container ">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>Some representative placeholder content for the second slide of the carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <img src="https://source.unsplash.com/1600x900/?thunder" className="bd-placeholder-img" />

              <div className="container ">
                <div className="carousel-caption text-end ">
                  <h1>One more for good measure.</h1>
                  <p>Some representative placeholder content for the third slide of this carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
        <div class="carousel-indicators ">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
        </div>
        {/* ______________________________________ */}
        <br /><br /><br />
        {/* ______________________________________ */}

        <div className="card">
          <Container className="ContainerProperties">
            {items.map(({ _id, title, description, price }) => (
              <div className="row card">
                <div className="col-md-4">
                  <div className="card  customCard" key={_id}>
                    <img className="card-img-top cardImageCustom" src="..." alt="Card image cap" />
                    <div className="card-body  customCard">
                      <h5 className="card-title cardText">{title}</h5>
                      <p className="card-text cardText">{description}</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item cardText">Rs. {price}</li>
                        <li><a href="#" class="btn btn-primary">Add to WishList</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Container>
        </div>

        <br /><br /><br /><br />
      </div>
    )
  }
}

Home.propTypes = {
  getItems: Proptypes.func.isRequired,
  item: Proptypes.object.isRequired
}

const mapStateToProps = (state) => ({
  product: state.product
});

export default connect(mapStateToProps, { getItems })(Home);
