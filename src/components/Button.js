import React from "react"

function Button () {

    return (<div>
    <button onClick={function() {console.log('I was clicked')}}>Submit</button>
    </div>)
}

export default Button