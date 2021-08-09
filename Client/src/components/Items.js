import React from 'react'
import '../Combined.css';
import { Component } from 'react';
import { Container } from 'react-bootstrap';



class Items extends Component {
    render() {
        const { items } = this.props;
        const itemList = items.map(item => {
            return (
                <div className="item col-lg-4 cardCustom d-inline-block" key={item._id}>
                    <div class="card  customCard" id="cardBoxOutline">
                        {/* <img class="card-img-top cardImageCustom" src="..." alt="Card image cap" /> */}
                        <div class="card-body  customCard">
                            <h5 class="card-title cardText">{item.name}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item cardText">Rs. {item.price}</li>
                                {/* <li class="list-group-item cardText">{category}</li> */}
                                <li><a href="#" class="btn btn-primary" style={{ backgroundColor: '#62c1ad', textDecoration: 'none' }}>Add to WishList</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="card-deck">
                <Container className="ContainerProperties">
                    {itemList}
                </Container>
            </div>
        )
    }
}

export default Items;