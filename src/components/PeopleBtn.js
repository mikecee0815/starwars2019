import React from 'react'

const PeopleBtn = (props) => {
    return(
        <div className="container">
            <button onClick={props.getPeople}>People</button>
            
        </div>
    )
}
export default PeopleBtn