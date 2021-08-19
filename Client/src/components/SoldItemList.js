import React from 'react';
import '../Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';

function ItemList(props) {
    const { items } = props;
    const { user } = props;

    const View = (_id) => {
        props.history.push(`/product/${_id}`);
        window.location.reload('forcedReload', true)
    };

    const Delete = (_id) => {
        axios.delete(`/api/items/${_id}`)
            .then(res => {
                axios({
                    method: 'DELETE',
                    url: `/api/user/sold/${user._id}`,
                    data: {
                        sold: _id
                    }
                })
                    .then(res => {
                        const newUser = {
                            ...user,
                            soldItems: res.data.soldItems
                        }
                        props.Update(newUser);
                        // props.update(res.data.soldItems);
                    })
            })
    };

    return (
        <div className="card-deck ">
            <Container className="ContainerProperties">
                {items.map(({ _id, title, price }) => (
                    <div className="card customCard" key={_id}>
                        <div id="image-container">
                            <img onClick={() => View(_id)} className="card-img-top cardImageCustom" src={`/uploads/${_id}-1`} alt="" style={{ cursor: "pointer" }} />
                        </div>
                        <hr />
                        <div className="card-body customCardbody">
                            <h3 className="card-title cardText">{title}</h3>
                            <h4 className="card-title cardText">Rs. {price}</h4>
                            <button onClick={() => View(_id)} type="button" id="customViewButton" className="btn btn-secondary" >View</button>
                            <button onClick={() => Delete(_id)} type="button" id="customDelButton" className="btn btn-danger" >Delete</button>
                        </div>
                    </div>
                ))}

            </Container>
        </div >
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        Update: (user) => {
            dispatch({ type: 'UPDATE_USER', payload: user })
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemList));