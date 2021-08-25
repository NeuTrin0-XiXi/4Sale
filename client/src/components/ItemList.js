import React from 'react';
import '../Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container } from 'react-bootstrap';
import { withRouter } from 'react-router';
import Wish_Edit_Button from './Wish_Edit_Button';

function ItemList(props) {
    const items = props.items;
    const View = (_id) => {
        props.history.push(`/product/${_id}`);
    };
    if (items.length === 1 && items[0]._id === '') {
        return null;
    } else {
        return (
            <div className="card-deck ">
                <Container className="ContainerProperties">
                    {items ? items.map(({ _id, title, price, images }) => (
                        <Card style={{ width: '18rem', boxShadow: '0 2px 2px 0px rgba(0,0,0,0.5)' }} key={_id} >
                            <Card.Img onClick={() => View(_id)} src={images[0]} alt="item-img" style={{ cursor: "pointer" }} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    Rs. {price}
                                </Card.Text>
                                <Button variant="primary" onClick={() => View(_id)} type="button" id="customViewButton " className="btn btn-secondary" >View</Button>
                                <Wish_Edit_Button _id={_id} update={props.update} favs={props.favs} />
                            </Card.Body>
                        </Card>
                    )) : null}
                </Container>
            </div >
        );
    }
}

export default withRouter(ItemList);