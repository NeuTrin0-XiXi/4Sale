import React from 'react'
import Combined from "./Combined.css"
import Navbar from './Navbar';
import Footer from './Footer';

function AboutUs() {
    return (
        <div className="aboutUsPage">
            <Navbar />

            <div className="textImageBox1">
                <div className="textAboutUs1">
                    We are what we deliver
                </div>
                <div className="imageAboutUs1">
                    <img src="Pics n Icons/about us2.png" alt = "aboutUs Image"></img>
                </div>
            </div>
            <div className="textImageBox2">
                <div className="textAboutUs2">
                    <h4><strong>Our Vision</strong></h4>
                </div>
                <div className="imageAboutUs2">
                    <img src="Pics n Icons/about us2.png" alt = "aboutUs Image"></img>
                </div>
            </div>
            <div className="textImageBox1">
                <div className="textAboutUs1">
                    We are what we deliver
                </div>
                <div className="imageAboutUs1">
                    <img src="Pics n Icons/about us2.png" alt = "aboutUs Image"></img>
                </div>
            </div>
            <div className="textImageBox2">
                <div className="textAboutUs2">
                    We are what we deliver
                </div>
                <div className="imageAboutUs2">
                    <img src="Pics n Icons/about us2.png" alt = "aboutUs Image"></img>
                </div>
            </div>
            <div className="textImageBox1">
                <div className="textAboutUs1">
                    We are what we deliver
                </div>
                <div className="imageAboutUs1">
                    <img src="Pics n Icons/about us2.png" alt = "aboutUs Image"></img>
                </div>
            </div>
            <div>
            <Footer />

            </div>
        </div>
    )
}

export default AboutUs
