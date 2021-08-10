import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Combined.css';



const ContactUs = () => {

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Message Sucessfully Submitted...");
	}

	return (
		<div>
			<div>

				<br /><br /><br />
			</div>
			<div className="container">
				<div className="row gutters">
					<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
						<div className="card h-100">
							<div className="card-body">
								<div className="row row-cols-sm-1 " >
									<div className="col-12 contactInfoElement"><h4><b>Contact Information</b></h4></div>
									<div className="col-12 contactInfoElement"><strong><u>Phone no</u> :918XXXXXXX</strong></div>
									<div className="col-12 contactInfoElement"><strong><u>e-mail Id</u>: 4Sale@iiti.ac.in</strong></div>
									<div className="col-12 contactInfoElement"><strong><u>Location</u> : Khandwa road, Simrol,Indore, M.P. India</strong></div>



								</div>
							</div>
						</div>
					</div>

					{/* ___ */}

					<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 contactUsFormPart">
						<div className="card h-100">
							<div className="card-body">
								<div className="row gutters">
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
										<h2 className="mb-2 text-primary contactUsTitle"><u>Contact Us</u></h2>
									</div>
									<br /><br /><br />
									<form className="d-flex justify-content-center flex-column bd-highlight mb-3" onSubmit={handleSubmit}>
										<div className=" col-xxl-7 ">
											<div className="form-group">
												<label for="fullName">Full Name</label>
												<input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
											</div>
											<br />
										</div>
										<div className=" col-xxl-7">
											<div className="form-group">
												<label for="eMail">Email</label>
												<input type="email" className="form-control" id="eMail" placeholder="Enter email ID" />
											</div>
										</div>
										<br />
										<div className=" col-xxl-7">
											<div className="form-group">
												<label for="phone">Phone</label>
												<input type="text" className="form-control" id="phone" placeholder="Enter phone number" />
											</div>
										</div>
										<br />
										<div className=" col-xxl-7">
											<div className="form-group">
												<label for="enterMessage">Write a Message</label>
												<textarea className="form-control contactUsMessage" id="phone" placeholder="Enter your message here..." />
											</div>
										</div>
										<br /><br /><br />
									</form>
								</div>

								<br />
								<div className="row gutters">
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="container text-right">
											<button type="submit" className="btn btn-success col-md-4 customColor">Submit</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br /><br /><br /><br />
		</div>



	)
}

export default ContactUs
