import React, { Component } from 'react';
import SoldItemList from './components/SoldItemList';
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
                images:''
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
        const update = () => {
            const { user } = this.props
            axios.get(`/api/user/sold/${user}`)
                .then(res => {
                    this.setState({
                        items: res.data,
                        number: res.data.length
                    });
                })
        }
        return (
            <>
                <div className="results">
                    <h2>Posted Ad for {this.state.number} items...</h2>
                </div>
                <div>
                    <SoldItemList items={this.state.items} update={update} />
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

