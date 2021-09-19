import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfilePage.css';
import { connect } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function EditProfile(props) {
    const { name, email, imageUrl, mobile } = props.user
    const [mobileInput, setMobileInput] = useState('')
    const [visibility, setVisibility] = useState(false)
    const inputRef = useRef()
    const handleChange = (e) => {
        setMobileInput(e.target.value)
    }

    const handleSubmit = (e) => {
        setVisibility(!visibility)
        e.preventDefault();
        axios.put(`/api/user`, {
            mobile: mobileInput
        })
            .then(res => {
                const newUser = {
                    ...props.user,
                    mobile: mobileInput
                }
                props.Update(newUser);
                toast("Your phone number was updated...")
            })
            .catch(err => {
                toast.error('Something went wrong!')
                console.log(err)
            })
    }

    return (
        <div className="container my-5">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="profile-card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={imageUrl} alt="Admin" className="rounded-circle" width={100} />
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
                                        <h6 className="mb-0">Mobile</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {mobile}
                                    </div>
                                </div>
                                <hr />

                                {
                                    visibility ?
                                        <div className="row" style={{ display: visibility ? 'block' : 'none' }} >
                                            <form action="" >
                                                <label htmlFor="tel">Edit your mobile number</label>
                                                <input ref={inputRef} className='form-control' type="tel" maxLength='10' id='tel' placeholder={'xxxxxxxxxx'} onChange={handleChange} />
                                                <hr />
                                                <>
                                                    <button type='submit' className="btn btn-primary non-outlined-btn " onClick={handleSubmit} >Save</button>
                                                    <button type='reset' className="btn btn-danger non-outlined-btn ms-3 " onClick={() => setVisibility(!visibility)} >Cancel</button>
                                                </>
                                            </form>
                                        </div> : <button className="btn btn-primary non-outlined-btn " onClick={() => {
                                            setVisibility(!visibility)
                                            setTimeout(() => {
                                                inputRef.current.focus()
                                            }, 100);

                                        }
                                        } >Edit</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

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