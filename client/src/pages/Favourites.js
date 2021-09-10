import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
// import axios from 'axios';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';

function Favourites(props) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = props;

    useEffect(() => {
        if (!props.loading) {
            setItems(user.favourites);
            setLoading(false);
        }
    }, [user.favourites, props.loading]);

    return (
        loading ? <Spinner /> :
            <>
                <div className="results">
                    <h2 className='text-center py-3' >Favourites</h2>
                </div>
                <div className='pb-5'>
                    <ItemList items={items} removeSold={false} />
                </div>
            </>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        auth: state.Authorised,
        loading: state.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        Update: (user) => {
            dispatch({ type: 'UPDATE_USER', payload: user })
        }
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favourites));

