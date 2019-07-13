import React from 'react'

const About = () => {
    let aboutStyle = {
        background:'brown',
        padding:20,
        width:'95%',
        height:400,
        margin:'auto',
        boxShadow: '4px 5px 10px',
        marginTop:20
    }
    return(
        <div style={aboutStyle}>
            <h2 className="display-3">About</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
        </div>
    )
}
export default About