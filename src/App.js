import React from 'react';
import './App.css';

import Header from './components/Header';

import Table from './components/Table';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      form: {
        type: "",
        date: "",
        description: "",
        amount: ""
      }
    }
  }

  submitted = (e) => {
    e.preventDefault();
    console.log(this.state.form);
  }

  changeDescription = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        description: e.target.value,
      }
    })
  }

  changeType = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        type: e.target.value
      }
    })
  }
  
  changeDate = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        date: e.target.value
      }
    })
  }

  changeAmount = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        amount: e.target.value
      }
    })
  }

  render() {


    return (
      <div className="App">
        <Header />

        <form onSubmit={this.submitted}>
          <select name="type" value={this.state.form.type} onChange={this.changeType} >
            <option value=''>Type</option>
            <option value="card">Card</option>
            <option value="cash">Cash</option>
            <option value="other">Other</option>
          </select>
          <input name="date" type="text" placeholder="Date?" value={this.state.form.date} onChange={this.changeDate} />
          <input name="description" type="text" placeholder="Where?" value={this.state.form.description} onChange={this.changeDescription} />
          <input name="amount" type="text" placeholder="Amount?" value={this.state.form.amount} onChange={this.changeAmount} />
          <button >Submit</button>
        </form>


        <Table />
      </div>
    )
  };
}

export default App;
