import React,{Component} from 'react';

import {Link} from 'react-router-dom'


class Cakes extends Component{

    render()
    {
        let user = new Array(91); for (let i=0; i<91; ++i) user[i] = 0;
        
        return(

            <div id="cakes-container">
                  {  user.map((u,idx) =>
                     <div id="cakes">
                    <img src={require('./cakes/'+(idx+1)+'.jpg') } alt='CakeImage'></img>
                    <Link to={'/orderCatalog/'+idx} className="button" >Order</Link>
                    </div>
                  
                            
                            )
                        }
                
            </div>
        )
    }
}
export default Cakes;