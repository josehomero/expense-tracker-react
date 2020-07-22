import React from "react"

class Table extends React.Component {
    constructor() {
        super()
        this.state={}
    }
    render () {
        return (<div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Type</th>
                        <th>When?</th>
                        <th>Where?</th>
                        <th>Cost?</th>
                    </tr>
                </thead>
                <tbody>
    
                </tbody>
            </table>
        </div>)
    }
}

export default Table