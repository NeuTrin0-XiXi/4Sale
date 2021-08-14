import React, { Component } from 'react';
import ItemList from './components/ItemList';


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
    }

    //   componentDidMount() {
    //     axios.get(`/api/items/filter?categories=${this.props.query}`)
    //       .then(res => {
    //         let size=res.data.length
    //         this.setState({
    //           items: res.data,
    //           number:size
    //         });
    //       })
    render() {
        console.log(this.props);
        return (
            <>
                <div className="results">
                    Found {this.state.number} resluts...
                </div>
                <div>
                    <ItemList items={this.state.items} />
                </div>
            </>
        )
    }
}

export default Buy;

