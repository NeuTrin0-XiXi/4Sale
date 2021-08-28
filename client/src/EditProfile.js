import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Combined.css';
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
                    const newUser = {
                        ...this.props.user,
                        mobile: mobile1
                    }
                    this.props.Update(newUser);
                    alert("Your phone number was updated...")
                })
        }
        const handleChange = (e) => {
            this.setState({
                mobile1: e.target.value
            })
        }
        const { name, email, profilePic, mobile } = this.props.user
        return (
            <div className="container my-5">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="profile-card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={profilePic} alt="Admin" className="rounded-circle" width={100} />
                                        <div className="mt-3">
                                            <h4>{name}</h4>
                                            <p className="text-secondary mb-1">IIT Indore Student</p>
                                            <p className="text-muted font-size-sm">{email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                          {name}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                          {email}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            (239) 816-9029
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {mobile}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            Bay Area, San Francisco, CA
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <button className="btn btn-info ">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        Update: (user) => {
            dispatch({ type: 'UPDATE_USER', payload: user })
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);