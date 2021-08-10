import React from 'react';
import './Combined.css';
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
        <div id="myCarousel" className="container-fluid carousel slide crousalCustomEdit" data-bs-ride="carousel">
          <div className="carousel-inner crousalCustomEdit">
            <div className="carousel-item active crousalCustomEdit ">
              <img src="https://source.unsplash.com/1600x900/?ocean" className="bd-placeholder-img" />
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
        <ol className="carousel-indicators ">
          <li type="button" data-target="#myCarousel" data-slide-to="0"  ></li>
          <li type="button" data-target="#myCarousel" data-slide-to="1" className="active" aria-current="true"></li>
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
              <Link to={`/item:${_id}`} className="productRedirect" style={textColor}>
                <div className="col-lg-4 cardCustom d-inline-block">
                  <div className="card  customCard" key={_id} id="cardBoxOutline">
                    <img className="card-img-top cardImageCustom" src="..." alt="Card image cap" onClick={()=>{this.handelClick({_id})}}/>
                    <div className="card-body  customCard">
                      <h5 className="card-title cardText">{title}</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item cardText">Rs. {price}</li>
                        <li className="list-group-item cardText">{category}</li>
                        <li><a href="#" className="btn btn-primary" style={{ backgroundColor: '#62c1ad', textDecoration: 'none' }}>Add to WishList</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
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
  getItem: Proptypes.func.isRequired,
  item: Proptypes.object.isRequired
}

const mapStateToProps = (state) => ({
  product: state.product
});

export default connect(mapStateToProps, { getItems})(Home);
