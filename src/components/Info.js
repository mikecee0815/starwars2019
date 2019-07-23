import React from 'react'

const Info = (props) => {
    return(
        <div className="container">
            <p>{props.item.name}</p>
        </div>
    )
}
export default Info