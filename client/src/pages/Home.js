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
        allItems: [
            // {
            // _id: '',
            // title: '',
            // price: '',
            // date: ''

            // }
        ],
        Sports: [

        ],
        Books: [

        ],
        Games: [

        ],
        Utilities: [

        ],
        Others: [

        ]
    }

    componentDidMount() {
        axios.get('/api/items')
            .then(res => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    allItems: res.data
                });
            });
        axios.get(`/api/items/filter?categories=Sports`)
            .then(res => {
                this.setState({
                    ...this.state,
                    Sports: res.data
                })
            })
        axios.get(`/api/items/filter?categories=Books`)
            .then(res => {
                this.setState({
                    ...this.state,
                    Books: res.data
                })
            })
        axios.get(`/api/items/filter?categories=Games`)
            .then(res => {
                this.setState({
                    ...this.state,
                    Games: res.data
                })
            })
        axios.get(`/api/items/filter?categories=Utilities`)
            .then(res => {
                this.setState({
                    ...this.state,
                    Utilities: res.data
                })
            })
        axios.get(`/api/items/filter?categories=Others`)
            .then(res => {
                this.setState({
                    ...this.state,
                    Others: res.data
                })
            })
    }

    render() {
        const { allItems, Sports, Books, Games, Utilities, Others } = this.state;
        const update = (id) => {
            this.setState({
                ...this.state,
                allItems: allItems.filter(item => item._id !== id)
            });
        };

        return (
            <>
                <div className='container-fluid d-flex justify-content-between mb-4 ' style={{
                    height: '40vw', backgroundColor: '#fff',
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/always-grey.png")'
                }} >
                    <div className="d-flex flex-column" style={{ width: '55vw', padding: '20px 10px' }}>
                        <h1 className="" style={{ fontSize: '5vw', fontWeight: 'bold' }} >Every Purchase will be made with pleasure.</h1>
                        <p style={{ fontSize: '3vw' }} >Login with Institude Id.</p>
                    </div>
                    <img src="/image-1-2.png" alt="" style={{ height: 'inherit' }} />
                </div>
                <div className='container my-4' >
                    <div>
                        <h3 className='text-center' ><b>Recently Added</b></h3>
                    </div>
                    <div>
                        <Deck items={allItems} update={update} removeFav={false} removeSold={true} />
                    </div>

                    <div>
                        <h3 className='text-center' ><b>Sports</b></h3>
                    </div>
                    <div>
                        <Deck items={Sports} update={update} removeFav={false} removeSold={true} />
                    </div>

                    <div>
                        <h3 className='text-center' ><b>Books</b></h3>
                    </div>
                    <div>
                        <Deck items={Books} update={update} removeFav={false} removeSold={true} />
                    </div>

                    <div>
                        <h3 className='text-center' ><b>Games</b></h3>
                    </div>
                    <div>
                        <Deck items={Games} update={update} removeFav={false} removeSold={true} />
                    </div>

                    <div>
                        <h3 className='text-center' ><b>Utilities</b></h3>
                    </div>
                    <div>
                        <Deck items={Utilities} update={update} removeFav={false} removeSold={true} />
                    </div>

                    <div>
                        <h3 className='text-center' ><b>Others</b></h3>
                    </div>
                    <div>
                        <Deck items={Others} update={update} removeFav={false} removeSold={true} />
                    </div>
                </div>
            </>
        )
    }
}

export default Home;
