import React,{Component} from 'react';
import one from './cakes/1.jpg';
import {Link, useLocation} from 'react-router-dom';

import {withRouter} from 'react-router-dom';




class OrderCatalog extends Component{

    render()
    {
        
        const { match: { params } } = this.props;
        var con=parseInt(params.id);
        console.log(params.id);
        return(
            
            <div id="order-catalog">
                <div id="order-catalog-form">
                    <h2>EggLess Cakes- Rs.200/pound</h2>
                    <h2>WithEgg Cakes- Rs.100/pound</h2>
                <form>
                    <pre>
                
                 <h3>Type:</h3><select name="shape">
                    <option>Eggless</option>
                    <option>WithEgg</option>
                    
                </select>
                <h3>Your Name</h3><input type='text' name='Name'></input>
                <h3>Your MobileNumber</h3><input type='text' name='Name'></input>
                <h3>Size of Cake Required</h3><input type='text' name='Name' placeholder='In Pounds'></input>
                <br></br><br></br>
                <input type='submit' value='Order' className='button'></input>
                </pre> 
                     
                     
                </form> 
                </div>
               <div id='order-catalog-img'>
               <img src={require('./cakes/'+(con+1)+'.jpg') } alt='CakeImage'></img>
               </div>
                 
                    
                    
            </div>
                  
                            
                       
                
            
        )
    }
}
export default withRouter(OrderCatalog);