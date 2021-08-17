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
                price: ''
            }
        ],
        number: 0
    };

    componentDidMount() {
        const { user } = this.props
        axios.get(`/api/user/sold/${user}`)
            .then(res => {
                let size = res.data.length
                this.setState({
                    items: res.data,
                    number: size
                });
            })
    };

    render() {
        return (
            <>
                <div className="results">
                    <h2>Posted Ad for {this.state.number} items...</h2>
                </div>
                <div>
                    <ItemList items={this.state.items} />
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

