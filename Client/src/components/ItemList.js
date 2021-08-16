import React, { Component } from 'react';
import '../Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import axios from 'axios';

class ItemList extends Component {
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
        }
    };


    render() {
        let i;
        const numbOfImages = () => {
            for (i = 2; i < this.state.images; i++) {
                this.setState({
                    item:{
                        numbOfImages:[
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
            })
        };
        const textColor = {
            color: 'black',
            textDecoration: 'none'
        };
        if (this.individual) {
            axios.get('/api/items/:' + this.state.item._id)
                .then(res => {
                    console.log(res.body);
                });
            numbOfImages();
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
                                                    {this.item.numbOfImages(() => (
                                                        <div className="productcrousel d-flex justify-content-center">
                                                            <img src="" className="ProductImage" />
                                                        </div >
                                                    ))}
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
            const { items } = this.props;
            return (
                <div className="card-deck">
                    <Container className="ContainerProperties">
                        {items.map(({ _id, title, price }) => (
                            <div className="col-lg-4 cardCustom d-inline-block" key={_id} >
                                <a onClick={() => { handleClick(_id) }}>
                                    <div className="card  customCard productRedirect" id="cardBoxOutline" style={textColor}>
                                        <img className="card-img-top cardImageCustom" src={`./uploads/${_id}-1`} alt="Card image cap" />
                                        <div className="card-body  customCard">
                                            <h5 className="card-title cardText">{title}</h5>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item cardText">Rs. {price}</li>
                                                {/* <li className="list-group-item cardText">{category}</li> */}
                                                <li><button href="#" className="btn btn-primary" style={{ backgroundColor: '#62c1ad', textDecoration: 'none' }} >Add to WishList</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </Container>
                </div>
            );
        }
    }
}

export default ItemList;