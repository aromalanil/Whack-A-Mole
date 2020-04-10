import React from 'react';
import moleimg from '../img/mole.webp';

const MoleHole=(props)=>{
    return(
        <div className="hole">
           {props.molePoped? <img className="mole" src={moleimg} alt=""/> : <div></div> }
        </div>
    )
}

export default MoleHole;