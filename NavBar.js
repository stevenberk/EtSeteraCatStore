import React from 'react';
import {Link} from 'react-router-dom';
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MerchArray : [
                {
                    "title": "All",
                    "route": "/all",
                    "key": 1
                },
                {   
                    "title": "Hats",
                    "route": "/hats",
                    "key": 2
                },
                {   
                    "title": "Footwear",
                    "route": "/footwear",
                    "key": 3
                },
                {
                    "title": "Tops", 
                    "route": "/tops",
                    "key": 4
                },
                {
                    "title": "Pants", 
                    "route": "/pants",
                    "key": 5
                },
                {
                    "title": "Sox", 
                    "route": "/sox",
                    "key": 6
                },
                {
                    "title": "Cart", 
                    "route": "/cart",
                    "key": 7
                }
            ]
        }    
}
render(){
   return(<div> 
            <ul className="menu-bar-container">
                {this.state.MerchArray.map(post =>
                <Link to={post.route}>
                    <li className="menu-bar">
                    {post.title}
                    <h6>{post.key}</h6>
                    </li>
                </Link>)
                }
            </ul>
        </div>)
    }
};
export default NavBar;