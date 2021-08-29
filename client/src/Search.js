// import React, { Component } from 'react';
// import ItemList from './components/ItemList';
// import axios from 'axios';
// import { useParams, withRouter } from 'react-router';

// class Search extends Component {
//     state = {
//         items: [
//             {
//                 _id: '',
//                 title: '',
//                 price: '',
//                 date: '',
//                 images: []
//             }
//         ],
//         number: 0,
//         loading: true
//     };

//     componentDidMount() {
//         const { query } = useParams();
//         console.log(query);
//         axios.get(`/api/items/search?name=${query}`)
//             .then(res => {
//                 const unique = [...new Map(res.data.map(item => [item['_id'], item])).values()];
//                 this.setState({
//                     items: unique,
//                     number: unique.length,
//                     loading: false
//                 })
//             })
//             .catch(err => {
//                 this.setState({
//                     ...this.state,
//                     loading: false
//                 })
//             })
//     };
//     componentDidUpdate(prevProps) {
//         if (this.props.query !== prevProps.query) {
//             this.setState({
//                 ...this.state,
//                 loading: true
//             });
//             const { query } = this.props
//             axios.get(`/api/items/search?name=${query}`)
//                 .then(res => {
//                     const unique = [...new Map(res.data.map(item => [item['_id'], item])).values()];
//                     this.setState({
//                         items: unique,
//                         number: unique.length,
//                         loading: false
//                     });
//                 })
//                 .catch(err => {
//                     this.setState({
//                         ...this.state,
//                         loading: false
//                     })
//                 })
//         }
//     };

//     render() {
//         const { query } = this.props
//         const update = (id) => {
//             const newItems = this.state.items.filter(item => item._id !== id)
//             this.setState({
//                 ...this.state,
//                 items: newItems,
//                 number: newItems.length
//             });
//         };
//         if (this.state.loading) {
//             return (
//                 <div className="loading">
//                     <h3>Loading...</h3>
//                 </div>
//             )
//         } else {
//             return (
//                 <>
//                     <div className="results">
//                         <h1>Search: {query}</h1>
//                         <h2>Found {this.state.number} results...</h2>
//                     </div>
//                     <div>
//                         <ItemList items={this.state.items} update={update} removeFav={false} />
//                     </div>
//                 </>
//             );
//         }
//     }
// }
// export default withRouter(Search);

import React, { useState, useEffect } from 'react';
import ItemList from './components/ItemList';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NOT_FOUND from './pages/Not_Found';
import Spinner from './components/Spinner';

function Buy() {
    const { query } = useParams()
    console.log(query)
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
                <div className="results">
                    <h1>{query}</h1>
                    <h2>Found {items.length} results...</h2>
                </div>
                <div>
                    <ItemList items={items} update={update} removeFav={false} />
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



