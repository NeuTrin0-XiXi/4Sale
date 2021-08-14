import React from 'react';
import '../Combined.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
function ItemList(props) {
    const { items } = props;
    console.log(props);
    const textColor = {
        color: 'black',
        textDecoration: 'none'
    };
    return (
        <div className="card-deck">
            <Container className="ContainerProperties">
                {items.map(({ _id, title, price }) => (
                    <div className="col-lg-4 cardCustom d-inline-block" key={_id}>
                        <Link to={'/item/' + _id} className="productRedirect" style={textColor}>
                            <div className="card  customCard" id="cardBoxOutline">
                                <img className="card-img-top cardImageCustom" src={`./uploads/${_id}-1`} alt="Card image cap" onClick={() => { this.handelClick({ _id }) }} />
                                <div className="card-body  customCard">
                                    <h5 className="card-title cardText">{title}</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item cardText">Rs. {price}</li>
                                        {/* <li className="list-group-item cardText">{category}</li> */}
                                        <li><button href="#" className="btn btn-primary" style={{ backgroundColor: '#62c1ad', textDecoration: 'none' }}>Add to WishList</button></li>
                                    </ul>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Container>
        </div>
    );
}

export default ItemList;