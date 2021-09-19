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
            axios.put(`/api/items/buy/${id}`, {
                notification: {
                    message: "wants to buy",
                    itemTitle: props.title,
                    mobile: user.mobile,
                    dp: user.imageUrl,
                    itemId: id
                }
            })
                .then(res => {
                    const newUser = {
                        ...user,
                        orders: [
                            { success: false, _id: id },
                            ...user.orders
                        ]
                    };
                    props.Update(newUser);
                    toast.success(res.data);
                })
                .catch(err => {
                    toast.error("Failed to notify seller");
                    console.log(err.message)
                })
        }
        else {
            toast.error("Please Login first ");
        }
    };
    return (
        <Button onClick={handleBuy} type="button" className="btn-warning non-outlined-btn btn-md mr-1 mb-2">Buy now</Button>
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