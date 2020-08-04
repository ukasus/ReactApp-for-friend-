import React,{Component} from 'react';
import uncle from '../photos/uncle.jpg';
import arjun from '../photos/arjun.jpg';
class LeftDiv extends Component{

    render()
    {
        return(
            <div id="left-div">
                <div className="self-info">
                <img src={uncle} alt='UnlceImage'></img>
                <h2>Balesh Goel</h2>
                <h3>Mob.No-9027638054</h3>
                </div>
                <div className="self-info">
                <img src={arjun} alt='ArjunImage'></img>
                <h2>Arjun Goel</h2>
                <h3>Mob.No-8791224004</h3>
            </div>
            </div>
        )
    }
}
export default LeftDiv;