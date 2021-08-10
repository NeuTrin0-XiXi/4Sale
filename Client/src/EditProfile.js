import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Combined.css';
import EditProfilecss from './EditProfilecss.css';

const EditProfile = () => {
	return (
		<div className="container-fluid d-flex justify-content-center flex-column bd-highlight mb-3 ">

			<br /><br /><br /><br /><br />
			<div>
				<div className="container">
					<div className="row gutters">
						<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
							<div className="card h-100">
								<div className="card-body">
									<div className="account-settings">
										<div className="user-profile">
											<div className="user-avatar">
												<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
											</div>
											<h5 className="user-name">Yuki Hayashi</h5>
											<h6 className="user-email">yuki@Maxwell.com</h6>
										</div>
										<div className="about">
											<h5>About</h5>
											<p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* ___ */}

						<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
							<div className="card h-100">
								<div className="card-body">
									<div className="row gutters">
										<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
											<h6 className="mb-2 text-primary">Personal Details</h6>
										</div>
										<br /><br /><br />
										<div className="d-flex justify-content-center flex-column bd-highlight mb-3">
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
													<label for="changePassword">Change Password</label>
													<input type="text" className="form-control" id="phone" placeholder="Enter new password" />
												</div>
											</div>
											<br /><br /><br />
										</div>
									</div>

									<br />
									<div className="row gutters">
										<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
											<div className="container text-right">
												<button type="button" id="submit" name="submit" className="btn btn-success col-md-4 customColor">Update</button><br />
												<button type="button" id="submit" name="submit" className="btn btn-secondary col-md-4">Cancel</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br /><br /><br /><br /><br />
		</div>
	)
}

export default EditProfile