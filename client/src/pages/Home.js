import React from 'react';
// import './Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import axios from 'axios';
import Deck from '../components/Deck';
import HomeSvg from '../svgs/HomeSvg';
import Spinner from '../components/Spinner';

class Home extends Component {

    state = {
        loading: true,
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
        Other: [

        ]
    }

    componentDidMount() {
        axios.get('/api/items')
            .then(res => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    allItems: res.data,
                    loading: false
                });
            });
        axios.get(`/api/items/filter?categories=Sports`)
            .then(res => {
                this.setState({
                    ...this.state,
                    Sports: res.data,
                    loading: false
                })
            })
        axios.get(`/api/items/filter?categories=Books`)
            .then(res => {
                this.setState({
                    ...this.state,
                    Books: res.data,
                    loading: false
                })
            })
        axios.get(`/api/items/filter?categories=Games`)
            .then(res => {
                this.setState({
                    ...this.state,
                    Games: res.data,
                    loading: false
                })
            })
        axios.get(`/api/items/filter?categories=Utilities`)
            .then(res => {
                this.setState({
                    ...this.state,
                    Utilities: res.data,
                    loading: false
                })
            })
        axios.get(`/api/items/filter?categories=Other`)
            .then(res => {
                this.setState({
                    ...this.state,
                    Other: res.data,
                    loading: false
                })
            })
    }

    render() {
        const { allItems, Sports, Books, Games, Utilities, Other, loading } = this.state;
        const update = (id) => {
            console.log(id);
            this.setState({
                ...this.state,
                allItems: allItems.filter(item => item._id !== id),
                Sports: Sports.filter(item => item._id !== id),
                Books: Books.filter(item => item._id !== id),
                Games: Games.filter(item => item._id !== id),
                Utilities: Utilities.filter(item => item._id !== id),
                Other: Other.filter(item => item._id !== id)
            });
            console.log(this.state);
        };

        return (
            <>
                <div className='container-fluid d-flex justify-content-around mb-4 ' style={{
                    height: '30vw', backgroundColor: '#fff',
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/always-grey.png")'
                }} >
                    <div className="d-flex flex-column" style={{ width: '55vw', padding: '20px 10px' }}>
                        <h1 className="" style={{ fontSize: '5vw', fontWeight: 'bold' }} >Every Purchase will be made with pleasure.</h1>
                        <p style={{ fontSize: '3vw' }} >Login with Institute Id.</p>
                    </div>
                    <HomeSvg />
                </div>
                {
                    loading ? <Spinner /> :
                        <>
                            <div style={{ minHeight: '300px' }} className='container-fluid py-3' >
                                <div className='mt-2 border-bottom- container' style={{ borderBottom: '0.5px dotted grey' }} >
                                    <h3 className='text-center' ><b>Recently Added</b></h3>
                                </div>
                                <div className='container' >
                                    <Deck items={allItems} update={update} removeFav={false} removeSold={true} />
                                </div>
                            </div>


                            <div style={{ minHeight: '300px' }} className='container-fluid py-3 bg-light' >
                                <div className='mt-2 border-bottom- container' style={{ borderBottom: '0.5px dotted grey' }} >
                                    <h3 className='text-center' ><b>Sports</b></h3>
                                </div>
                                <div className='container' >
                                    <Deck items={Sports} update={update} removeFav={false} removeSold={true} />
                                </div>
                            </div>


                            <div style={{ minHeight: '300px' }} className='container-fluid py-3' >
                                <div className='mt-2 border-bottom- container' style={{ borderBottom: '0.5px dotted grey' }} >
                                    <h3 className='text-center' ><b>Books</b></h3>
                                </div>
                                <div className='container' >
                                    <Deck items={Books} update={update} removeFav={false} removeSold={true} />
                                </div>
                            </div>


                            <div style={{ minHeight: '300px' }} className='container-fluid py-3 bg-light' >

                                <div className='mt-2 border-bottom- container' style={{ borderBottom: '0.5px dotted grey' }} >
                                    <h3 className='text-center' ><b>Games</b></h3>
                                </div>
                                <div className='container' >
                                    <Deck items={Games} update={update} removeFav={false} removeSold={true} />
                                </div>
                            </div>


                            <div style={{ minHeight: '300px' }} className='container-fluid py-3' >

                                <div className='mt-2 border-bottom- container' style={{ borderBottom: '0.5px dotted grey' }} >
                                    <h3 className='text-center' ><b>Utilities</b></h3>
                                </div>
                                <div className='container' >
                                    <Deck items={Utilities} update={update} removeFav={false} removeSold={true} />
                                </div>
                            </div>


                            <div style={{ minHeight: '300px' }} className='container-fluid py-3 bg-light' >

                                <div className='mt-2 border-bottom- container' style={{ borderBottom: '0.5px dotted grey' }} >
                                    <h3 className='text-center' ><b>Others</b></h3>
                                </div>
                                <div className='container' >
                                    <Deck items={Other} update={update} removeFav={false} removeSold={true} />
                                </div>
                            </div>
                        </>
                }

            </>
        )
    }
}

export default Home;
