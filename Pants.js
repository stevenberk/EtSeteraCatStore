import React from 'react';
import Cart from "./Cart.js";

let addToCart = (post) => {
    let clickedProduct = post;
    console.log(clickedProduct);
}


class Pants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PantsArray : [
                {
                    "id":"4",
                    "title":"Our Clawmark Jeans",
                    "description":"Fool, no man can kill me. But a cat might.",
                    "price":300,
                    "imageURL":"https://images.unsplash.com/photo-1512218168353-4bba6ac5f543",
                    "categoryId":"4",
                    "key": 1
                    //pants
                }
            ]
        }    
}
render(){
   return<div> {this.state.PantsArray.map(post =>
            <div>
                <h2>{post.title}</h2>
                <h4>{post.description}</h4>
                <img src={post.imageURL}/>
                <h4>${post.price}</h4>
                <button type="submit"
                onClick ={()=>addToCart(post)}>Add to Cart</button>
                <h6>{post.key}</h6>
                
              
            </div>)}
        </div>
    }
};
export default Pants;      