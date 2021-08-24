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
                images:''
            }
        ],
        number: 0
    };

    componentDidMount() {
        const { user } = this.props
        axios.get(`/api/user/favourites/${user}`)
            .then(res => {
                let size = res.data.length
                this.setState({
                    items: res.data,
                    number: size
                });
            })
    };

    render() {
        const favs = true;
        const update = () => {
            const { user } = this.props
            axios.get(`/api/user/favourites/${user}`)
                .then(res => {
                    let size = res.data.length
                    this.setState({
                        items: res.data,
                        number: size
                    });
                })
        }
        return (
            <>
                <div className="results">
                    <h2>{this.state.number} favourites...</h2>
                </div>
                <div>
                    <ItemList items={this.state.items} update={update} favs={favs} />
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

