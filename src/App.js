import React from 'react';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';

class App extends React.Component {
  state = {
    form: {
      type:"",
      date:"",
      description:"",
      amount:""
    }
  }

  submitted () {
    console.log("submitted")
  }

  render(){
  return (
    <div className="App">
      <Header />
      <Form />
      <button onClick={this.submitted}>Submit</button>
      <Table />
    </div>
  )};
}

export default App;
