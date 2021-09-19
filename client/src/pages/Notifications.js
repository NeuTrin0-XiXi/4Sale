import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Notification.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import NOT_FOUND from './Not_Found';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';


function Notifications(props) {
    const { user, authorised, Update } = props
    const { notifications } = props.user;
    const [notifs, setNotifs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!props.loading) {
            setNotifs(notifications.reverse());
            setLoading(false)
        }
    }, [notifications, props.loading])


    function ApproveButton(props) {
        if (props.message === "wants to buy") {
            return <button type="button" style={{ fontSize: '12px' }} className="btn p-0 non-outlined-btn btn-transparent" onClick={() => handleApprove(props.buyerEmail, props.itemTitle, props.itemId, props.buyerName)}> <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-success me-2' />Approve</button>
        } else {
            return null
        }
    };

    const handleDelete = (_id) => {
        const newUser = {
            ...user,
            notifications: user.notifications.filter(notif => notif._id !== _id)
        }
        Update(newUser);

        axios.delete(`/api/user/notif/${_id}`)
            .then(() => {
                toast.success('Deleted Successfully')
            })
            .catch(() => {
                toast.error('Something went wrong')
            })
    };

    const handleApprove = (buyerEmail, itemTitle, itemId, buyerName) => {
        axios.put(`/api/user/approve/${buyerEmail}`, {
            _id: user._id,
            notification: {
                message: `approved buy-request for`,
                itemTitle: itemTitle,
                mobile: user.mobile,
                dp: user.imageUrl,
                itemId: itemId
            }
        })
            .then(res => {
                Update({
                    ...user,
                    notifications: res.data.notifications
                })
                toast.success(`${res.data.msg} ${buyerName}`)
            })
            .catch(err => {
                toast.error("Couldn't notify")
            })
    }

    return (
        loading ? <Spinner /> :
            <>
                <section className="section">
                    <div className="section__container">
                        {authorised ? notifications.length > 0 ? notifs.map(({ itemTitle, _id, message, userName, userEmail, mobile, dp, itemId }) => (
                            <div className="notification-list bg-light" key={_id}>
                                <div className="notification-list__image">
                                    <img src={dp} alt="" style={{ width: 'inherit', height: 'inherit' }} />
                                </div>
                                <div className="notification-list__info">
                                    <h2>{userName}{' '} {message}{' '}{itemTitle}</h2>
                                    <span className="hour">
                                        {userEmail}
                                    </span>
                                    <span className="date">
                                        {mobile}
                                    </span>
                                    <div  >
                                        <ApproveButton itemTitle={itemTitle} message={message} buyerEmail={userEmail} itemId={itemId} buyerName={userName} />
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
        authorised: state.Authorised,
        loading: state.loading
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
