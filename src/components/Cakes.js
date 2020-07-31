import React,{Component} from 'react';
import one from './cakes/1.jpg';


class Cakes extends Component{

    render()
    {
        let user = new Array(91); for (let i=0; i<91; ++i) user[i] = 0;
        var t=".jpg"
        return(

            <div id="cakes-container">
                  {  user.map((u,idx) =>
                     <div id="cakes">
                    <img src={require('./cakes/'+(idx+1)+'.jpg')}></img>
                    
                    </div>
                  
                            
                            )
                        }
                
            </div>
        )
    }
}
export default Cakes;