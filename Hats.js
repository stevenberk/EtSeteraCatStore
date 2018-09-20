import React from 'react';
// import {Link} from 'react-router-dom';

class Hats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myArray : [
                {
                        "id":"1",
                        "title":"Kitten Cap",
                        "description":"This kitten cap will keep your mittens warm!",
                        "price":120,
                        "imageURL":"https://images.unsplash.com/photo-1500174857981-b769ffdc53ce",
                        "categoryId":"1"
                        //hat
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
export default Hats;      