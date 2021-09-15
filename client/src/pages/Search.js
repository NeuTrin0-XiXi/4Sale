import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NOT_FOUND from './Not_Found';
import Spinner from '../components/Spinner';

function Search() {
    const { query } = useParams()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`/api/items/search?name=${query}`)
            .then(res => {
                setItems(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
                setErr(true)
            })
    }, [query])


    const update = (id) => {
        const newItems = items.filter(item => item._id !== id)
        setItems(newItems)
    };

    if (loading) {
        return (
            <Spinner />
        )
    } else if (err === false) {
        return (
            <>
                <div className="results py-4">
                    <h1 className='text-center' >Results for {query}: </h1>
                </div>
                <div>
                    <ItemList items={items} update={update} removeSold={true} />
                </div>
            </>
        )
    } else {
        return (
            <NOT_FOUND />
        )
    }

}
export default Search;



