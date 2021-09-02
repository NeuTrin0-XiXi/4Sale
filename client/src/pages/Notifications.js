import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Notification.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import NOT_FOUND from './Not_Found';
import { toast } from 'react-toastify';


function Notifications(props) {
    const { user, authorised } = props
    function ApproveButton(props) {
        if (props.message.slice(0, 12) === "wants to buy") {
            return <button type="button" style={{ fontSize: '12px' }} className="btn p-0 non-outlined-btn btn-transparent" onClick={() => handleApprove(props.userEmail, props.userName, props.message, props.itemId)}> <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-success me-2' />Approve</button>
        } else {
            return null
        }
    };

    const handleDelete = (_id) => {
        const newUser = {
            ...user,
            notifications: user.notifications.filter(notif => notif._id !== _id)
        }
        props.Update(newUser);

        axios({
            method: 'DELETE',
            url: `/api/user/notif/${props.user._id}`,
            data: {
                id: _id
            }
        })
            .then(res => {
                toast.success('Deleted Successfully')
            })
    };

    const handleApprove = (userEmail, userName, message, itemId) => {
        axios.put(`/api/user/notif/${userEmail}`, {
            notification: {
                message: `approved buy-request for ${message.slice(13)}`,
                userName: user.name,
                userEmail: user.email,
                mobile: user.mobile,
                dp: user.profilePic
            },
            itemId: itemId
        })
            .then(res => {
                toast.success(res.data + `${userName}`)
            })
    }
    const { notifications } = props.user;

    return (<>
        <section className="section">
            <div className="section__container">
                {authorised ? notifications.length > 0 ? notifications.map(({ _id, message, userName, userEmail, mobile, dp, itemId }) => (
                    <div className="notification-list bg-light" key={_id}>
                        <div className="notification-list__image">
                            <img src={dp} alt="" style={{ width: 'inherit', height: 'inherit' }} />
                        </div>
                        <div className="notification-list__info">
                            <h2>{userName}{' '} {message} </h2>
                            <span className="hour">
                                {userEmail}
                            </span>
                            <span className="date">
                                {mobile}
                            </span>
                            <div  >
                                <ApproveButton message={message} userEmail={userEmail} userName={userName} itemId={itemId} />
                            </div >
                            <div className="delete btn" onClick={() => handleDelete(_id)}>
                                <FontAwesomeIcon icon={faTrash} className='text-danger' />
                            </div>
                        </div>
                    </div>
                )) : <div className="text-center">No Notifications!</div> : <NOT_FOUND />}
            </div>
        </section>
    </>

    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        authorised: state.Authorised
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
