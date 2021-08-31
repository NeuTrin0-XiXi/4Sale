import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

function BuyBtn(props) {
    const { user, auth } = props;
    const { id } = props;
    const handleBuy = () => {
        if (auth) {
            axios.put(`/api/items/notify/${id}`, {
                notification: {
                    message: `wants to buy ${props.title}`,
                    userName: user.name,
                    userEmail: user.email,
                    mobile: user.mobile,
                    dp: user.profilePic
                }
            })
                .then(res => {
                    toast.success(res.data);
                })
                .catch(err=>{
                    toast.error("Failed to notify")
                })
        }
        else {
            toast.error("Please Login first ");
        }
    };
    return (
        <Button onClick={() => { handleBuy() }} type="button" className="btn-warning non-outlined-btn btn-md mr-1 mb-2">Buy now</Button>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        auth: state.Authorised
    }
}

export default connect(mapStateToProps)(BuyBtn);