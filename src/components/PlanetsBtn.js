import React from 'react'
import { labeledStatement } from '@babel/types';

const PlanetsBtn = (props) => {

    let btn = {
        boxShadow: '4px 5px 10px',
        backgroundColor:'brown',
        padding:'10px 10px',
        fontSize:'18px',
        border:'none', 
        borderRadius:5
    }
    return(
        <div className="container">
            <button style={btn} onClick={props.getPlanets}>Planets</button>
        </div>
    )
}
export default PlanetsBtn