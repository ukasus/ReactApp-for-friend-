import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Items extends Component{
    render()
    {
        return(
            <div id="Items">
                <h2>Products Available:</h2>
                <ul>
                    <li>
                        Milk
                    </li>
                    <li>
                        Dahi(Curd)
                    </li>
                    <li>
                        Paneer
                    </li>
                    <li>
                        Cold Drinks
                    </li>
                    <li>
                        Paties
                    </li>
                    <li>
                        Pastries
                    </li>
                    <li>
                        Biscuit
                    </li>
                    <li>
                        Namkeen
                    </li>
                </ul>
                <Link id="cakes-display" to="/cakes">Cakes</Link>
            </div>
        )
    }
}

export default Items;