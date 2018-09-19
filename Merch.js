import React from 'react';

export default class Merch extends React.Component {
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
                },
                {
                    "id":"2",
                    "title":"Purrsian Slipper",
                    "description":"Even Sherlock Holmes needed a purr or two.",
                    "price":50,
                    "imageURL":"https://images.unsplash.com/photo-1467839024528-ac3042ac0ae7",
                    "categoryId":"1"
                    //bootz
                },
                {
                    "id":"3",
                    "title":"Huggable Me",
                    "description":"Wear your cat in style, rain or shine.",
                    "price":30,
                    "imageURL":"https://images.unsplash.com/photo-1503386435953-66943ba30817",
                    "categoryId":"3"
                    //tops
                },
                {
                    "id":"4",
                    "title":"Our Clawmark Jeans",
                    "description":"Fool, no man can kill me. But a cat might.",
                    "price":300,
                    "imageURL":"https://images.unsplash.com/photo-1512218168353-4bba6ac5f543",
                    "categoryId":"2"
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
                <h4>{post.price}</h4>
                
              
            </div>)}
        </div>
    }
};
        