import React from 'react';
import { connect } from 'react-redux';

let addToCart = (post, dispatch) => {
    let clickedProduct = post;
    dispatch({ type: 'ADD_TO_CART', item: clickedProduct });
    console.log(clickedProduct);
}

class Tops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myArray : [
                {
                    "id":"3",
                    "title":"Huggable Me",
                    "description":"Wear your cat in style, rain or shine.",
                    "price":30,
                    "imageURL":"https://images.unsplash.com/photo-1503386435953-66943ba30817",
                    "categoryId":"3",
                    "key": 1
                    //tops
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
                <button type="submit"
                onClick ={()=>addToCart(post, this.props.dispatch)}>Add to Cart</button>
            </div>)}
        </div>
    }
};
let ConnectedTops = connect()(Tops);
export default ConnectedTops;      