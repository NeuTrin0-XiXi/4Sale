import React, { Component } from 'react';
import ItemList from '../components/ItemList';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import axios from 'axios';

class Orders extends Component {
    state = {
        orders: [],
        loading: true,
        error: false
    };

    componentDidMount() {
        const { user } = this.props
        axios.get(`/api/user/orders/${user._id}`)
            .then(res => {
                this.setState({
                    orders: [...this.state.orders, ...res.data],
                    loading: false
                })
            })

    };

    render() {
        if (this.state.loading) {
            return (
                <Spinner />
            )
        }
        return (
            <>
                <div className="results">
                    <h2 className='text-center py-3' >Your Orders</h2>
                </div>
                <div className='pb-5'>
                    <ItemList items={this.state.orders} removeSold={false} />
                </div>
            </>
        );
    }
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Orders));

