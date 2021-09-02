import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NOT_FOUND from './Not_Found';
import Spinner from '../components/Spinner';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall, faBook, faGamepad, faShoppingCart, faSplotch, faStore } from '@fortawesome/free-solid-svg-icons';

function Buy() {
    const { category } = useParams()
    console.log(category)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)

    useEffect(() => {
        setLoading(true)
        category === 'All' ? axios.get('/api/items')
            .then(res => {
                setItems(res.data)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                setErr(true)
            })
            :
            axios.get(`/api/items/filter?categories=${category}`)
                .then(res => {
                    setItems(res.data)
                    setLoading(false)
                })
                .catch(err => {
                    setLoading(false)
                    setErr(true)
                })
    }, [category])


    const update = (id) => {
        const newItems = items.filter(item => item._id !== id)
        setItems(newItems)
    };

    if (err === false) {
        return (
            <>
                <section>
                    <div className="container-fluid my-5 px-4">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="row px-2">
                                    <div className="col-12 d-grid"><Button as={Link} to='/buy/All' className='non-outlined-btn' variant='transparent'><FontAwesomeIcon size='lg' icon={faStore} /> <span className='h4 ms-2'>All</span> </Button> </div>
                                    <hr />
                                    <div className="col-12 d-grid"><Button as={Link} to='/buy/Sports' className='non-outlined-btn' variant='transparent'><FontAwesomeIcon size='lg' icon={faBasketballBall} /> <span className='h4 ms-2'>Sports</span> </Button> </div>
                                    <hr />
                                    <div className="col-12 d-grid"><Button as={Link} to='/buy/Books' className='non-outlined-btn' variant='transparent'><FontAwesomeIcon size='lg' icon={faBook} /> <span className='h4 ms-2'>Books</span> </Button> </div>
                                    <hr />
                                    <div className="col-12 d-grid"><Button as={Link} to='/buy/Games' className='non-outlined-btn' variant='transparent'><FontAwesomeIcon size='lg' icon={faGamepad} /> <span className='h4 ms-2'>Games</span> </Button> </div>
                                    <hr />
                                    <div className="col-12 d-grid"><Button as={Link} to='/buy/Utilities' className='non-outlined-btn' variant='transparent'><FontAwesomeIcon size='lg' icon={faSplotch} /> <span className='h4 ms-2'>Utilities</span> </Button> </div>
                                    <hr />
                                    <div className="col-12 d-grid"><Button as={Link} to='/buy/Other' className='non-outlined-btn' variant='transparent'><FontAwesomeIcon size='lg' icon={faShoppingCart} /> <span className='h4 ms-2'>Other</span> </Button> </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8" style={{ border: '1px solid #aaaaaa', borderRadius: '10px' }}>
                                <div className="row">
                                    <div className="col-12 h2 p-3 text-center bg-light rounded" style={{ borderBottom: '1px solid #aaaaaa' }} >
                                        <span>{category + ' '}</span>
                                        {
                                            items.length > 0 && loading === false ?  <span>{'('}{items.length}{')'}</span> : null
                                        }
                                    </div>
                                    <div className="col-12 pt-3 pb-4" >
                                        {
                                            loading ? <Spinner /> : <ItemList items={items} update={update} removeSold={true} removeFav={false} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    } else {
        return (
            <NOT_FOUND />
        )
    }

}
export default Buy;

