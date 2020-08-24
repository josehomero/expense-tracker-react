import React from 'react';
import './App.css';

import Header from './components/Header';
import Table from './components/Table';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      form: {
        id: Date.now(),
        type: "",
        date: "",
        description: "",
        amount: ""
      },
      expenses: [],
    }
    this.submitted = this.submitted.bind(this)
    this.deleteButton = this.deleteButton.bind(this)
  }

  deleteButton(e) {
    const expenseCopy = this.state.expenses.filter((expense) => {
      return expense.id !== parseInt(e.target.id)
    })
    
    this.setState({
      expenses: expenseCopy
    })
  }

  submitted = (e) => {
    e.preventDefault();

    if (this.state.form.type === '' || this.state.form.date === '' || this.state.form.description === '' || this.state.form.amount === '') {
      alert("Please fill out all the information in the form!");
      return;
  }

    const expense = {
      id: Date.now(),
      type: this.state.form.type,
      date: this.state.form.date,
      description: this.state.form.description,
      amount: this.state.form.amount
    }

    this.state.expenses.push(expense)
    this.setState({
      expense: expense,
      form: {
        id: Date.now(),
        type: '',
        date: '',
        description: '',
        amount: ''
      }
    })
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
            <div className='form-group col-md4'>
              <select className='form-control' name="type" value={this.state.form.type} onChange={this.changeType} >
                <option value=''>Type</option>
                <option value="card">Card</option>
                <option value="cash">Cash</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className='form-row'>
              <input className='form-control' name="date" type="text" placeholder="Date?" value={this.state.form.date} onChange={this.changeDate} />
            </div>
            <div className='form-row'>
              <input className='form-control' name="description" type="text" placeholder="Where?" value={this.state.form.description} onChange={this.changeDescription} />
            </div>
            <div className='form-row'>
              <input className='form-control' name="amount" type="text" placeholder="Amount?" value={this.state.form.amount} onChange={this.changeAmount} />
            </div>
            <button className='btn btn-primary'>Submit</button>
          </form>

          <Table deleteButton={this.deleteButton} expenses={this.state.expenses} />

        </div>
      )
    }
  }

  export default App
