import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, withRouter } from 'react-router-dom';
import axios from 'axios';
import WISH_EDIT_BUTTON from '../components/Wish_Edit_Button';
import { connect } from 'react-redux';
import NOT_FOUND from './Not_Found';
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faRupeeSign, faTrash } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../components/Spinner';

//MAIN FUNCTION
function ProductPage(props) {
    const { user } = props;
    const { Update } = props;
    const { id } = useParams()
    const [productDetails, setProductDetails] = useState({})
    const [images, setImages] = useState(["/no-image.png", "/no-image.png", "/no-image.png", "/no-image.png"])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)
    const [num, setNum] = useState(0)
    const [date, setDate] = useState('')

    useEffect(() => {
        axios.get('/api/items/' + id)
            .then(res => {
                setProductDetails(res.data)
                setLoading(false)

                //date
                setDate(new Date(res.data.date))

                //images
                const newArray = [...images, ...res.data.images]
                for (let i = 0; i < res.data.images.length; i++) {
                    newArray.shift()
                }
                newArray.reverse()
                setImages(newArray)

            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setErr(true)
            })
    }, [id, images, productDetails.date])

    function BUY_DELETE(props) {
        const Sold = (_id) => {
            let i;
            for (i = 0; i < user.soldItems.length; i++) {
                if (_id === user.soldItems[i]) {
                    return true;
                }
            }
            return false;
        };

        if (Sold(id)) {
            const Delete = (_id) => {
                const newUser = {
                    ...user,
                    soldItems: user.soldItems.filter(item => { return item !== _id })
                }
                Update(newUser);
                axios.delete(`/api/items/${_id}`)
                    .then(res => {
                        console.log(res);
                        axios({
                            method: 'DELETE',
                            url: `/api/user/sold/${user._id}`,
                            data: {
                                sold: _id
                            }
                        })
                    })
            };
            return (
                <Button onClick={() => Delete(props._id)} variant='transparent' className="non-outlined-btn text-danger">
                    <FontAwesomeIcon icon={faTrash} size='lg' />
                </Button>
            );
        } else {
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
            return <Button onClick={() => { handleBuy(props.auth) }} type="button" className="btn-warning btn-md mr-1 mb-2">Buy now</Button>
        }
    };

    if (loading) {
        return (
            <Spinner />
        )
    } else if (err === true) {
        return (
            <NOT_FOUND />
        )
    } else {
        return (
            <>
                <section className=" py-3 container-fluid">
                    <div className="my-5 row ">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div id="mdb-lightbox-ui" />
                            <div className="mdb-lightbox">
                                <div className="row product-gallery mx-1">
                                    <div className="col-1 d-flex m-auto" onClick={() => setNum(prevNum => prevNum > 0 ? prevNum - 1 : prevNum)} >
                                        <FontAwesomeIcon size='lg' icon={faAngleLeft} />
                                    </div>

                                    <div className="col-10 mb-0">
                                        <figure className="text-center view overlay rounded z-depth-1 main-img">
                                            <a href={images[num]} data-size="710x823" >
                                                <img alt='' src={images[num]} className="img-fluid z-depth-1" />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className="col-1 d-flex m-auto" onClick={() => setNum(prevNum => prevNum < 2 ? prevNum + 1 : prevNum)} >
                                        <FontAwesomeIcon size='lg' icon={faAngleRight} />
                                    </div>
                                    <div className="col-12">
                                        <div className="row p-3">
                                            {
                                                images ? images.map((img, i) =>
                                                    <div onClick={() => setNum(i)} key={i} className="col-3" style={{ cursor: 'pointer', border: '0.5px solid #bbbbbb' }}>
                                                        <div className="view overlay rounded z-depth-1 gallery-item">
                                                            <img alt='' src={img} className="img-fluid" />
                                                            <div className="mask rgba-white-slight" />
                                                        </div>
                                                    </div>
                                                ) : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light p-3 col-md-6 bordered" >
                            <h3>{productDetails.title}</h3>
                            <p className="mb-2 text-muted text-uppercase small">{productDetails.categories.map(cat => cat)}</p>
                            <p><span className="mr-1 text-success"><FontAwesomeIcon icon={faRupeeSign} /><strong> {productDetails.price}</strong></span></p>
                            <hr />
                            <p className="pt-1">{productDetails.description}</p>
                            <hr />
                            <div className="table-responsive">
                                <table className="table table-sm table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <th className="pl-0 w-25" scope="row"><strong>Seller:</strong></th>
                                            <td>{productDetails.userName}</td>
                                        </tr>
                                        <tr>
                                            <th className="pl-0 w-25" scope="row"><strong>Email:</strong></th>
                                            <td><a href={`mailto:${productDetails.userEmail}`}>{productDetails.userEmail}</a></td>
                                        </tr>
                                        <tr>
                                            <th className="pl-0 w-25" scope="row"><strong>Room No:</strong></th>
                                            <td>512</td>
                                        </tr>
                                        <tr>
                                            <th className="pl-0 w-25" scope="row"><strong>Date:</strong></th>
                                            <td><div> {
                                                date.toString().split(' ')[0] + ', ' +
                                                date.toString().split(' ')[2] + ' ' +
                                                date.toString().split(' ')[1] + ' ' +
                                                date.toString().split(' ')[3]
                                            } </div></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <BUY_DELETE auth={props.auth} />
                            <span className='ms-2' > <WISH_EDIT_BUTTON _id={productDetails._id} update={props.update} removeSold={false} removeFav={false} />{/*Add to Favourites */}</span>

                        </div>
                    </div>
                </section>

            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        auth: state.Authorised
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        Update: (user) => {
            dispatch({ type: 'UPDATE_USER', payload: user })
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPage));