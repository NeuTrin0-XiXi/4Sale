import React, { Component } from 'react';
import ItemList from './components/ItemList';
import axios from 'axios';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Favourites extends Component {
    state = {
        items: [
            {
                _id: '',
                title: '',
                price: '',
                images: ''
            }
        ],
        number: 0,
        loading: true
    };

    componentDidMount() {
        const { user } = this.props
        axios.get(`/api/user/favourites/${user._id}`)
            .then(res => {
                const size = res.data.length
                this.setState({
                    items: res.data,
                    number: size,
                    loading: false
                });
            })
            .catch(err => {
                this.setState({
                    ...this.state,
                    loading: false
                })
            })
    };

    render() {
        const update = (id) => {
            const newItems = this.state.items.filter(item => item._id !== id);
            this.setState({
                ...this.state,
                items: newItems,
                number: newItems.length
            });
        }
        if (this.state.loading) {
            return (
                <div className="loading">
                    <h3>Loading...</h3>
                </div>
            )
        }
        return (
            <>
                <div className="results">
                    <h2>{this.state.number} favourites...</h2>
                </div>
                <div>
                    <ItemList items={this.state.items} update={update} removeFav={true} removeSold={false} />
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favourites));

