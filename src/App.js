import React from 'react';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';
import Button from './components/Button';

function App() {
  const button = document.getElementById("button")
console.log(button)
  return (
    <div className="App">
      <Header />
      <Form />
      <Button />
      <Table />
    </div>
  );
}

export default App;
