import React from 'react';
// import './Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';

function List(props) {
  if (props.length !== 0) {
    return (
      <ItemList items={props.items} favs={props.favs} />
    )
  } else {
    return null
  }
}
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
    const favs = false;
    const items = this.state.items;
    return (
      <div>
        <div id="myCarousel" className="container-fluid carousel slide crousalCustomEdit" data-bs-ride="carousel">
          <div className="carousel-inner crousalCustomEdit">
            <div className="carousel-item active crousalCustomEdit ">
              <img src="https://source.unsplash.com/1600x900/?ocean" alt="" className="bd-placeholder-img" />
            </div>
            <div className="carousel-item ">
              <img src="https://source.unsplash.com/1600x900/?thunder" alt="" className="bd-placeholder-img" />

              <div className="container ">
                <div className="carousel-caption text-end ">
                  <h1>One more for good measure.</h1>
                  <p>Some representative placeholder content for the third slide of this carousel.</p>
                  <p><button href="#" className="btn btn-lg btn-primary" >Browse gallery</button></p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <ol className="carousel-indicators ">
          <li type="button" data-target="#myCarousel" data-slide-to="0"  ></li>
          <li type="button" data-target="#myCarousel" data-slide-to="1" className="active" aria-current="true"></li>
          <li type="button" data-target="#myCarousel" data-slide-to="2"  ></li>
        </ol>
        {/* ______________________________________ */}
        <br /><br /><br />
        {/* ______________________________________ */}
        <div>
          <h3 style={{ fontFamily: 'Poppins' }}><b><u>Recently Added</u></b></h3>
        </div>
        <List length={items.length} items={items} favs={favs} />
        <br /><br /><br /><br />
      </div>
    )
  }
}

export default Home;
