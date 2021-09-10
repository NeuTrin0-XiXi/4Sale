import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';

function Buy(props) {
    const { user } = props;
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState(user.soldItems);

    useEffect(() => {
        if (!props.loading) {
            setItems(user.soldItems);
            setLoading(false);
        }
    }, [user.soldItems, props.loading]);

    return (
        loading ? <Spinner /> :
            <>
                <div className="results">
                    <h2 className='text-center py-3'  >Your Ad</h2>
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
        loading: state.loading
    }
}
export default withRouter(connect(mapStateToProps)(Buy));

