import React from 'react'

const StarshipsBtn = (props) => {
    return(
        <div className="container">
            <button onClick={props.getStarships}>Starships</button>
        </div>
    )
}
export default StarshipsBtn