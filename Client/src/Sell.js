import React, { Component } from 'react';
// import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Combined.css';
import { connect } from 'react-redux';
import { addItem } from './actions/ActionCreators';
import { Link } from 'react-router-dom';



class Sample extends Component {
    state = {
        title: '',
        description: '',
        email: '',
        price: '',
        category: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    onSubmit = (e) => {
        if (this.state.title === '' || this.state.description === '' || this.state.price === '' || this.state.category === '' || this.state.email === '') {
            alert("Please Fill all the Fields");
            e.preventDefault();
        }

        else {
            e.preventDefault();
            const newItem = {
                title: this.state.title,
                description: this.state.description,
                email: this.state.email,
                price: this.state.price,
                category: this.state.category
            }

            this.props.addItem(newItem);
            (alert("Sucessfully Posted AD ..."))
        }
    }

    render() {

        return (
            <div>
                <div className="container-fluid ">
                    <main>
                        <div className="d-flex justify-content-center flex-column bd-highlight mb-3">

                            <br />

                            <div className="row featurette d-flex justify-content-center customHeaderSellPage">
                                <div className="col-md-7">
                                    <h2 className="featurette-heading">Want to share your belongings?<br /><br /><br /> Post an AD now !!</h2>
                                </div>
                                <div className="col-md-5 ">
                                    <img className=" img-fluid bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="https://source.unsplash.com/1600x900/?money,finance" alt="Displat Image SellPage"></img>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div className="row g-5  d-flex justify-content-center">

                                <div className="col-md-7 col-lg-8 bg-light ">
                                    <br />
                                    <h2 className="mb-3 "><u>Product Details</u></h2><br /><br />
                                    <form className="needs-validation" novalidate="" onSubmit={this.onSubmit} >
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label for="address" className="form-label">Product Title</label>
                                                <input type="text" className="form-control" id="productTitle" placeholder="Enter the product title here" required name="title" onChange={this.onChange} />
                                                <div className="invalid-feedback">
                                                    Please enter product title.
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label for="username" className="form-label">Product Description</label>
                                                <div className="input-group has-validation">
                                                    <textarea className="form-control" id="username" placeholder="Enter Product Description" required name="description" onChange={this.onChange}></textarea>
                                                    <div className="invalid-feedback">
                                                        Please enter product description.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                                <input type="email" className="form-control" id="email" placeholder="you@example.com" name="email" onChange={this.onChange} />
                                                <div className="invalid-feedback">
                                                    Please enter a valid institute email address .
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center flex-column bd-highlight mb-3">
                                                <div className="col-6 d-flex justify-content-center flex-column bd-highlight mb-3">
                                                    <label for="address" className="form-label">Price</label>
                                                    <input type="text" className="form-control" id="address" placeholder="Set a Price" required name="price" onChange={this.onChange} />

                                                    <div className="invalid-feedback">
                                                        Please enter product price.
                                                    </div>
                                                </div>


                                                <div className="col-6 d-flex justify-content-center flex-column bd-highlight mb-3">
                                                    <label for="address" className="form-label">Category</label>
                                                    <input type="text" className="form-control" id="catgory" placeholder="Enter the category" required name="category" onChange={this.onChange} />

                                                    <div className="invalid-feedback">
                                                        Please enter product category.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <hr className="my-4" />
                                        <div className="d-flex flex-column bd-highlight mb-3 justify-content-evenly ">
                                            <button className="w-100 btn btn-success btn-lg" type="submit">Post Ad</button>
                                            <button className="w-100 btn btn-primary btn-lg" type="cancel"><Link to="/4Sale" style={{ textDecoration: 'none', color: 'white' }}>Cancel</Link></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>

                    <br />
                    <br />
                    <br />
                    <br />
                </div>


                <script src="/docs/5.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

                <script src="form-validation.js"></script>


            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(Sample);
