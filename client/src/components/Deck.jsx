import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WISH_EDIT_BUTTON from './Wish_Edit_Button';

export default function Deck(props) {
    console.log()
    const View = (_id) => {
        props.history.push(`/product/${_id}`);
    };
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            {
                props.items.length > 0 ?
                    <Carousel
                        responsive={responsive}
                        draggable
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        {props.items.map((item) =>
                            <Card style={{ width: '16rem', boxShadow: '0 2px 2px 0px rgba(0,0,0,0.5)', margin: '10px auto' }} key={item._id} >
                                <Card.Img onClick={() => View(item._id)} src={item.images[0]} alt="item-img" style={{ cursor: "pointer", height: '150px' }} />
                                <Card.Body>
                                    <Card.Title >{item.title}</Card.Title>
                                    <Card.Text>
                                        &#8377;    {item.price}
                                    </Card.Text>
                                    <Button variant="warning" onClick={() => View(item._id)} type="button" id="customViewButton " ><FontAwesomeIcon icon={faCartPlus} /> Buy</Button>
                                    <WISH_EDIT_BUTTON _id={item._id} update={props.update} removeSold={props.removeSold} removeFav={props.removeFav} />
                                </Card.Body>
                            </Card>
                        )}
                    </Carousel> : <h4 className='text-center text-secondary m-auto' >Nothing on sale!</h4>
            }

        </>)
}
