import React, { Component } from 'react';
import ItemList from './components/ItemList';
import axios from 'axios';
import { withRouter } from 'react-router';

class Search extends Component {
    state = {
        items: [
            {
                _id: '',
                title: '',
                price: '',
                date: '',
                images: []

            }
        ],
        number: 0
    };

    componentDidMount() {
        const { query } = this.props
        axios.get(`/api/items/search?name=${query}`)
            .then(res => {
                const unique = [...new Map(res.data.map(item => [item['_id'], item])).values()];
                this.setState({
                    items: unique,
                    number: unique.length
                });
            })
    };
    componentDidUpdate(prevProps) {
        if (this.props.query !== prevProps.query) {
            const { query } = this.props
            axios.get(`/api/items/search?name=${query}`)
                .then(res => {
                    const unique = [...new Map(res.data.map(item => [item['_id'], item])).values()];
                    this.setState({
                        items: unique,
                        number: unique.length
                    });
                })
        }
    };

    render() {
        const { query } = this.props
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
                    <h1>Search: {query}</h1>
                    <h2>Found {this.state.number} results...</h2>
                </div>
                <div>
                    <ItemList items={this.state.items} update={update} removeSold={true} removeFav={false} />
                </div>
            </>
        );
    }
}
export default withRouter(Search);

