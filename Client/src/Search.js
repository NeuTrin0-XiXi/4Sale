import React, { Component } from 'react';
import ItemList from './components/ItemList';
// import { useParams } from 'react-router';
import axios from 'axios';
import { withRouter } from 'react-router';

class Search extends Component {
    state = {
        items: [
            {
                _id: '',
                title: '',
                price: '',
                date: ''

            }
        ],
        number: 0
    };

    componentDidMount() {
        console.log(this.props)
        const query = this.props.location.pathname.slice(8);
        axios.get(`/api/items/search?name=${query}`)
            .then(res => {
                let size = res.data.length
                this.setState({
                    items: res.data,
                    number: size
                });
            })
    };

    render() {
        const query = this.props.match.params.query;
        return (
            <>
                <div className="results">
                    <h1>Search: {query}</h1>
                    <h2>Found {this.state.number} results...</h2>
                </div>
                <div>
                    <ItemList items={this.state.items} />
                </div>
            </>
        );
    }
}
export default withRouter(Search);

