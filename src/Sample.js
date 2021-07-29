import React from 'react';
import { useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarnew from './Navbarnew';
import Combined from './Combined.css';


const Sample = () => {
    const [productTitle , setProductTitle] = useState('');
    const [productDescription , setProductDescription] = useState('');
    const [email , setEmail] = useState('');
    const [price , setPrice] = useState('');
    const [category , setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {productTitle , productDescription ,email , price , category}
        fetch('' ,
        {
            method: 'POST',
            headers: {"Content-Type" : "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New blog added");
        })
    }

    return (
        <div>
            <div className="container-fluid ">
                <main>
                    <div className = "d-flex justify-content-center flex-column bd-highlight mb-3">
                        
                        <br />
              
                        <div class="row featurette d-flex justify-content-center">
      <div class="col-md-7">
        <h2 class="featurette-heading">Want to share your belongings?<br /><br /><br /> Post an AD now !!</h2> 
      </div>
      <div class="col-md-5 ">
        <img class=" img-fluid bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src = "https://source.unsplash.com/1600x900/?space,elements" alt= "Displat Image SellPage"></img>
      </div>
    </div>
            <br />
            <br />
            <br />
                    <div class="row g-5  d-flex justify-content-center">

                        <div class="col-md-7 col-lg-8 bg-light ">
                            <br />
                            <h2 class="mb-3 "><u>Product Details</u></h2><br /><br />
                            <form class="needs-validation" novalidate="" onSubmit = {handleSubmit }>
                                <div class="row g-3">
                                <div class="col-12">
                                        <label for="address" class="form-label">Product Title</label>
                                        <input type="text" class="form-control" value = {productTitle} id="productTitle" placeholder="Enter the product title here" required=""
                                        onChange = {(e) => setProductTitle(e.target.value)}></input>
                                        <div class="invalid-feedback">
                                            Please enter product title.
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="username" class="form-label">Product Description</label>
                                        <div class="input-group has-validation">
                                            <textarea class="form-control" value = {productDescription} id="username" placeholder="Enter Product Description" required=""
                                            onChange = {(e) => setProductDescription(e.target.value)}></textarea>
                                            <div class="invalid-feedback">
                                                Please enter product description.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                                        <input type="email" class="form-control" value = {email} id="email" placeholder="you@example.com"
                                        onChange = {(e) => setEmail(e.target.value)}></input>
                                        <div class="invalid-feedback">
                                            Please enter a valid institute email address .
                                        </div>
                                    </div>
                                    <div className = "d-flex justify-content-center flex-column bd-highlight mb-3">
                                    <div class="col-6 d-flex justify-content-center flex-column bd-highlight mb-3">
                                        <label for="address" class="form-label">Price</label>
                                        <input type="text" class="form-control" vlaue = {price} id="address" placeholder="Set a Price" required=""
                                        onChange = {(e) => setPrice(e.target.value)}></input>
                                        <div class="invalid-feedback">
                                            Please enter product price.
                                        </div>
                                    </div>
                                    {console.log({price})}

                                    <div class="col-6 d-flex justify-content-center flex-column bd-highlight mb-3">
                                        <label for="address" class="form-label">Category</label>
                                        <input type="text" class="form-control" value = {category} id="catgory" placeholder="Enter the category" required=""
                                        onChange = {(e) => setCategory(e.target.value)}></input>
                                        <div class="invalid-feedback">
                                            Please enter product category.
                                        </div>
                                    </div>
                                    </div>
                                    <div className = "d-flex justify-content-center flex-column bd-highlight mb-3">
                                    <div class="col-md-5">
                                        <label for="country" class="form-label">Country</label>
                                        <select class="form-select" id="country" required="">
                                            <option value="">Choose...</option>
                                            <option>United States</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>

                                    <div class="col-md-5">
                                        <label for="state" class="form-label">State</label>
                                        <select class="form-select" id="state" required="">
                                            <option value="">Choose...</option>
                                            <option>California</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>

                                    <div class="col-md-5">
                                        <label for="zip" class="form-label">Zip</label>
                                        <input type="text" class="form-control" id="zip" placeholder="" required=""></input>
                                        <div class="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>
                                </div>

                                

                                <hr class="my-4" />
                                <div className = "d-flex flex-column bd-highlight mb-3 justify-content-evenly ">
                                <button class="w-100 btn btn-success btn-lg" type="submit">Post Ad</button>
                                <button class="w-100 btn btn-primary btn-lg" type="cancel">Cancel</button>
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

export default Sample
