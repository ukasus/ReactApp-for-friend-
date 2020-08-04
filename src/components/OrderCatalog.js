import React,{Component} from 'react';

// import one from './cakes/1.jpg';

// import one from './cakes/1.jpg';


// import one from './cakes/1.jpg';



import {withRouter} from 'react-router-dom';
import axios from 'axios';



var Type='Eggless'

class OrderCatalog extends Component{
    constructor()
    {
       
        super();

        this.sendtobackend=this.sendtobackend.bind(this);
    }
    sendtobackend(event)
    {
        event.preventDefault();
        const { match: { params } } = this.props;
        var con=parseInt(params.id);
        const details={
            name: this.name,
            phone: this.phone,
            size: this.size,
            type: Type,
            cake:con+1
        }
        
        axios.post("https://backendforgoyal.herokuapp.com/postDetails",details)
        this.props.history.push('/orderConfirmation')
       
    }


    render()
    {
        
        const { match: { params } } = this.props;
        var con=parseInt(params.id);
       
        return(
            
            <div id="order-catalog">
                <div id="order-catalog-form">
                    <h2>EggLess Cakes- Rs.200/pound</h2>
                    <h2>Rectangle Cakes- Rs.100/pound</h2>
                <form onSubmit={this.sendtobackend}>
                    <pre>
                
                 <h3>Type:</h3><select name="shape" onChange={event=>Type=event.target.value} >
                    <option value="Eggless"  >Eggless</option>
                    <option value="WithEgg"  >WithEgg</option>
                    
                </select>
                <h3>Your Name</h3><input type='text' name='Name' onChange={event=>this.name=event.target.value}></input>
                <h3>Your MobileNumber</h3><input type='text' name='phone' onChange={event=>this.phone=event.target.value}></input>
                <h3>Size of Cake Required</h3><input type='text' name='Size' placeholder='In Pounds' onChange={event=>this.size=event.target.value}></input>
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