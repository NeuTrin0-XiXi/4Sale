import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container } from 'react-bootstrap';
import WishBtn from './WishBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import DeleteBtn from './DeleteBtn';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function ItemList(props) {
    const { user, items, auth } = props

    if (items.length === 1 && items[0]._id === '') {
        return <div>No Items!</div>;
    } else {
        return (
            <div className="card-deck ">
                <Container className="d-flex flex-wrap justify-content-center gap-4">
                    {items.map(({ _id, title, price, images }) => (
                        <Card style={{ width: '16rem', boxShadow: '0 2px 2px 0px rgba(0,0,0,0.5)' }} key={_id} >
                            <Button as={Link} variant='transparent' to={`/product${_id}`}>
                                <Card.Img src={images[0]} alt="item-img" style={{ cursor: "pointer", height: '150px' }} />
                            </Button>
                            <Card.Body>
                                <Card.Title >{title}</Card.Title>
                                <Card.Text>
                                    &#8377;    {price}
                                </Card.Text>
                                <Button variant="warning" as={Link} to={`/product${_id}`} ><FontAwesomeIcon icon={faCartPlus} /> Buy</Button>
                                {
                                    auth ? user.soldItems.includes(_id) ? <DeleteBtn update={props.update} removeSold={props.removeSold} id={_id} /> :
                                        <WishBtn _id={_id} update={props.update} removeFav={props.removeFav} /> : null
                                }
                            </Card.Body>
                        </Card>
                    ))}
                </Container>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        auth: state.Authorised
    }
}

export default connect(mapStateToProps)(ItemList);