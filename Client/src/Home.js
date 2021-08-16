import React from 'react';
import './Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';


class Home extends Component {

  state = {
    individual: false,
    id: '',
    item: {
      _id: '',
      title: '',
      price: '',
      date: '',
      description: '',
      userName: '',
      userEmail: '',
      images: '',
      numbOfImages: [1]
    },
    items: [
      {
        _id: '',
        title: '',
        price: '',
        date: ''

      }
    ]
  }

  componentDidMount() {
    axios.get('/api/items')
      .then(res => {
        this.setState({
          items: res.data
        });
        console.log(this.state);
      })
  }


  render() {
    const {numbOfImages}=this.state.item;
    let i;
    const numbOfImagesFunc = () => {
      for (i = 2; i < this.state.images; i++) {
        this.setState({
          item: {
            numbOfImages: [
              ...numbOfImages, i
            ]
          }
        })
      }
    }
    const handleClick = (_id) => {
      this.setState({
        individual: true,
        id: _id
      }, () => {
        axios.get('/api/items/' + this.state.id)
          .then(res => {
            this.setState({
              item: res.data
            })
          })
          .then(() => {
            numbOfImagesFunc();
            console.log(this.state);
          })
      }
      )
    };
    const textColor = {
      color: 'black',
      textDecoration: 'none'
    };
    if (this.state.individual) {
      return (
        <div>
          <div>
            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
              <div className="my-3 py-3">
                <p className="display-5 customProductPagTitle">{this.state.item.title}</p>
              </div>
              <div className="bg-light box-shadow mx-auto" style={{ width: "85%", height: "100%", borderRadius: "21px 21px 0 0" }}>
                <div style={{ color: "black" }} >
                  <div className="d-sm-flex flex-column justify-content-around">
                    <br /><br />
                    <div className="productcrousel d-flex justify-content-center">
                      <div id="myCarousel" className="container-fluid carousel slide crousalCustomEdit" data-bs-ride="carousel">
                        <div className="carousel-inner crousalCustomEdit">
                          {/* {numbOfImages.map((number) => (
                            <div className="productcrousel d-flex justify-content-center" id={number}>
                              <img src="" className="ProductImage" />
                            </div >
                          ))} */}
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
                    </div >
                    <br /><br />
                    <div className="p-2"><b><u>Price:</u></b> Rs {this.state.item.price}</div>
                    <br />
                    <div className="p-2"><b><u>Category:</u></b>  {this.state.item.category}</div>
                    <br />
                    <div className="p-2"><u><b>Description</b></u></div>
                    <div>{this.state.item.description}</div>
                    <br /><br />
                  </div>
                  <div>
                    {/* <button className="col-md-7  customBuyButton" id="BuyButtonId" onClick={this.handleBuyClick} >Buy</button> */}
                    <br /><br />
                    <button className="col-md-7  customBuyButton" id="customWishlist" >Add to Wishlist</button>
                    <br /><br /><br /><br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      const { items } = this.state;
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
              {items.map(({ _id, title, price }) => (
                <div className="col-lg-4 cardCustom d-inline-block" key={_id} >
                  <a >
                    <div className="card  customCard productRedirect" id="cardBoxOutline" style={textColor}>
                      <img className="card-img-top cardImageCustom" src={`./uploads/${_id}-1`} alt="Card image cap" />
                      <div className="card-body  customCard">
                        <h5 className="card-title cardText">{title}</h5>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item cardText">Rs. {price}</li>
                          {/* <li className="list-group-item cardText">{category}</li> */}
                          <li><button href="/item" className="btn btn-primary" style={{ backgroundColor: '#62c1ad', textDecoration: 'none' }} onClick={() => { handleClick(_id) }} >Add to WishList</button></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </Container>
          </div>
          <br /><br /><br /><br />
        </div>
      )
    }
  }
}

export default Home;
