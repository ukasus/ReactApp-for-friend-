import React,{Component} from 'react';

class Cakes extends Component{

    render()
    {
        var user=[1,2,3,4,5,6,7]
        return(

            <div id="cakes-container">
                  {  user.map( () =>
                     <div id="cakes">
                    <img src="https://media-exp1.licdn.com/dms/image/C5103AQHy0cJj4HYarQ/profile-displayphoto-shrink_200_200/0?e=1601510400&v=beta&t=N7tUGlpPAU614O1DO8o4WzDWIKkbUruGKlUZm0KmoA0"></img>
                    <h2>Ujjawal Sharma</h2>
                    <h3>9012802194</h3>
                    </div>
                  
                            
                            )
                        }
                
            </div>
        )
    }
}
export default Cakes;