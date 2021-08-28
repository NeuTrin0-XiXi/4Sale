import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NOT_FOUND from './Not_Found';

function Buy() {
    const { category } = useParams()
    console.log(category)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)

    useEffect(() => {
        axios.get(`/api/items/filter?categories=${category}`)
            .then(res => {
                setItems(res.data)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                setErr(true)
            })
    }, [])


    const update = (id) => {
        const newItems = items.filter(item => item._id !== id)
        setItems(newItems)
    };

    if (loading) {
        return (
            <div className="loading">
                <h3>Loading...</h3>
            </div>
        )
    } else if (err === false) {
        return (
            <>
                <div className="results">
                    <h1>{category}</h1>
                    <h2>Found {items.length} results...</h2>
                </div>
                <div>
                    <ItemList items={items} update={update} removeSold={true} removeFav={false} />
                </div>
            </>
        )
    } else {
        return (
            <NOT_FOUND />
        )
    }

}
export default Buy;

