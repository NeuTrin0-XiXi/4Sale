import React from 'react'
import { connect } from 'react-redux'

function Notifications(props) {
    const handleDelete=(date)=>{
        
    }
    const { notifications } = props
    return (
        <div id="notif-card-container">
            {notifications.map(({ message, userName, userEmail, mobile,date }) => (
                <div className="card" key={Math.random()}>
                    <div className="card-body">
                        <h5 className="card-title">{userName} {message}</h5>
                        <p className="card-text">Email: {userEmail}</p>
                        <p className="card-text">Mobile: {mobile}</p>
                        <button type="button" className="btn btn-danger" onClick={()=>handleDelete(date)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        notifications: state.user.notifications
    }
}

export default connect(mapStateToProps)(Notifications);
