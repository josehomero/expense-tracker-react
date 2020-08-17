import React from "react"

class Table extends React.Component {

    render () {

        const rows = [];

        for (let i= 0; i< this.props.expenses.length; i++) {
        rows.push(<tr><td></td><td>{this.props.expenses[0]}</td><td>{this.props.expenses[1]}</td><td>{this.props.expenses[2]}</td><td>{this.props.expenses[3]}</td></tr>)
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