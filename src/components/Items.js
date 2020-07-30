import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Items extends Component{
    render()
    {
        return(
            <div id="Items">
                <h3>Milk</h3>
                <h3>Crud(Dahi)</h3>
                <h3>Cheese(Panner)</h3>
                <Link id="cakes-display" to="/cakes">Cakes</Link>
            </div>
        )
    }
}

export default Items;