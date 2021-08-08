import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Combined from './Combined.css';

const ContactUs = () => {
	return (
		<div>
			<div>

				<br /><br /><br />
			</div>
			<div class="container">
				<div class="row gutters">
					<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
						<div class="card h-100">
							<div class="card-body">
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

					<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 contactUsFormPart">
						<div class="card h-100">
							<div class="card-body">
								<div class="row gutters">
									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
										<h2 class="mb-2 text-primary contactUsTitle"><u>Contact Us</u></h2>
									</div>
									<br /><br /><br />
									<div className="d-flex justify-content-center flex-column bd-highlight mb-3">
										<div class=" col-xxl-7 ">
											<div class="form-group">
												<label for="fullName">Full Name</label>
												<input type="text" class="form-control" id="fullName" placeholder="Enter full name" />
											</div>
											<br />
										</div>
										<div class=" col-xxl-7">
											<div class="form-group">
												<label for="eMail">Email</label>
												<input type="email" class="form-control" id="eMail" placeholder="Enter email ID" />
											</div>
										</div>
										<br />
										<div class=" col-xxl-7">
											<div class="form-group">
												<label for="phone">Phone</label>
												<input type="text" class="form-control" id="phone" placeholder="Enter phone number" />
											</div>
										</div>
										<br />
										<div class=" col-xxl-7">
											<div class="form-group">
												<label for="enterMessage">Write a Message</label>
												<textarea class="form-control contactUsMessage" id="phone" placeholder="Enter your message here..." />
											</div>
										</div>
										<br /><br /><br />
									</div>
								</div>

								<br />
								<div class="row gutters">
									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div class="container text-right">
											<button type="button" id="submit" name="submit" class="btn btn-success col-md-4 customColor">Submit</button>
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
