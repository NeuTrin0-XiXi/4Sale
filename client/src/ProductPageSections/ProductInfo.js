import React from 'react'

const ProductInfo = ({title , description , email , price , category}) => {
    return (
        <div>
            
        <div>
            
            <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
         <div class="my-3 py-3">
           <p className = "display-5 customProductPagTitle">{title}</p>
         </div>
         <div class="bg-light box-shadow mx-auto" style={{width: "80%" , height: "100vh" , borderRadius: "21px 21px 0 0"}}>
             <div style = {{color: "black"}}>
               <br /><br /><br />
               <div className = "productcrousel">
 
               </div>
               <div className = "col-md-7 productText">
                   {description}
               </div>
               <div>
                 Price: Rs {price}
                 <br /><br /><br />
                 Category: {category}
               </div>
               <div>
                 <button className = "col-md-7 bg-danger customBuyButton" >Buy</button>
                 <button className = "col-md-7 bg-danger customWishlist" >Add to Wishlist</button>
               </div>
                 </div>
         </div>
       </div>
         </div>
        </div>
    )
}

export default ProductInfo;
