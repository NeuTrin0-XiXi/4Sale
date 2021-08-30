import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';

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
                    mobile: user.mobile
                }
            })
                .then(res => {
                    alert(res.data);
                })
        }
        else {
            alert("Please Login ");
        }
    };
    return (
        <Button onClick={() => { handleBuy() }} type="button" className="btn-warning btn-md mr-1 mb-2">Buy now</Button>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        auth: state.Authorised
    }
}

export default connect(mapStateToProps)(BuyBtn);