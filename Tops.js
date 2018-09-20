import React from 'react';
// import {Link} from 'react-router-dom';

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
                    "categoryId":"3"
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
                <img src={post.imageURL}/>
                <h4>${post.price}</h4>
                
              
            </div>)}
        </div>
    }
};
export default Tops;      