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
<<<<<<< HEAD
            cake:con+1,
            date:this.date
        }
        console.log(this.date)
        
        axios.post("https://backendforgoyal.herokuapp.com/postDetails",details)
        //axios.post("http://localhost:8080/postDetails",details)
=======
            cake:con+1
        }
        
        axios.post("https://backendforgoyal.herokuapp.com/postDetails",details)
>>>>>>> eccdb5c70aa7129929b00a30f2607ace417fbbd2
        this.props.history.push('/orderConfirmation')
       
    }


    render()
    {
        
        const { match: { params } } = this.props;
        var con=parseInt(params.id);
       
        return(
            
            <div id="order-catalog">
                <div id="order-catalog-form">
<<<<<<< HEAD
                    <h2>EggLess Cakes- Rs.250/pound</h2>
                    <h2>Rectangle Cakes- Rs.100/pound</h2>
                    <h2>Photo/Cartoon Print Cakes- Rs.350/pound</h2>
=======
                    <h2>EggLess Cakes- Rs.200/pound</h2>
                    <h2>Rectangle Cakes- Rs.100/pound</h2>
>>>>>>> eccdb5c70aa7129929b00a30f2607ace417fbbd2
                <form onSubmit={this.sendtobackend}>
                    <pre>
                
                 <h3>Type:</h3><select name="shape" onChange={event=>Type=event.target.value} >
                    <option value="Eggless"  >Eggless</option>
                    <option value="WithEgg"  >WithEgg</option>
                    
                </select>
<<<<<<< HEAD
                <br></br><br></br><br></br>
                <h3>Your Name:</h3> <input type='text' name='Name' onChange={event=>this.name=event.target.value}></input>
                
                <br></br><br></br><br></br>
                <h3>Your MobileNumber:</h3> <input type='text' name='phone' onChange={event=>this.phone=event.target.value}></input>
                <br></br><br></br><br></br>
                <h3>Size of Cake Required:</h3> <input type='text' name='Size' placeholder='In Pounds' onChange={event=>this.size=event.target.value}></input>
                <br></br><br></br><br></br>
                 <h3>Required Date:</h3> <input type='date' onChange={event=>this.date=event.target.value}></input>
                <br></br><br></br><br></br>
                <input type='submit' value='Order' className='button' id='order-input'></input>
=======
                <h3>Your Name</h3><input type='text' name='Name' onChange={event=>this.name=event.target.value}></input>
                <h3>Your MobileNumber</h3><input type='text' name='phone' onChange={event=>this.phone=event.target.value}></input>
                <h3>Size of Cake Required</h3><input type='text' name='Size' placeholder='In Pounds' onChange={event=>this.size=event.target.value}></input>
                <br></br><br></br>
                <input type='submit' value='Order' className='button'></input>
>>>>>>> eccdb5c70aa7129929b00a30f2607ace417fbbd2
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