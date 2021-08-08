import React, { Component } from 'react';
// import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Combined.css';
import { connect } from 'react-redux';
import { addItem } from './actions/ActionCreators';



class Sample extends Component {
    state = {
        title: '',
        description: '',
        email: '',
        price: '',
        category: ''
    }


    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name: this.state.name
        }

        this.props.addItem(newItem);
        (alert("Sucessfully Posted AD ..."))
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }
    render() {

        return (
            <div>
                <div className="container-fluid ">
                    <main>
                        <div className="d-flex justify-content-center flex-column bd-highlight mb-3">

                            <br />

                            <div className="row featurette d-flex justify-content-center">
                                <div className="col-md-7">
                                    <h2 className="featurette-heading">Want to share your belongings?<br /><br /><br /> Post an AD now !!</h2>
                                </div>
                                <div className="col-md-5 ">
                                    <img className=" img-fluid bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="https://source.unsplash.com/1600x900/?space,elements" alt="Displat Image SellPage"></img>
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
                                                <input type="text" className="form-control" id="productTitle" placeholder="Enter the product title here" required="" name="title" onChange={this.onChange} />
                                                <div className="invalid-feedback">
                                                    Please enter product title.
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label for="username" className="form-label">Product Description</label>
                                                <div className="input-group has-validation">
                                                    <textarea className="form-control" id="username" placeholder="Enter Product Description" required="" name="description" onChange={this.onChange}></textarea>
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
                                                    <input type="text" className="form-control" id="address" placeholder="Set a Price" required="" name="price" onChange={this.onChange} />

                                                    <div className="invalid-feedback">
                                                        Please enter product price.
                                                    </div>
                                                </div>


                                                <div className="col-6 d-flex justify-content-center flex-column bd-highlight mb-3">
                                                    <label for="address" className="form-label">Category</label>
                                                    <input type="text" className="form-control" id="catgory" placeholder="Enter the category" required="" name="category" onChange={this.onChange} />

                                                    <div className="invalid-feedback">
                                                        Please enter product category.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center flex-column bd-highlight mb-3">
                                                <div className="col-md-5">
                                                    <label for="country" className="form-label">Country</label>
                                                    <select className="form-select" id="country" required="">
                                                        <option value="">Choose...</option>
                                                        <option>United States</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please select a valid country.
                                                    </div>
                                                </div>

                                                <div className="col-md-5">
                                                    <label for="state" className="form-label">State</label>
                                                    <select className="form-select" id="state" required="">
                                                        <option value="">Choose...</option>
                                                        <option>California</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please provide a valid state.
                                                    </div>
                                                </div>

                                                <div className="col-md-5">
                                                    <label for="zip" className="form-label">Zip</label>
                                                    <input type="text" className="form-control" id="zip" placeholder="" required=""></input>
                                                    <div className="invalid-feedback">
                                                        Zip code required.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <hr className="my-4" />
                                        <div className="d-flex flex-column bd-highlight mb-3 justify-content-evenly ">
                                            <button className="w-100 btn btn-success btn-lg" type="submit">Post Ad</button>
                                            <button className="w-100 btn btn-primary btn-lg" type="cancel">Cancel</button>
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
