import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MerchArray : [
                {
                    "title": "All",
                    "route": "/all"
                }
                ,
                {   
                    "title": "Hats",
                    "route": "/hats"
                },
                {   
                    "title": "Footwear",
                    "route": "/footwear"
                },
                {
                    "title": "Tops", 
                    "route": "/tops"
                },
                {
                    "title": "Pants", 
                    "route": "/pants"
                }
            ]
        }    
}

render(){
   return(<div> 
            <ul className="menu-bar-container">
                {this.state.MerchArray.map(post =>
                    <li className="menu-bar">
                    {/* {post.title}, */}
                    <Link to={post.route}>{post.title}</Link>
                    </li>)
                }
            </ul>
        
        </div>)
    }

};

export default NavBar;