import React, { Component } from 'react';
import ItemList from './components/ItemList';
// import { useParams } from 'react-router';
import axios from 'axios';
import { withRouter } from 'react-router';

class Buy extends Component {
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
        console.log(this.props);
        const category = this.props.match.params.category;
        axios.get(`/api/items/filter?categories=${category} `)
            .then(res => {
                let size = res.data.length
                this.setState({
                    items: res.data,
                    number: size
                });
            })
    };

    render() {
        const category = this.props.match.params.category;
        return (
            <>
                <div className="results">
                    Found {this.state.number} resluts...
                    <h1>Buy Page {category}</h1>
                </div>
                <div>
                    <ItemList items={this.state.items} />
                </div>
            </>
        );
    }
}
export default withRouter(Buy);

