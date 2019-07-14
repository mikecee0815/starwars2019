import React from 'react'
import {Link} from 'react-router-dom'
import DarthVader from '../Darth-Vader-icon.png'

const Contact = () => {
    let contactStyle = {
        background:'orange',
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
            height:175
        }
    }
    return(
        <div style={contactStyle}>
            <h2 className="display-4">Contact</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. See my <Link to={'/about'}>Portfolio</Link> page for more information
            </p>
            <img 
                src={DarthVader}
                style={contactStyle.imgSmall} 
                className="rounded-circle mx-auto d-block" alt="DarthVader png"
                />
        </div>
    )
}
export default Contact