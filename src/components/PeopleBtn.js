import React from 'react'
import Darth from '../darth-vader 14-21-34-485.png'

const PeopleBtn = (props) => {
    let btn = {
        width:118,
        height:120,
        fontSize:'18px',
        backgroundColor:'brown',
        padding:'10px 10px',
        border:'none',
        boxShadow: '4px 5px 10px',
        borderRadius:59,
        marginTop:20
    }
    return(
        <div className="container">
            <button style={btn} onClick={props.getPeople}><img style={{maxWidth:'50%'}} className='img-fluid' src={Darth}/>People</button>
        </div>
    )
}
export default PeopleBtn