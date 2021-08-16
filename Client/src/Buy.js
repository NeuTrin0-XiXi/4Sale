import React, { Component } from 'react';
import ItemList from './components/ItemList';
import { useParams } from 'react-router';

function Buy() {
    let state = {
        items: [
            {
                _id: '',
                title: '',
                price: '',
                date: ''

            }
        ],
        number: 0
    }

    const { query } = useParams();
    console.log(query);
    // axios.get(`/api/items/filter?categories=${this.props.query}`)
    //     .then(res => {
    //         let size = res.data.length
    //         this.setState({
    //             items: res.data,
    //             number: size
    //         });
    //     })

    return (
        <>
            <div className="results">
                {/* Found {this.state.number} resluts... */}
                <h1>Buy Page {query}</h1>
            </div>
            <div>
                {/* <ItemList items={this.state.items} /> */}
            </div>
        </>
    )
}
export default Buy;

