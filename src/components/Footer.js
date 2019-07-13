import React from 'react'


const Footer = () => {
    let footerCss = {
        width:'85%',
        background:'#0000ff52',
        margin:'auto',
        marginTop:15,
        display:'flex',
        justifyContent:'space-around'
    }
    let footerItem = {
        textAlign:'left',
        padding:10
    }
    return(
        <div style={footerCss}>
            <h4 style={footerItem}>Jul 11,2019</h4>
            <h4 style={footerItem}>Mike Corporan</h4>
            <h4 style={footerItem}>Long Island,NY</h4>
        </div>
    )
}
export default Footer