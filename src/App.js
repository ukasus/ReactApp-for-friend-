import React,{Component} from 'react';
import MainTitle from './components/MainTitle.js';
import LeftDiv from './components/LeftDiv.js';
import RightDiv from './components/RightDiv.js'
import Items from './components/Items.js';
import {Route,Switch} from 'react-router-dom';
import Cakes from './components/Cakes.js'

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
                    <RightDiv></RightDiv>
                    
                   
                    <Cakes></Cakes>
                    </Route>
                    <Route path="/" >
                    <MainTitle></MainTitle>
                    <LeftDiv ></LeftDiv>
                    <Items></Items>
                    <RightDiv></RightDiv>
                    
                    </Route>

            </Switch>
      </div>
    )
  }
  
    
  
}

export default App;
