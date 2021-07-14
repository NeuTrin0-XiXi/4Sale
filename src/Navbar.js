import React from 'react'
import Combined from "./Combined.css"

const Navbar = () => {
    return (
        <div className = "navBar">
        <nav>
        <ul className = "navBarList" type = "none">
                <li className = "logo">4Sale</li>
                <li  id = "home" className = "partOfNav" >Home</li>
                <li id = "about" className = "partOfNav">About</li>
                <li id = "buy" className = "partOfNav">Buy</li>
                <li id = "sell" className = "partOfNav">Sell</li>
                <li id = "contactUs" className = "partOfNav">Contact Us</li>
                <li>
                    <select className = "categoryDD">
                <option value = "all">All</option>
                <option value = "all">All</option>
                <option value = "sports">Sports</option>
                <option value = "electronics">Electronics</option>
                <option value = "books">Books</option>
                <option value = "stationary">Stationary</option>
                </select>
                </li>
                <li className = "searchBar">
            <input type = "text" className = "inputbar" placeholder = "Search Here ">    
            </input>
            </li>
            <li id = "id"  className ="partOfNav">Login/Signup</li>
                </ul>
        </nav>        
            
        
        <hr className = "headerLine"></hr>
        </div>
    )
}

export default Navbar
