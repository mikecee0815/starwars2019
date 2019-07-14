import React from 'react'
import {Link} from 'react-router-dom'
import C3PO from '../C3PO-icon.png'

const About = () => {
    let aboutStyle = {
        background:'brown',
        padding:30,
        width:'85%',
        margin:'auto',
        boxShadow: '4px 5px 10px',
        marginTop:20,
        marginBottom:20,
        borderRadius:7,
        imgSmall:{
            width:175,
            height:175
        }
    }
    return(
        <div style={aboutStyle}>
            <h2 className="display-4">About</h2>
            <p className="lead">
            This is a work in process which I use to practice and apply new web-dev skills. My goal is to update from time to time.See my <Link to={'/about'}>Portfolio</Link> page for more information 
            </p>
            <img 
                src={C3PO}
                style={aboutStyle.imgSmall} 
                className="rounded-circle mx-auto d-block" alt="R2D2"
                />
        </div>
    )
}
export default About