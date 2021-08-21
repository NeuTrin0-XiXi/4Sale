import React from 'react'

export default function AboutUs() {
    return (
        <>
            <div className="container my-5 bg">
                <div className="row bg-light">
                    <h1 className="col block1aboutUs fw-bold">We are what we deliver</h1>
                    <img className=" col rounded-pill" alt="" src="about-us1.png" />

                </div>
            </div>



            <div className="container ">
                <div className="row ">
                    <img className="col rounded-pill" alt="" src="about-us2.jpg" />
                    <div className="col">
                        <h2 className=" HeaderBox ">Our Vision</h2>
                        <p className="paraAboutUs">We tend to serve the IITI community.Helpful for students to get
                            cost effective products without any trouble or hustle-bustle. Students also profit
                            by getting a chance to sell their used products instead of throwing them in trash.

                        </p>
                    </div>
                </div>
            </div>


            <div className="container my-5">
                <div className="row bg-light">
                    <div className="col">
                        <h2 className=" HeaderBox ">Who we are?</h2>
                        <p className="paraAboutUs">We are a group of undergraduates from IIT Indore. We have
                            started 4SALE as a course project with the basic idea to create a website which
                            can solve the most common problems students face during their college life which is
                            buying and selling things
                        </p>
                    </div>
                    <img className="bg-light col rounded-pill" alt="" src="about-us3.jpg" />
                </div>
            </div>



            <div className="container ">
                <div className="row ">
                    <img className="col rounded-pill" alt="" src="about-us4.jpg" />
                    <div className="col ">
                        <h2 className=" HeaderBox block4 ">Join our Team</h2>
                        <p className="paraAboutUs">Anyone interested can join our team. Below is the list of
                            our team members. You can contact anyone of us.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container bg-light my-5">
                <br />
                <h2 className="my-3 text-center fw-bold text-success">OUR TEAM </h2>
                <div className="row align-centre">
                    <div className="card col-auto mx-3 mb-3" style={{ width: "21rem" }}>

                        <div className="card-body">
                            <h3 className="card-title mb-3 mt-2">Arush Pradhan</h3>
                            <p className="card-text">Student at Indian Institute of Technology, Indore
                                <br />Batch : 2020-2024
                            </p>

                        </div>
                    </div>

                    <div className="card col-auto mx-3 mb-3" style={{ width: "21rem" }}>

                        <div className="card-body">
                            <h3 className="card-title mb-3 mt-2">Jaisurya Katla</h3>
                            <p className="card-text">Student at Indian Institute of Technology, Indore
                                <br />Batch : 2020-2024</p>

                        </div>
                    </div>

                    <div className="card col-auto mx-3 mb-3" style={{ width: "21rem" }}>

                        <div className="card-body">
                            <h3 className="card-title  mb-3 mt-2">Kanishka Goyal</h3>
                            <p className="card-text">Student at Indian Institute of Technology, Indore
                                <br />Batch : 2020-2024</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
