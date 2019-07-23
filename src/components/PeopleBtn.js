import React from 'react'

const PeopleBtn = (props) => {
    let btn = {
        fontSize:'18px',
        backgroundColor:'brown',
        padding:'10px 10px',
        border:'none',
        boxShadow: '4px 5px 10px',
        borderRadius:5
    }
    return(
        <div className="container">
            
            <button style={btn} onClick={props.getPeople}>People</button>
            
        </div>
    )
}
export default PeopleBtn