import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Combined.css';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { Redirect } from 'react-router';
import Spinner from '../components/Spinner';



function Sell(props) {
    const { user, authorised, loading } = props;
    const { history } = props;
    const { Update } = props;
    const [posting, setPosting] = useState(null)

    useEffect(() => {
        if (!authorised) {
            toast.warn('You need to login first!')
            return
        }
    }, [authorised])

    function handleSubmit(e) {

        if (!authorised) {
            toast.warn('You need to login first!')
            return
        }

        setPosting(true)
        e.preventDefault();
        const formData = e.target;
        const newItem = new FormData(formData);
        newItem.append('userName', user.name);

        axios.post('/api/items', newItem)
            .then(res => {
                setPosting(false)
                toast.success(`Posted Ad for ${res.data.title}`);
                history.push('/');
                
                const newUser = {
                    ...user,
                    ads: [res.data, ...user.ads]
                }
                Update(newUser);
            })
            .catch(err => {
                setPosting(false)
                console.log(err);
                toast.error("Failed to post");
            })

    }
    return (
        loading ? <Spinner />
            : <>
                {
                    posting === true ? <div style={{
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} ><h2 className="text-center">Posting...</h2></div> : !authorised ? <Redirect to='/' /> :
                        <div className="container-fluid ">
                            <main>

                                <div className='container-fluid d-flex justify-content-between mb-4 ' style={{
                                    height: '25vw', backgroundColor: '#fff',
                                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/always-grey.png")'
                                }} >
                                    <div className="d-flex flex-column" style={{ width: '65vw', padding: '20px 10px' }}>
                                        <h1 className="" style={{ fontSize: '4vw', fontWeight: 'bold' }} >Want to share your belongings? </h1>
                                        <p style={{ fontSize: '2vw' }} >Post an AD now.</p>
                                    </div>
                                    <img src="/sell.jpg" alt="" style={{ height: 'inherit' }} />
                                </div>

                                <div className="container px-1 ">
                                    <hr />
                                    <h2 className=" text-center "><u>Product Details</u></h2><br />

                                    {/* FORM */}
                                    <div className="d-flex flex-wrap justify-content-center">
                                        <form className="needs-validation" id="itemForm" noValidate="" onSubmit={handleSubmit} >
                                            <div className="row g-4">
                                                <div className="col-12">
                                                    <label htmlFor="productTitle" className="form-label">Product Title<span className='text-danger fw-bold'>*</span></label>
                                                    <input autoCapitalize="sentences" required type="text" className="form-control custom-form" id="productTitle" placeholder="Enter the product title here" name="title" />
                                                    <div className="invalid-feedback">
                                                        Please enter product title.
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="description" className="form-label">Product Description<span className='text-danger fw-bold'>*</span> </label>
                                                    <div className="input-group has-validation">
                                                        <textarea autoCapitalize="sentences" required className="form-control custom-form" id="description" placeholder="Enter Product Description" name="description" />
                                                        <div className="invalid-feedback">
                                                            Please enter product description.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center flex-column bd-highlight mb-3">

                                                    <div className="col-12 d-flex justify-content-center flex-column bd-highlight mb-3">
                                                        <label className="form-label">Categories<span className='text-danger fw-bold'>*</span></label>
                                                        <div className="row ms-3">
                                                            <div className="me-3 form-check col-12 col-md-2">
                                                                <input type="checkbox" className="form-check-input" id="Sports" name="Sports" />
                                                                <label className="form-check-label" htmlFor="Sports">Sports</label>
                                                            </div>
                                                            <div className="me-3 form-check col-12 col-md-2">
                                                                <input type="checkbox" className="form-check-input" id="Books" name="Books" />
                                                                <label className="form-check-label" htmlFor="Books">Books</label>
                                                            </div>
                                                            <div className="me-3 form-check col-12 col-md-2">
                                                                <input type="checkbox" className="form-check-input" id="Games" name="Games" />
                                                                <label className="form-check-label" htmlFor="Games">Games</label>
                                                            </div>
                                                            <div className="me-3 form-check col-12 col-md-2">
                                                                <input type="checkbox" className="form-check-input" id="Utilities" name="Utilities" />
                                                                <label className="form-check-label" htmlFor="Utilities">Utilities</label>
                                                            </div>
                                                            <div className="me-3 form-check col-12 col-md-2">
                                                                <input type="checkbox" className="form-check-input" id="Other" name="Other" />
                                                                <label className="form-check-label" htmlFor="Other">Other</label>
                                                            </div>
                                                        </div>


                                                        <div className="invalid-feedback">
                                                            Please enter product category.
                                                        </div>
                                                    </div>

                                                    <div className="col-6 d-flex justify-content-center flex-column bd-highlight mb-4">
                                                        <label htmlFor="price" className="form-label" required>Price</label>
                                                        <input required min='0' type="number" className="form-control" id="price" placeholder="Set a Price" name="price" />

                                                        <div className="invalid-feedback">
                                                            Please enter product price.
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-md-6 d-flex justify-content-center flex-column bd-highlight mb-3">
                                                        <label htmlFor="image1" className="form-label">Upload Images<span className='text-danger fw-bold'>*</span>  <i className='text-danger' > (atleast first image required!)</i></label>
                                                        <input required type="file" className="form-control" id="image1" placeholder="Required" name="file1" />
                                                        <input type="file" className="form-control" id="image2" name="file2" />
                                                        <input type="file" className="form-control" id="image3" name="file3" />
                                                        <input type="file" className="form-control" id="image4" name="file4" />
                                                        <div className="invalid-feedback">
                                                            Please upload an image.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="my-4" />
                                            <div className="d-flex flex-column bd-highlight mb-3 justify-content-evenly ">
                                                <button className="w-100 btn btn-success btn-lg" type="submit">Post Ad</button>
                                            </div>
                                            <button className="w-100 btn btn-danger btn-lg" style={{ textDecoration: 'none', color: 'white' }} type="reset">Cancel</button>
                                        </form>


                                        <div style={{ width: '20%', overflow: 'hidden' }} className='d-none d-lg-block mt-3'>
                                            <img style={{ width: '100%' }} src='/selltag.png' alt='' />
                                        </div>

                                    </div>
                                </div>
                            </main>
                            <br />
                            <br />
                        </div>
                }



                <script src="/docs/5.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
                <script src="form-validation.js"></script>
            </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        authorised: state.Authorised,
        loading: state.loading
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        Update: (user) => {
            dispatch({ type: 'UPDATE_USER', payload: user })
        }
    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sell));
