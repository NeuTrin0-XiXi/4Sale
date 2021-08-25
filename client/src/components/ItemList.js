import React from 'react';
import '../Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container } from 'react-bootstrap';
import { withRouter } from 'react-router';
import WishList from './WishList';

function ItemList(props) {
    const items = props.items;

    const View = (_id) => {
        props.history.push(`/product/${_id}`);
    };


    return (
        <div className="card-deck ">
            <Container >
                {items.map(({ _id, title, price }) => (
                    <Card style={{ width: '18rem' }} key={_id} >
                    <Card.Img onClick={() => View(_id)} src={'/about-us3.jpg' } alt="item-img" style={{ cursor: "pointer" }} />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>
                        Rs. {price}
                      </Card.Text>
                      <Button variant="primary" onClick={() => View(_id)} type="button" id="customViewButton " className="btn btn-secondary" >View</Button>
                      <WishList _id={_id} update={props.update} favs={props.favs} />
                      </Card.Body>
                  </Card>
                    // <div className="card" key={_id}>
                    //     <div id="image-container">
                    //         <img onClick={() => View(_id)} className="card-img-top cardImageCustom" src={`/uploads/${_id}-1`} alt="" style={{ cursor: "pointer", width: '300px' }} />
                    //     </div>
                    //     <hr />
                    //     <div className="card-body customCardbody">
                    //         <h3 className="card-title cardText">{title}</h3>
                    //         <h4 className="card-title cardText">Rs. {price}</h4>
                    //         <button onClick={() => View(_id)} type="button" id="customViewButton " className="btn btn-secondary" >View</button>
                    //       
                    //     </div>
                    // </div>
                ))}

            </Container>
        </div >
    );
}

export default withRouter(ItemList);