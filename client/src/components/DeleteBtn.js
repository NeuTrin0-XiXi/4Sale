import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

function DeleteBtn(props) {
    const { id, toHome } = props;
    const { user } = props;
    console.log(props);
    const Delete = () => {
        if (props.removeSold) {
            props.update(id);
        }
        const newUser = {
            ...user,
            soldItems: user.soldItems.filter(item => { return item !== id })
        }
        props.Update(newUser);
        axios.delete(`/api/items/${id}`)
            .then(() => {
                if (toHome) {
                    props.history.push('/');
                }
                axios({
                    method: 'DELETE',
                    url: `/api/user/sold/${user._id}`,
                    data: {
                        sold: id
                    }
                })
            })
    };
    return (
        <Button onClick={Delete} variant='light' className='text-danger' >
            <FontAwesomeIcon size='lg' icon={faTrash} />
        </Button>

    )
};
const mapStateToProps = (state) => {
    return {
        user: state.user,
        Auth: state.Authorised
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        Update: (user) => {
            dispatch({ type: 'UPDATE_USER', payload: user })
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteBtn));