import React from "react"

class Table extends React.Component {

    render () {

        const rows = [];

        for (let i= 0; i< this.props.expenses.length; i++) {
        rows.push(<tr id={this.props.expenses.id}><td></td><td>{this.props.expenses[i].type}</td><td>{this.props.expenses[i].date}</td><td>{this.props.expenses[i].description}</td><td>{this.props.expenses[i].amount}</td><button onClick={this.props.deleteButton}>X</button></tr>)
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