import React from "react"

class Table extends React.Component {

    render () {

        const rows = [];

        for (let i= 0; i< this.props.expenses.length; i++) {
          rows.push(<h1>Andy is cool</h1>)
        }

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
            {rows}
          </tbody>
        </table>

        </div>)
    }
}

export default Table