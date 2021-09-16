import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteBtn from './DeleteBtn';
import WishBtn from './WishBtn';

function Deck(props) {
    const { user } = props
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
                        autoPlaySpeed={2000}
                        autoPlay={true}
                        infinite={true}

                    >
                        {props.items.map((item) =>
                            <Card style={{ width: '16rem', height: '320px', boxShadow: '0 2px 2px 0px rgba(0,0,0,0.5)', margin: '20px auto' }} key={item._id} >
                                <Link to={`/product/${item._id}`}><Card.Img src={item.images[0].url} alt="item-img" style={{ cursor: "pointer", height: '150px' }} /></Link>
                                <Card.Body>
                                    <Card.Title >{item.title}</Card.Title>
                                    <Card.Text>
                                        &#8377;    {item.price}
                                    </Card.Text>
                                    <Button variant="warning" as={Link} to={`/product/${item._id}`} type="button" id="customViewButton " ><FontAwesomeIcon icon={faCartPlus} /> View </Button>
                                    {
                                        user ? user.ads.filter(item1 => item1._id === item._id ).length > 0 ? <DeleteBtn update={props.update} removeSold={props.removeSold} id={item._id} /> :
                                            <WishBtn item={item} update={props.update}/> : null
                                    }

                                </Card.Body>
                            </Card>
                        )}
                    </Carousel> : <h4 className='text-center text-secondary mt-5' >Nothing on sale!</h4>
            }

        </>)
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        auth: state.Authorised
    }
}

export default connect(mapStateToProps)(Deck);