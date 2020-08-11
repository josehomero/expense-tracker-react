import React from "react"

class Table extends React.Component {

    render () {
        console.log(this.props.expenses)

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
          <tr>
                <td>{this.props.expenses.type} </td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
          </tbody>
        </table>

        </div>)
    }
}

export default Table