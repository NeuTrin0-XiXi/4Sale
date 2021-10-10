import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import axios from 'axios';
import Deck from '../components/Deck';
import HomeSvg from '../svgs/HomeSvg';
import Spinner from '../components/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall, faBook, faGamepad, faReceipt, faShoppingCart, faSplotch } from '@fortawesome/free-solid-svg-icons';
import NOT_FOUND from './Not_Found';

class Home extends Component {

    state = {
        loading: true,
        error: false,
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
                this.setState({
                    ...this.state,
                    allItems: res.data.slice(0, 8),
                    Sports: res.data.filter(item => item.categories.includes('Sports')),
                    Books: res.data.filter(item => item.categories.includes('Books')),
                    Games: res.data.filter(item => item.categories.includes('Games')),
                    Utilities: res.data.filter(item => item.categories.includes('Utilities')),
                    Other: res.data.filter(item => item.categories.includes('Other')),
                    loading: false
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    ...this.state,
                    error: true,
                    loading: false
                })
            })
    }

    render() {
        const { allItems, Sports, Books, Games, Utilities, Other, loading, error } = this.state;
        const update = (id) => {
            this.setState({
                ...this.state,
                allItems: allItems.filter(item => item._id !== id),
                Sports: Sports.filter(item => item._id !== id),
                Books: Books.filter(item => item._id !== id),
                Games: Games.filter(item => item._id !== id),
                Utilities: Utilities.filter(item => item._id !== id),
                Other: Other.filter(item => item._id !== id)
            });
        };
        return (
            <>
                <div className='container-fluid d-flex justify-content-center mb-4 ' style={{
                    height: '25vw', backgroundColor: '#fff',
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/always-grey.png")'
                }} >
                    <div className="d-flex flex-column" style={{ width: '75vw', padding: '20px 10px' }}>
                        <h2  style={{ fontSize: '3vw', fontWeight: 'bold' }} >Every Purchase will be made with pleasure.</h2>
                        <p style={{ fontSize: '2vw' }} >Login with Institute Id.</p>
                    </div>
                    <HomeSvg />
                </div>
                {
                    loading ? <Spinner /> : error === false ?
                        <section className='container-fluid' >
                            {
                                allItems.length > 0 ?
                                    <div style={{ minHeight: '300px' }} className='container py-3 bg-light' >
                                        <div className='py-2 bg-secondary text-warning container' style={{ borderBottom: '0.5px dotted grey', borderRadius: '10px 10px 0 0' }} >
                                            <h4 className='text-center mb-0' ><b><FontAwesomeIcon icon={faReceipt} /> Recently Added</b></h4>
                                        </div>
                                        <div className='container' >
                                            <Deck items={allItems} update={update} removeFav={false} removeSold={true} />
                                        </div>
                                    </div> : null
                            }


                            {
                                Sports.length > 0 ?
                                    <div style={{ minHeight: '300px' }} className='container py-3 bg-light' >
                                        <div className='py-2 bg-secondary text-warning container' style={{ borderBottom: '0.5px dotted grey', borderRadius: '10px 10px 0 0' }} >
                                            <h4 className='text-center mb-0' ><b><FontAwesomeIcon icon={faBasketballBall} /> Sports</b></h4>
                                        </div>
                                        <div className='container' >
                                            <Deck items={Sports} update={update} removeSold={true} />
                                        </div>
                                    </div> : null
                            }


                            {
                                Books.length > 0 ?
                                    <div style={{ minHeight: '300px' }} className='container py-3 bg-light' >
                                        <div className='py-2 bg-secondary text-warning container' style={{ borderBottom: '0.5px dotted grey', borderRadius: '10px 10px 0 0' }} >
                                            <h4 className='text-center mb-0' ><b><FontAwesomeIcon icon={faBook} /> Books</b></h4>
                                        </div>
                                        <div className='container' >
                                            <Deck items={Books} update={update} removeFav={false} removeSold={true} />
                                        </div>
                                    </div> : null
                            }


                            {
                                Games.length > 0 ?
                                    <div style={{ minHeight: '300px' }} className='container py-3 bg-light' >

                                        <div className='py-2 bg-secondary text-warning container' style={{ borderBottom: '0.5px dotted grey', borderRadius: '10px 10px 0 0' }} >
                                            <h4 className='text-center mb-0' ><b><FontAwesomeIcon icon={faGamepad} /> Games</b></h4>
                                        </div>
                                        <div className='container' >
                                            <Deck items={Games} update={update} removeFav={false} removeSold={true} />
                                        </div>
                                    </div> : null
                            }

                            {
                                Utilities.length > 0 ?
                                    <div style={{ minHeight: '300px' }} className='container py-3 bg-light' >

                                        <div className='py-2 bg-secondary text-warning container' style={{ borderBottom: '0.5px dotted grey', borderRadius: '10px 10px 0 0' }} >
                                            <h4 className='text-center mb-0' ><b><FontAwesomeIcon icon={faSplotch} /> Utilities</b></h4>
                                        </div>
                                        <div className='container' >
                                            <Deck items={Utilities} update={update} removeFav={false} removeSold={true} />
                                        </div>
                                    </div> : null
                            }


                            {
                                Other.length > 0 ?
                                    <div style={{ minHeight: '300px' }} className='container py-3 bg-light' >

                                        <div className='py-2 bg-secondary text-warning container' style={{ borderBottom: '0.5px dotted grey', borderRadius: '10px 10px 0 0' }} >
                                            <h4 className='text-center mb-0' ><b><FontAwesomeIcon icon={faShoppingCart} /> Others</b></h4>
                                        </div>
                                        <div className='container' >
                                            <Deck items={Other} update={update} removeSold={true} removeFav={false} />
                                        </div>
                                    </div> : null
                            }

                        </section> :
                        <NOT_FOUND />
                }

            </>
        )
    }
}

export default Home;
