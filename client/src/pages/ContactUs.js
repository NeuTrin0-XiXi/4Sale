import React from 'react'

const ContactUs = (props) => {
    const handleSubmit = (e) => {
        alert("This page is non-functional...");
        e.preventDefault();
    }

    return (
        <>
            <div className="container my-5 bg-light " style={{borderRadius: '10px'}}>
                <div className="row gutters">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row row-cols-sm-1 text-center" >
                                    <div className="col-12 contactInfoElement"><h4><b>Contact Information</b></h4></div>
                                    <div className="col-12 contactInfoElement"><strong><u>Phone no</u> :918XXXXXXX</strong></div>
                                    <div className="col-12 contactInfoElement"><strong><u>e-mail Id</u>: 4Sale@iiti.ac.in</strong></div>
                                    <div className="col-12 contactInfoElement"><strong><u>Location</u> : Khandwa road, Simrol,Indore, M.P. India</strong></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ___ */}

                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 bg-light">
                        <div className="card h-100">
                            <div className="card-body bg-light">
                                <div className="row gutters text-center">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <h2 className="mb-2 text-primary contactUsTitle">Contact Us</h2><br />
                                    </div>
                                    <br /><br />
                                    <form className="d-flex justify-content-center align-items-center flex-column bd-highlight mb-3" onSubmit={handleSubmit}>
                                        <div className=" col-12 ">
                                            <div className="form-group">
                                                <label htmlFor="fullName">Full Name</label>
                                                <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
                                            </div>
                                            <br />
                                        </div>
                                        <div className=" col-12">
                                            <div className="form-group">
                                                <label htmlFor="eMail">Email</label>
                                                <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className=" col-12">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone</label>
                                                <input type="text" className="form-control" id="phone" placeholder="Enter phone number" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className=" col-12">
                                            <div className="form-group">
                                                <label htmlFor="enterMessage">Write a Message</label>
                                                <textarea className="form-control contactUsMessage" id="message" placeholder="Enter your message here..." />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="col-12">
                                            <div className="">
                                                <button type="submit" className="btn btn-success col-md-4 customColor">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}

export default ContactUs;
