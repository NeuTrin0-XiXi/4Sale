import React from 'react';
// import './Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';

class Home extends Component {

  state = {
    items: [
      // {
      // _id: '',
      // title: '',
      // price: '',
      // date: ''

      // }
    ],
    loading: true
  }

  componentDidMount() {
    axios.get('/api/items')
      .then(res => {
        this.setState({
          items: res.data,
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

  render() {
    const items = this.state.items;
    const update = (id) => {
      this.setState({
        ...this.state,
        items: items.filter(item => item._id !== id)
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
        <div>
          <div>
            <h3 style={{ fontFamily: 'Poppins' }}><b><u>Recently Added</u></b></h3>
            <ItemList items={items} update={update} removeFav={false} removeSold={true} />
          </div >
        </div >
      )
    }
  }
}

export default Home;
