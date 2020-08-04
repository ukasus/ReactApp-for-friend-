import React,{Component} from 'react';

// import particlesJS from particles;
import Typing from 'react-typing-animation';



class MainTitle extends Component
{
    render()
    {
        return(
            <div id="main-title">
          <Typing loop='true' >
            <h1 >Hare Krishna Confectionary</h1>
            <Typing speed={5}></Typing>
            <Typing.Backspace count={26} speed={7} />
            
            </Typing>
            </div>
           
        )
    }
}

export default MainTitle;