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
        number: 0
    };

    componentDidMount() {
        const category = this.props.location.pathname.slice(5);
        axios.get(`/api/items/filter?categories=${category}`)
            .then(res => {
                let size = res.data.length
                this.setState({
                    items: res.data,
                    number: size
                });
            })
    };
    componentDidUpdate(prevProps) {
        if (this.props.category !== prevProps.category) {
            const category = this.props.location.pathname.slice(5);
            axios.get(`/api/items/filter?categories=${category}`)
                .then(res => {
                    let size = res.data.length
                    this.setState({
                        items: res.data,
                        number: size
                    });
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
export default withRouter(Buy);
