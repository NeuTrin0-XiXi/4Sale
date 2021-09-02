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
                    dp: user.profilePic,
                    itemId: id
                }
            })
                .then(res => {
                    axios.put(`/api/user/order/${user._id}`, {
                        order: id
                    })
                        .then(res => {
                            ///upadate user in userReducer here after clicking buy btn
                            const newUser = {
                                ...user,
                                orders: [
                                    ...user.orders,
                                    { _id: id, success: false }
                                ]
                            };
                            props.Update(newUser);
                        })
                    toast.success(res.data);
                })
                .catch(err => {
                    toast.error("Failed to notify")
                })
        }
        else {
            toast.error("Please Login first ");
        }
    };
    return (
        <Button onClick={() => handleBuy()} type="button" className="btn-warning non-outlined-btn btn-md mr-1 mb-2">Buy now</Button>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        auth: state.Authorised
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        Update: (user) => {
            dispatch({ type: 'UPDATE_USER', payload: user })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyBtn);