import React from 'react';
import './App.css';

import Header from './components/Header';

import Table from './components/Table';

class App extends React.Component {
  state = {
    form: {
      type: "",
      date: "",
      description: "",
      amount: ""
    }
  }

  submitted() {
    console.log("submitted")
  }


  render() {
    return (
      <div className="App">
        <Header />

        <form>
          <select name="type" value={this.props.type} onChange={this.props.handleChange} >
            <option value=''>Type</option>
            <option value="card">Card</option>
            <option value="cash">Cash</option>
            <option value="other">Other</option>
          </select>
          <input name="date" type="text" placeholder="Date?" value={this.props.date} onChange={this.props.handleChange} />
          <input name="description" type="text" placeholder="Where?" value={this.props.description} onChange={this.props.handleChange} />
          <input name="amount" type="text" placeholder="Amount?" value={this.props.amount} onChange={this.props.handleChange} />
        </form>

        <button onClick={this.submitted}>Submit</button>
        <Table />
      </div>
    )
  };
}

export default App;
