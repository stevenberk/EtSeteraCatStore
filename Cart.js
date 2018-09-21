import React from 'react';
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CartArray : [
                {
                    "id": "",
                    "title":"",
                    "description":"",
                    "price": "",
                    "imageURL":"",
                    "categoryId":"",
                    "key": 4
                }
            ]
        }    
}
render(){
   return<div> <h3>Your cart is empty</h3>
            {this.state.CartArray.map(post =>
            <div >
                <h2>{post.title}</h2>  
            </div>)}
        </div>
    }
};

export default Cart;