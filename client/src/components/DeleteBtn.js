import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';

function DeleteBtn(props) {
    const { id, toHome } = props;
    const { user } = props;
    const Delete = () => {
        axios.delete(`/api/items/${id}`)
            .then(() => {
                if (toHome) {
                    props.history.push('/');
                }

                if (props.removeSold) {
                    props.update(id);
                }

                const newUser = {
                    ...user,
                    soldItems: user.soldItems.filter(item => { return item._id !== id })
                }
                props.Update(newUser);

                axios({
                    method: 'DELETE',
                    url: `/api/user/sold/${user._id}`,
                    data: {
                        sold: id
                    }
                })
                    .then(() => {
                        toast.success("Ad deleted successfully")
                    })
            })
            .catch(() => {
                toast.catch(() => {
                    toast.error("Couldn't delete Ad!")
                })
            })
    };
    return (
        <Button onClick={Delete} variant='light' className='text-danger' >
            <FontAwesomeIcon icon={faTrash} />
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