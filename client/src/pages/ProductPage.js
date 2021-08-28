import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Combined.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import WISH_EDIT_BUTTON from '../components/Wish_Edit_Button';
import { connect } from 'react-redux';
import NOT_FOUND from './Not_Found';

function ImageCarousel(props) {
    let items = []
    function image(i) {
        if (i === 0) {
            return (
                <div key={i} className=" active carousel-item customCarousel">
                    <img src={props.images[i]} alt="" className="ProductImage" />
                </div>
            )
        } else {
            return (
                <div key={i} className=" carousel-item customCarousel">
                    <img src={props.images[i]} alt="" className="ProductImage" />
                </div>
            )
        }
    }
    for (var i = 0; i < props.images.length; i++) {
        items.push(
            image(i)
        )
    }
    return (items)
};

//MAIN FUNCTION
function ProductPage(props) {
    const { id } = useParams()
    console.log(id)
    const [productDetails, setProductDetails] = useState({})
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)

    useEffect(() => {
        axios.get('/api/items/' + id)
            .then(res => {
                setProductDetails(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setErr(true)
            })
    }, [id])



    const { user } = props;

    function Buy(props) {
        const handleBuy = (auth) => {
            if (auth) {
                axios.put(`/api/items/notify/${id}`, {
                    notification: {
                        message: `wants to buy ${productDetails.title}`,
                        userName: user.name,
                        userEmail: user.email,
                        mobile: user.mobile
                    }
                })
                    .then(res => {
                        alert(res.data);
                    })
            }
            else {
                alert("Please Login ");
            }
        };

        function Contains(id) {
            let i;
            for (i = 0; i < user.soldItems.length; i++) {
                if (id === user.soldItems[i]) {
                    return true;
                }
            }
            return false;
        };

        if (Contains(id)) {
            return null;
        } else {
            return <button onClick={() => { handleBuy(props.auth) }} className="col-md-7 customBuyButton" id="BuyButtonId"  >Buy</button>
        }
    };

    const update = (history) => {
        history.push('/');
    }

    if (loading) {
        return (
            <div className="loading">
                <h3>Loading...</h3>
            </div>
        )
    } else if (err === true) {
        return (
            <NOT_FOUND />
           
        )
    } else {
        return (
            <>
            <div> {productDetails.title} </div>
            <div> {productDetails.description} </div>
            <div> {productDetails.price} </div>
            <div> {productDetails.userName} </div>
            <div> {productDetails.userEmail} </div>
            <div> {productDetails.date} </div>
            <div> {productDetails.images? productDetails.images.map((img, i) => <img key={i} src={img} alt='' ></img>) : null} </div>
            {/* <div>
                    <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div className="my-3 py-3">
                            <p className="display-5 customProductPagTitle">{title}</p>
                        </div>
                        <div className="bg-light box-shadow mx-auto" style={{ width: "85%", height: "100%", borderRadius: "21px 21px 0 0" }}>
                            <div style={{ color: "black" }} >
                                <div className="d-sm-flex flex-column justify-content-around">
                                    <br /><br />
                                    <div id="myCarousel" className="container-fluid carousel slide crousalCustomEdit" data-bs-ride="carousel">
                                        <div className="carousel-inner crousalCustomEdit">
                                            <ImageCarousel _id={_id} images={images} />
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
                                    <br /><br />
                                    <div className="p-2"><b><u>Price:</u></b> Rs {price}</div>
                                    <br />
                                    <div className="p-2"><u><b>Uploaded On</b></u></div>
                                    <div>{dte + '-' + mnth + '-' + yr}</div>
                                    <div className="p-2"><u><b>Description</b></u></div>
                                    <div>{description}</div>
                                    <div className="p-2"><u><b>Uploaded By</b></u></div>
                                    <div>{userName}</div>
                                    <div>{userEmail}</div>
                                    <br /><br />
                                </div>
                                <div>
                                    <Buy _id={_id} auth={this.props.auth} />
                                    <WISH_EDIT_BUTTON _id={_id} id="FavButton" update={() => update(this.props.history)} removeFav={false} removeSold={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        auth: state.Authorised
    }
}

export default connect(mapStateToProps)(ProductPage);