import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarnew from './Navbarnew';
import Combined from './Combined.css';
import Footer2 from './Footer2';
import { useParams } from 'react-router';
import ProductImage from './ProductPageSections/ProductImage';
import ProductInfo from './ProductPageSections/ProductInfo.js';


const ProductPage = () => {
  const { title, description, email, price, category } = useParams();       //Destructuring the state parameters

  const handleBuyClick = () => {
    alert("Notification Sent to the owner...")
  }

  return (
    <div>
      {/* "https://source.unsplash.com/500x500/?football" */}

      <div>

        <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div class="my-3 py-3">
            <p className="display-5 customProductPagTitle">{title}</p>
          </div>
          <div class="bg-light box-shadow mx-auto" style={{ width: "85%", height: "100%", borderRadius: "21px 21px 0 0" }}>
            <div style={{ color: "black" }} >
              <div class="d-sm-flex flex-column justify-content-around">
                <br /><br />
              <div className="productcrousel d-flex justify-content-center">
                <img src= "https://source.unsplash.com/500x500/?sports" className="ProductImage" />
              </div >
              <br /><br />
                <div class="p-2"><b><u>Price:</u></b> Rs {price}</div>
                <br />
                <div class="p-2"><b><u>Category:</u></b>  {category}</div>
                <br />
                <div class="p-2"><u><b>Description</b></u></div> 
                <div>{description}</div>
                <br /><br />
              </div>
              <div>
                <button className="col-md-7  customBuyButton" id = "BuyButtonId" onClick = {handleBuyClick} >Buy</button>
                <br /><br />
                <button className="col-md-7  customBuyButton" id = "customWishlist" >Add to Wishlist</button>
                <br /><br /><br /><br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>

  )
}




export default ProductPage
