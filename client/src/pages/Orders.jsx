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
    const { userId } = props

    useEffect(() => {

        if (userId !== '') {
            axios.get(`/api/user/orders/${userId}`)
                .then(res => {
                    setOrders(res.data)
                    setLoading(false)
                    console.log(res.data)
                })
                .catch(e => {
                    setLoading(false)
                    setErr(true)
                    console.log(e)
                })
        }

    }, [userId])

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
        userId: state.user._id
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

