import React from 'react'
import './AboutUs.css'

export default function AboutUs() {
    return (
        <>
            <div className="container-fluid mb-2 py-5 px-3">
                <div className="container d-flex box left">
                    <div className='py-3'>
                        <h1 className="col display-3">We are what we deliver</h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias facere adipisci vel voluptate reprehenderit veritatis nostrum obcaecati quas consequatur assumenda accusamus natus nisi suscipit magnam autem, repellat, quidem labore?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem fugiat reprehenderit error optio facilis unde incidunt exercitationem rerum, nostrum quos! Magni ducimus ullam quidem excepturi itaque, iure voluptatibus aliquid.
                        </p>
                    </div>
                    <div className='py-3'>
                        <img className="" alt="" src="about-us1.png" />
                    </div>
                </div>
            </div>

            <div className="container-fluid deep my-2 py-5 px-3">
                <div className="container d-flex box right">
                    <div className='py-3'>
                        <img className="" alt="" src="about-us2.jpg" />
                    </div>
                    <div className='py-3'>
                        <h2 className="display-3">Our Vision</h2>
                        <p className="lead">We tend to serve the IITI community.Helpful for students to get
                            cost effective products without any trouble or hustle-bustle. Students also profit
                            by getting a chance to sell their used products instead of throwing them in trash.

                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid my-2 py-5 px-3">
                <div className="container d-flex box left">
                    <div className='py-3'>
                        <h2 className="display-3  ">Who we are?</h2>
                        <p className="lead">We are a group of undergraduates from IIT Indore. We have
                            started 4SALE as a course project with the basic idea to create a website which
                            can solve the most common problems students face during their college life which is
                            buying and selling things
                        </p>
                    </div>
                    <div className='py-3'>
                        <img className="bg-light" alt="" src="about-us3.jpg" />
                    </div>
                </div>
            </div>

            <div className="container-fluid deep my-2 py-5 px-3">
                <div className="container d-flex box right">
                    <div className='py-3'>
                        <img className="col" alt="" src="about-us4.jpg" />
                    </div>
                    <div className='py-3'>
                        <h2 className="display-3 ">Join our Team</h2>
                        <p className="lead">Anyone interested can join our team. Below is the list of
                            our team members. You can contact anyone of us.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container bg-light my-2 py-5 px-3">
                <h2 className="mb-3 text-center display-3 text-success">Our Team </h2>
                <div className="row align-center">
                    <div className="card col-auto mx-auto mb-3" style={{ width: "18rem", boxShadow: '0 1px 2px  rgba(0,0,0,0.3)' }}>

                        <div className="card-body">
                            <h3 className="card-title mb-3 mt-2  ">Arush Pradhan</h3>
                            <p className="card-text ">Student at Indian Institute of Technology, Indore
                                <br />Batch : 2020-2024
                            </p>

                        </div>
                    </div>

                    <div className="card col-auto mx-auto mb-3" style={{ width: "18rem", boxShadow: '0 1px 2px  rgba(0,0,0,0.3)' }}>

                        <div className="card-body">
                            <h3 className="card-title mb-3 mt-2  ">Jaisurya Katla</h3>
                            <p className="card-text " >Student at Indian Institute of Technology, Indore
                                <br />Batch : 2020-2024</p>

                        </div>
                    </div>

                    <div className="card col-auto mx-auto mb-3" style={{ width: "18rem", boxShadow: '0 1px 2px  rgba(0,0,0,0.3)' }}>

                        <div className="card-body">
                            <h3 className="card-title  mb-3 mt-2">Kanishka Goyal</h3>
                            <p className="card-text ">Student at Indian Institute of Technology, Indore
                                <br />Batch : 2020-2024</p>

                        </div>
                    </div>
                    <div className="card col-auto mx-auto mb-3" style={{ width: "18rem", boxShadow: '0 1px 2px  rgba(0,0,0,0.3)' }}>

                        <div className="card-body">
                            <h3 className="card-title  mb-3 mt-2">Suman Jaiswal</h3>
                            <p className="card-text ">Student at Indian Institute of Technology, Indore
                                <br />Batch : 2020-2024</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
