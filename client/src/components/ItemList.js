import React from 'react';
import '../Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container } from 'react-bootstrap';
import { withRouter } from 'react-router';
import WishList from './WishList';

function ItemList(props) {
    const items = props.items;
    console.log(items);
    const View = (_id) => {
        props.history.push(`/product/${_id}`);
    };


    return (
        <div className="card-deck ">
            <Container >
                {items? items.map(({ _id, title, price, images }) => (
                    <Card style={{ width: '18rem', boxShadow: '0 2px 2px 0px rgba(0,0,0,0.5)' }} key={_id} >
                    <Card.Img onClick={() => View(_id)} src={images[0]} alt="item-img" style={{ cursor: "pointer" }} />
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
            // <Container className="ContainerProperties">
            //     {items.map(({ _id, title, price,images }) => (
            //         <div className="card customCard" key={_id}>
            //             <div id="image-container">
            //                 <img onClick={() => View(_id)} className="card-img-top cardImageCustom" src={images[0]} alt="" style={{ cursor: "pointer" }} />
            //             </div>
            //             <hr />
            //             <div className="card-body customCardbody">
            //                 <h3 className="card-title cardText">{title}</h3>
            //                 <h4 className="card-title cardText">Rs. {price}</h4>
            //                 <button onClick={() => View(_id)} type="button" id="customViewButton " className="btn btn-secondary" >View</button>
            //                 <WishList _id={_id} update={props.update} favs={props.favs} />
            //             </div>
            //         </div>
                )): null}

            </Container>
        </div >
    );
}

export default withRouter(ItemList);