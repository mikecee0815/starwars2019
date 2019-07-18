import React from 'react'

const Form = (props) => {
    return(
        <div className="container">
            <form>
                <input type="text" name="query" placeholder="search" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default Form