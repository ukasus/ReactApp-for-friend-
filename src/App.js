import React,{Component} from 'react';
import MainTitle from './components/MainTitle.js';
import LeftDiv from './components/LeftDiv.js';

import Items from './components/Items.js';
import {Route,Switch} from 'react-router-dom';
import Cakes from './components/Cakes.js';
import OrderConfirmation from './components/OrderConfirmation.js';
import OrderCatalog from './components/OrderCatalog';

import Particles from 'react-particles-js';
import ScrollToTop from './components/ScrollToTop.js';





class App extends Component{

  render()
  {
    return(

      
      <div >
         <div id="particles">
         <Particles 
               params={{ 
                particles: { 
                    anim:{
                    enable:true,
                        speed:6,

                    },
                    line_linked:{
                        width:.2
                    },
                  number: { 
                    value: 100, 
                    density: { 
                      enable: true, 
                      value_area: 1300, 
                    } 
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 1,
                      color: "#ffffff"
                    },
              
                }, 
                move: {
                    enable: true,
                    speed: 4,
                    direction: "none",
                    random: true,
                    straight: true,
                    out_mode: "out",
                    
                  },
                  interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable:true,
                        mode: "attract"
                      },
                      onclick: {
                        enable: true,
                        mode: "push"
                      },
                      resize: true
                    },
                    modes:{
                        repulse:{
                            distance:20
                        }
                    }
              },
              repulse: {
                distance: 100
              },
              push: {
                particles_nb: 4
              },}
            }
            } 
              >
              
           
            </Particles>
            </div>
      
        <div id="base-container">
        <Switch>

<Route exact path="/cakes" >
<MainTitle></MainTitle>
<LeftDiv ></LeftDiv>
<Items></Items>
<Cakes></Cakes>
</Route>

<Route exact path='/orderCatalog/:id'>
  
<OrderCatalog></OrderCatalog>
<MainTitle></MainTitle>
<LeftDiv ></LeftDiv>
<Items></Items>
<Cakes></Cakes>




</Route>
<Route exact path="/orderConfirmation" >
<OrderConfirmation></OrderConfirmation>
</Route>

<Route exact path="/" >
<MainTitle></MainTitle>
<LeftDiv ></LeftDiv>
<Items></Items>
</Route>

</Switch>
</div>


     
      </div>
    )       
  }
  
    
  
}

export default App;
