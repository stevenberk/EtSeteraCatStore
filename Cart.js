import React from 'react';
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CartArray : [
                {
                    "title" : "your cart is empty"
                }
            ]
        }    
}
// props.match.params.id
render(){
   return<div> {this.state.CartArray.map(post =>
            <div >
                <h2>{post.title}</h2>  
            </div>)}
        </div>
    }
};
export default Cart;