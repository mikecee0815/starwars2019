import React from 'react'
import Starship from '../star-wars 14-21-34-957.png'


const StarshipsBtn = (props) => {

    let btn = {
        width:120,
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
            <button style={btn} onClick={props.getStarships}><img style={{maxWidth:'50%'}} src={Starship} className='img-fluid'/>Starships</button>
        </div>
    )
}
export default StarshipsBtn