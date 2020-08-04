import React,{Component} from 'react';


import {Link} from 'react-router-dom';


class OrderConfirmation extends Component{
    


    render()
    {
        
        
       
        return(
            
            <div id="order-confirmation">
                
                    <h2>Order Placed Successfully!</h2>
                    
              <Link to="/" className="button">HomePage</Link>
                
              
                 
                    
                    
            </div>
                  
                            
                       
                
            
        )
    }
}
export default OrderConfirmation;