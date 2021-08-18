import React from 'react';
import '../Combined.css';
import axios from 'axios';
import { connect } from 'react-redux';


const WishList = (props) => {
    const { Auth } = props;
    if (Auth) {
        const { user } = props;
        let l = user.favourites.length

        const favourite = (_id) => {
            axios.put(`/api/user/favourites/${user._id}`, {
                favourite: _id
            })
                .then(res => {
                    const newUser = {
                        ...user,
                        favourites: res.data.favourites
                    }
                    props.Update(newUser);
                })
        };

        const removeFavourite = (_id) => {
            axios({
                method: 'DELETE',
                url: `/api/user/favourites/${user._id}`,
                data: {
                    favourite: _id
                }
            })
                .then(res => {
                    console.log(res.data);
                    const newUser = {
                        ...user,
                        favourites: res.data.favourites
                    }
                    props.Update(newUser);
                    props.update(res.data.favourites)
                })
        };

        function Contains(_id) {
            let i;
            for (i = 0; i < l; i++) {
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

export default connect(mapStateToProps, mapDispatchToProps)(WishList);