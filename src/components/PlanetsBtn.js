import React from 'react'

const PlanetsBtn = (props) => {
    return(
        <div className="container">
            <button onClick={props.getPlanets}>Planets</button>
        </div>
    )
}
export default PlanetsBtn