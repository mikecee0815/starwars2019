import React from 'react'
import Planet from '../transport.png'
import { labeledStatement } from '@babel/types';

const PlanetsBtn = (props) => {

    let btn = {
        width:118,
        height:120,
        boxShadow: '4px 5px 10px',
        backgroundColor:'brown',
        padding:'10px 10px',
        fontSize:'18px',
        border:'none', 
        borderRadius:59,
        marginTop:20
    }
    return(
        <div className="container">
            <button style={btn} onClick={props.getPlanets}><img style={{maxWidth:'50%'}} className='img-fluid' src={Planet}/>Planets</button>
        </div>
    )
}
export default PlanetsBtn