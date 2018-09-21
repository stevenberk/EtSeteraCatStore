import React from 'react';
import { connect } from 'react-redux';

let addToCart = (post, dispatch) => {
    let clickedProduct = post;
    dispatch({ type: 'ADD_TO_CART', item: clickedProduct });
    console.log(clickedProduct);
}

class Footwear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myArray : [
                {
                    "id":"2",
                    "title":"Purrsian Slipper",
                    "description":"Even Sherlock Holmes needed a purr or two.",
                    "price":50,
                    "imageURL":"https://images.unsplash.com/photo-1467839024528-ac3042ac0ae7",
                    "categoryId":"2"
                    //bootz
                }
            ]
        }    
}
render(){
   return<div> {this.state.myArray.map(post =>
            <div>
                <h2>{post.title}</h2>
                <h4>{post.description}</h4>
                <img src={post.imageURL} alt=""/>
                <h4>${post.price}</h4>
                <button type="submit" onClick ={()=>addToCart(post, this.props.dispatch)}>
                    Add to Cart
                </button>
            </div>)}
        </div>
    }
};
let ConnectedFootwear = connect()(Footwear);
export default ConnectedFootwear;
      