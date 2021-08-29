import React from 'react';
// import '../Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container } from 'react-bootstrap';
import { withRouter } from 'react-router';
import WISH_EDIT_BUTTON from './Wish_Edit_Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

function ItemList(props) {
    const items = props.items;
    const View = (_id) => {
        props.history.push(`/product/${_id}`);
    };
    if (items.length === 1 && items[0]._id === '') {
        return <div>No Items!</div>;
    } else {
        return (
            <div className="card-deck ">
                <Container className="d-flex flex-wrap justify-content-center gap-4">
                    {items.map(({ _id, title, price, images }) => (
                        <Card style={{ width: '16rem', boxShadow: '0 2px 2px 0px rgba(0,0,0,0.5)' }} key={_id} >
                            <Card.Img onClick={() => View(_id)} src={images[0]} alt="item-img" style={{ cursor: "pointer", height: '150px' }} />
                            <Card.Body>
                                <Card.Title >{title}</Card.Title>
                                <Card.Text>
                                   &#8377;    {price}
                                </Card.Text>
                                <Button variant="warning" onClick={() => View(_id)} type="button" id="customViewButton " ><FontAwesomeIcon icon={faCartPlus}/> Buy</Button>
                                <WISH_EDIT_BUTTON _id={_id} update={props.update} removeFav={props.removeFav} />
                            </Card.Body>
                        </Card>
                    )) }
                </Container>
            </div >
        );
    }
}

export default withRouter(ItemList);