import React, { Component } from 'react';
import ItemList from './components/ItemList';
import axios from 'axios';
import { withRouter } from 'react-router';

class Buy extends Component {
    state = {
        items: [
            {
                _id: '',
                title: '',
                price: '',
                images: []

            }
        ],
        number: 0,
        loading: true
    };

    componentDidMount() {
        const category = this.props.location.pathname.slice(5);
        axios.get(`/api/items/filter?categories=${category}`)
            .then(res => {
                let size = res.data.length
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
    componentDidUpdate(prevProps) {
        if (this.props.category !== prevProps.category) {
            this.setState({
                ...this.state,
                loading: true
            });
            const category = this.props.location.pathname.slice(5);
            axios.get(`/api/items/filter?categories=${category}`)
                .then(res => {
                    let size = res.data.length
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
        }
    };

    render() {
        const category = this.props.match.params.category;
        const update = (id) => {
            const newItems = this.state.items.filter(item => item._id !== id)
            this.setState({
                ...this.state,
                items: newItems,
                number: newItems.length
            });
        };
        if (this.state.loading) {
            return (
                <div className="loading">
                    <h3>Loading...</h3>
                </div>
            )
        } else {
            return (
                <>
                    <div className="results">
                        <h1>{category}</h1>
                        <h2>Found {this.state.number} results...</h2>
                    </div>
                    <div>
                        <ItemList items={this.state.items} update={update} removeSold={true} removeFav={false} />
                    </div>
                </>
            );
        }
    }
}
export default withRouter(Buy);

