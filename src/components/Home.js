import React from 'react'
import {Link} from 'react-router-dom'
import R2D2 from '../R2D2-icon.png'

const Home = () => {
    let homeStyle = {
        background:'#03a9f4',
        padding:30,
        boxSizing:'borderBox',
        width:'85%',
        margin:'auto',
        boxShadow: '4px 5px 10px',
        marginTop:20,
        marginBottom:20,
        borderRadius:7,
        imgSmall:{
            width:175,
            height:175,
        }
    }
    
    return(
        <div style={homeStyle}>
            
            <h2 className="display-4">StarWars Site</h2>
            <p className="lead">
            Welcome to my inofficial StarWars info website. this is a work in process which I use to practice and apply new web-dev skills. My goal is to update from time to time.See my <Link to={'/about'}>About</Link> page to know more;) 
            </p>
            <img 
                src={R2D2}
                style={homeStyle.imgSmall} 
                className="rounded-circle mx-auto d-block" alt="R2D2"
                />
        </div>
    )
}
export default Home