import React from 'react';
// import {Link} from 'react-router-dom';

class Pants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myArray : [
                {
                    "id":"4",
                    "title":"Our Clawmark Jeans",
                    "description":"Fool, no man can kill me. But a cat might.",
                    "price":300,
                    "imageURL":"https://images.unsplash.com/photo-1512218168353-4bba6ac5f543",
                    "categoryId":"4"
                    //pants
                }
            ]
        }    
}

render(){
   return<div> {this.state.myArray.map(post =>
            <div>
                <h2>{post.title}</h2>
                <h4>{post.description}</h4>
                <img src={post.imageURL}/>
                <h4>${post.price}</h4>
                
              
            </div>)}
        </div>
    }
};
export default Pants;      