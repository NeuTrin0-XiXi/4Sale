import React, { Component } from 'react';
import {connect} from 'react-redux';

 class CategoryPage extends Component {
     
    render() {

        const {items} = this.props.product;
        return (
            <div>
               { items.map(({title}) => (
                   <div key = {title}>
                   {title}
                   </div>
               ) )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
  });

export default connect(mapStateToProps)(CategoryPage);
