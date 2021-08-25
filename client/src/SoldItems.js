import React, { Component } from 'react';
import ItemList from './components/ItemList';
import axios from 'axios';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Buy extends Component {
    state = {
        items: [
            {
                _id: '',
                title: '',
                price: '',
                images: ''
            }
        ],
        number: 0
    };

    componentDidMount() {
        const { user } = this.props
        axios.get(`/api/user/sold/${user}`)
            .then(res => {
                this.setState({
                    items: res.data,
                    number: res.data.length
                });
            })
    };


    render() {
        const update = (id) => {
            const newItems = this.state.items.filter(item => item._id !== id);
            this.setState({
                items: newItems,
                number: newItems.length
            });
        }
        return (
            <>
                <div className="results">
                    <h2>Posted Ad for {this.state.number} items...</h2>
                </div>
                <div>
                    <ItemList items={this.state.items} update={update} removeSold={true} removeFav={false} />
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user._id
    }
}
export default withRouter(connect(mapStateToProps)(Buy));

