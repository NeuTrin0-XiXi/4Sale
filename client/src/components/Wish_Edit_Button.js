import React from 'react';
import '../Combined.css';
import axios from 'axios';
import { connect } from 'react-redux';


const Wish_Edit_Button = (props) => {
    const { Auth } = props;
    const { user } = props;
    if (Auth) {
        const Sold = (_id) => {
            let i;
            for (i = 0; i < user.soldItems.length; i++) {
                if (_id === user.soldItems[i]) {
                    return true;
                }
            }
            return false;
        };
        if (Sold(props._id)) {
            const Delete = (_id) => {
                if (props.removeSold) {
                    props.update(_id);
                }
                const newUser = {
                    ...user,
                    soldItems: user.soldItems.filter(item => { return item !== _id })
                }
                props.Update(newUser);
                axios.delete(`/api/items/${_id}`)
                    .then(() => {
                        axios({
                            method: 'DELETE',
                            url: `/api/user/sold/${user._id}`,
                            data: {
                                sold: _id
                            }
                        })
                            .then(() => {
                            })
                    })
            };
            return (
                <>
                    {/* <button onClick={() => Edit(props._id)} type="button" id="customEditButton" className="btn btn-outline-warning" >Edit</button> */}
                    <button onClick={() => Delete(props._id)} type="button" id="customDelButton" className="btn btn-danger" >Delete</button>
                </>
            )
        } else {
            const favourite = (_id) => {
                const newUser = {
                    ...user
                };
                newUser.favourites.push(_id)
                props.Update(newUser);
                axios.put(`/api/user/favourites/${user._id}`, {
                    favourite: _id
                })
            };

            const removeFavourite = (id) => {
                if (props.removeFav) {
                    props.update(id);
                };
                const newUser = {
                    ...user,
                    favourites: user.favourites.filter(item => item !== id)
                };
                props.Update(newUser);
                axios({
                    method: 'DELETE',
                    url: `/api/user/favourites/${user._id}`,
                    data: {
                        favourite: id
                    }
                })
            }

            function Contains(_id) {
                let i;
                for (i = 0; i < user.favourites.length; i++) {
                    if (_id === user.favourites[i]) {
                        return true;
                    }
                }
                return false;
            };

            //Main Function
            if (Contains(props._id)) {
                return <button onClick={() => removeFavourite(props._id)} type="button" id="customFavButton" className="btn btn-outline-danger" >Remove from WishList</button>
            } else {
                return <button onClick={() => favourite(props._id)} type="button" id="customFavButton" className="btn btn-outline-success" >Add to WishList</button>
            }
        }
    } else {
        return null;
    }
};



const mapStateToProps = (state) => {
    return {
        user: state.user,
        Auth: state.Authorised
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        Update: (user) => {
            dispatch({ type: 'UPDATE_USER', payload: user })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wish_Edit_Button);