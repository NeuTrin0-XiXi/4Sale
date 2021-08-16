import React from 'react';
import './Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';


class Home extends Component {

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

  componentDidMount() {
    axios.get('/api/items')
      .then(res => {
        this.setState({
          items: res.data
        });
        console.log(this.state);
      })
  }

  render() {

    const textColor = {
      color: 'black',
      textDecoration: 'none'
    };
    return (
      <div>
        <div id="myCarousel" className="container-fluid carousel slide crousalCustomEdit" data-bs-ride="carousel">
          <div className="carousel-inner crousalCustomEdit">
            <div className="carousel-item active crousalCustomEdit ">
              <img src="https://source.unsplash.com/1600x900/?ocean" className="bd-placeholder-img" />
            </div>
            <div className="carousel-item ">
              <img src="https://source.unsplash.com/1600x900/?thunder" className="bd-placeholder-img" />

              <div className="container ">
                <div className="carousel-caption text-end ">
                  <h1>One more for good measure.</h1>
                  <p>Some representative placeholder content for the third slide of this carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
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
        <ItemList items={this.state.items} />
        <br /><br /><br /><br />
      </div>
    )
  }
}

export default Home;
