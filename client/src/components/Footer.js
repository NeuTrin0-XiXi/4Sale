import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {

    const textColor = {
        color: 'white',
        textDecoration: 'none'
    };
    const column = {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '15px'
    }

    return (
        <>
            <div className="container-fluid " style={{ backgroundColor: '#333333' }} >
                <div className="row">
                    <div className="col-4" style={column}>
                        <span className="logo"> 4Sale</span>
                    </div>
                    <div className="col-8 text-light my-auto lead footer-title"  >
                        An Initiative by Student Gymkhana , IIT Indore ...
                    </div>
                    <div className="col-12 col-md-3" style={column}>
                        <Link to="/about-us" style={textColor}><h3>About Us</h3></Link>
                        <div>
                            <span><strong><u>Our Team</u></strong></span>
                            <br />
                            <span>Jaisurya Katla</span>
                            <br />
                            <span>Suman Jaiswal</span>
                            <br />
                            <span>Kanishka Goyal</span>
                            <br />
                            <span>Arush Pradhan</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-3" style={column}>
                        <Link to="/contact-us" style={textColor}><h3>Contact Us</h3> </Link>
                        <div style={{ position: 'relative', left: '30px' }}>
                            <span><strong><u>Phone no</u> :918XXXXXXX</strong></span>
                            <br />
                            <span><strong><u>e-mail Id</u>: 4Sale@iiti.ac.in</strong></span>
                        </div>
                    </div>
                    <div className="col-12 col-md-3" style={column}>
                        <h3 ><a href="https://www.google.com/maps/place/IIT+Indore/@22.5211819,75.9186987,17.97z/data=!4m5!3m4!1s0x3962efcccbce7145:0x784e8cb69818596b!8m2!3d22.5203597!4d75.9207231?hl=en" style={textColor}>Visit Us</a></h3>
                        <span>text text text</span>
                        <span>text text text</span>
                        <span>text text text</span>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer;
