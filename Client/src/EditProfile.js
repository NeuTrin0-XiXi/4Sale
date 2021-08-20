import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Combined.css';
import './EditProfilecss.css';
import { connect } from 'react-redux';
import axios from 'axios';

class EditProfile extends Component {
	state = {
		mobile1: ''
	}
	render() {
		const handleSubmit = (e) => {
			const { mobile1 } = this.state;
			e.preventDefault();
			axios.put(`/api/user/${this.props.user._id}`, {
				mobile: mobile1
			})
				.then(res => {
					console.log(res);
				})
		}
		const handleChange = (e) => {
			this.setState({
				mobile1: e.target.value
			})
		}
		const { name, email, profilePic, mobile } = this.props.user
		console.log(mobile);
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
													<img src={profilePic} alt="Admin" />
												</div>
												<h5 className="user-name">{name}</h5>
												<h6 className="user-email">{email}</h6>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* ___ */}

							<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
								<div className="card h-100">
									<div className="card-body">
										<form onSubmit={handleSubmit} id="profile">
											<div className="row gutters">
												<br /><br /><br />
												<div className="d-flex justify-content-center flex-column bd-highlight mb-3">
													<div className=" col-xxl-7">
														<div className="form-group">
															<label htmlFor="phone">Phone(Your phone number will be shown to others)</label>
															<input required onChange={handleChange} type="number" name="mobile" className="form-control" id="phone" placeholder={`${mobile}`} />
														</div>
													</div>
													<br />
													<br /><br /><br />
												</div>
											</div>
											<br />
											<div className="row gutters">
												<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
													<div className="container text-right">
														<button type="submit" id="submit" name="submit" className="btn btn-success col-md-4 customColor">Update</button><br />
														<button type="reset" id="cancel" name="cancel" className="btn btn-secondary col-md-4">Cancel</button>
													</div>
												</div>
											</div>
										</form>
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
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}
export default connect(mapStateToProps)(EditProfile);