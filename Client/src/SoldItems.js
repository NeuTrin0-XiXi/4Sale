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
        const update = (sold) => {
            this.setState({
                items: sold,
                number: sold.length
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

