import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import axios from 'axios';

function Orders(props) {

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)
    const { user } = props

    useEffect(() => {
        if (!props.loading) {
            axios.get(`/api/user/orders`)
                .then(res => {
                    setOrders(res.data)
                    setLoading(false)
                })
                .catch(e => {
                    setErr(true)
                    console.log(e)
                })
        }

    }, [user._id, props.loading, user.orders])
    return (
        <>
            {
                loading ? <Spinner /> :
                    err ? null :
                        <>
                            {
                                err ? null :
                                    <>  <div className="results">
                                        <h2 className='text-center py-3' >Your Orders</h2>
                                    </div>
                                        <div className='pb-5'>
                                            <ItemList items={orders} removeSold={false} />
                                        </div>
                                    </>
                            }
                        </>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Orders));

