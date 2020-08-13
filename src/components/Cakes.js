import React,{Component} from 'react';

import {Link} from 'react-router-dom'

// import AliceCarousel from 'react-alice-carousel'
//import 'react-alice-carousel/lib/alice-carousel.css'


class Cakes extends Component{


    //  ControlledCarousel() {
    //     const [index, setIndex] = useState(0);
      
    //     const handleSelect = (selectedIndex, e) => {
    //       setIndex(selectedIndex);
    //     };
    // }
      
    

    render()
    {
        let user = new Array(91); 
        for (let i=0; i<91; ++i) user[i] = 0;

        
        return(

            <div id="cakes-container">
                  {  user.map((u,idx) =>

                  
                     <div id="cakes">
                         {/* <AliceCarousel mouseTrackingEnabled> */}
    
    
                    
                      <img className="d-block w-100"
                       src={require('./cakes/'+(idx+1)+'.jpg') } alt='CakeImage' />              
                       <h2>ID-{idx+1}</h2>
                   
                    <Link to={'/orderCatalog/'+idx} className="button" >Order</Link>
                    <span aria-hidden="true" className="carousel-control-prev-icon" />
                    {/* </AliceCarousel> */}
                    </div>
                   

                    
                  
                            
                  )   
                        }
                  
            </div>
        )
    }

}
export default Cakes;