import React from 'react';
// import './Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import axios from 'axios';
import ItemList from '../components/ItemList';
import Deck from '../components/Deck';

// function List(props) {
//   if (props.length !== 0) {
//     return (
//       <ItemList items={props.items} update={props.update} removeFav={props.remove} />
//     )
//   } else {
//     return null
//   }
// }
class Home extends Component {

    state = {
        items: [
            // {
            // _id: '',
            // title: '',
            // price: '',
            // date: ''

            // }
        ]
    }

    componentDidMount() {
        axios.get('/api/items')
            .then(res => {
                this.setState({
                    items: res.data
                });
            })
    }

    render() {
        const items = this.state.items;
        const update = (id) => {
            this.setState({
                ...this.state,
                items: items.filter(item => item._id !== id)
            });
        };

        return (
            <>
                <div className='container my-3' >
                    <div>
                        <h3 className='text-center' ><b>Recently Added</b></h3>
                    </div>
                    <div>
                        <Deck items={items} update={update} removeFav={false} removeSold={true} />
                    </div>
                </div>
            </>
        )
    }
}

export default Home;
