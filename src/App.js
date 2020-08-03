import React,{Component} from 'react';
import MainTitle from './components/MainTitle.js';
import LeftDiv from './components/LeftDiv.js';

import Items from './components/Items.js';
import {Route,Switch} from 'react-router-dom';
import Cakes from './components/Cakes.js';
import OrderConfirmation from './components/OrderConfirmation.js';
import OrderCatalog from './components/OrderCatalog';

class App extends Component{

  render()
  {
    return(
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
    )
  }
  
    
  
}

export default App;
