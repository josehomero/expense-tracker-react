import React from 'react';
import './App.css';

import Header from './components/Header';
import Table from './components/Table';
import Form from './components/Form';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      form: {
        id: Date.now(),
        type: '',
        date: '',
        description: '',
        amount: ''
      },
      expenses: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(e) {
    const expenseCopy = this.state.expenses.filter((expense) => {
      return expense.id !== parseInt(e.target.id)
    })
    
    this.setState({
      expenses: expenseCopy
    })
  }

  handleSubmit = (e) => {
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
        <div className="App m-5 p-5">
          <Header />
          <Form 
            handleSubmit={this.handleSubmit}
            handleDescChange={this.changeDescription}
            handleTypeChange={this.changeType}
            handleDateChange={this.changeDate}
            handleAmountChange={this.changeAmount}
            formDataState={this.state.form}
          />
          <Table deleteButton={this.handleDelete} expenses={this.state.expenses} />

        </div>
      )
    }
  }

  export default App
