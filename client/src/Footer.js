import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const textColor = {
        color: 'white',
        textDecoration: 'none'
    };

    return (
        <div>
            <footer className="footer mt-auto py-3 bg-light footerBox custom-footer">
                <div className="container-fluid footerText">
                    <div className="row ">
                        <div className="col-md">
                            <span className="logo"> 4Sale</span>
                        </div>
                        <div className="col-md">
                            <Link to="/about-us" style={textColor}><span>About Us</span></Link>
                        </div>
                        <div className="col-md">
                            <Link to="/contact-us" style={textColor}><span>Contact Us</span> </Link>
                        </div>
                        <div className="col-md">
                            <span ><a href="https://www.google.com/maps/place/IIT+Indore/@22.5211819,75.9186987,17.97z/data=!4m5!3m4!1s0x3962efcccbce7145:0x784e8cb69818596b!8m2!3d22.5203597!4d75.9207231?hl=en" style={textColor}>Visit Us</a></span>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer;
