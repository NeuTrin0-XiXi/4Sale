import React from 'react'
import Footer2 from './Footer2'
import Navbarnew from './Navbarnew'
import Combined from './Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { getItems } from './actions/ActionCreators';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Home extends Component {



  componentDidMount() {
    this.props.getItems();
  }
   handelClick=(_id)=>{
    // this.props.getItem(_id);
  }

  render() {
    // this.props.something.items;
    const { items } = this.props.product;

    const textColor = {
      color: 'black',
      textDecoration: 'none'
    };


    return (
      <div>
        <div id="myCarousel" class="container-fluid carousel slide crousalCustomEdit" data-bs-ride="carousel">
          <div class="carousel-inner crousalCustomEdit">
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
        </div>

        <div className="card-deck">
          <Container className="ContainerProperties">
            {items.map(({ _id, title, description, price, category }) => (
              <Link to={'item/:_id'} className="productRedirect" style={textColor}>
                <div className="col-lg-4 cardCustom d-inline-block">
                  <div class="card  customCard" key={_id} id="cardBoxOutline">
                    <img class="card-img-top cardImageCustom" src="..." alt="Card image cap" onClick={()=>{this.renderhandelClick({_id})}}/>
                    <div class="card-body  customCard">
                      <h5 class="card-title cardText">{title}</h5>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item cardText">Rs. {price}</li>
                        <li class="list-group-item cardText">{category}</li>
                        <li><a href="#" class="btn btn-primary" style={{ backgroundColor: '#62c1ad', textDecoration: 'none' }}>Add to WishList</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Container>
        </div>
        <br /><br /><br /><br />
        <div>
          <Footer2 />
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  getItems: Proptypes.func.isRequired,
  getItem: Proptypes.func.isRequired,
  item: Proptypes.object.isRequired
}

const mapStateToProps = (state) => ({
  product: state.product
});

export default connect(mapStateToProps, { getItems})(Home);
