import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


function Notifications(props) {
    const { user } = props
    function ApproveButton(props) {
        if (props.message.slice(0, 12) == "wants to buy") {
            return <button type="button" className="btn btn-success customNotifButtons" onClick={() => handleApprove(props.userEmail, props.userName, props.message)}>Approve</button>
        } else {
            return null
        }
    };

    const handleDelete = (_id) => {
        axios({
            method: 'DELETE',
            url: `/api/user/notif/${props.user._id}`,
            data: {
                id: _id
            }
        })
            .then(res => {
                const newUser = {
                    ...user,
                    notifications: res.data.notifications
                }
                props.Update(newUser);
            })
    };

    const handleApprove = (userEmail, userName, message) => {
        axios.put(`/api/user/notif/${userEmail}`, {
            notification: {
                message: `approved buy-request for ${message.slice(13)}`,
                userName: props.user.name,
                userEmail: props.user.email,
                mobile: props.user.mobile
            }
        })
            .then(res => {
                alert(res.data + `${userName}`)
            })
    }
    const { notifications } = props.user;
    return (
        <div id="notif-card-container">
            {notifications.map(({ _id, message, userName, userEmail, mobile }) => (
                <div className="card" id="customCard" key={_id}>
                    <div className="card-body" id="customCardBody">
                        <h3 className="card-title">{userName} {message}</h3>
                        <p className="card-text">Email: {userEmail}</p>
                        <p className="card-text">Mobile no.  {mobile}</p>
                        <ApproveButton message={message} userEmail={userEmail} userName={userName} />
                        <button type="button" className="btn btn-danger customNotifButtons" onClick={() => handleDelete(_id)}>Delete</button>
                    </div>
                </div>
            ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
