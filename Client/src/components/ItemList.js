import React from 'react';
import '../Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router';
import WishList from './WishList';

function ItemList(props) {
    const { items } = props;

    const View = (_id) => {
        props.history.push(`/product/${_id}`);
        window.location.reload('forcedReload', true)
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
                            <button onClick={() => View(_id)} type="button" id="customViewButton " className="btn btn-secondary" >View</button>
                            <WishList _id={_id} update={props.update} favs={props.favs} />
                        </div>
                    </div>
                ))}

            </Container>
        </div >
    );
}

export default withRouter(ItemList);