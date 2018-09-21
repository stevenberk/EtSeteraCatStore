import React from 'react';
import { connect } from 'react-redux';

let addToCart = (post, dispatch) => {
    let clickedProduct = post;
    dispatch({ type: 'ADD_TO_CART', item: clickedProduct });
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
                <img src={post.imageURL} alt=""/>
                <h4>${post.price}</h4>
                <button type="submit"
                onClick ={()=>addToCart(post, this.props.dispatch)}>Add to Cart</button>
                
              
            </div>)}
        </div>
    }
};
let ConnectedSox = connect()(Sox);
export default ConnectedSox;     