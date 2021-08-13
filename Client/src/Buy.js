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
        ]
    }

    //   componentDidMount() {
    //     axios.get('/api/items')
    //       .then(res => {
    //         this.setState({
    //           items: res.data
    //         });
    //       })
    render() {
        console.log(this.props);
        return (
            <div>
                <ItemList items={this.state.items} />
            </div>
        )
    }
}

export default Buy;

