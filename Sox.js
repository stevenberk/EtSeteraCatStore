import React from 'react';
import Cart from "./Cart.js";

let addToCart = (post) => {
    let clickedProduct = post;
    console.log(clickedProduct);
}

class Sox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SoxArray : [
                {
                        "id":"1",
                        "title":"Kitten Cap",
                        "description":"This kitten cap will keep your mittens warm!",
                        "price":120,
                        "imageURL":"https://images.unsplash.com/photo-1500174857981-b769ffdc53ce",
                        "categoryId":"1",
                        "key": 1
                        //hat
                }
            ]
        }    
}
// props.match.params.id
render(){
   return<div> {this.state.SoxArray.map(post =>
            <div>
                <h2>{post.title}</h2>
                <h4>{post.description}</h4>
                <img src={post.imageURL}/>
                <h4>${post.price}</h4>
                <button type="submit"
                onClick ={()=>addToCart(post)}>Add to Cart</button>
                
              
            </div>)}
        </div>
    }
};
export default Sox;      