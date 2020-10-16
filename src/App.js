import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Tugas-9/Form';
import Table from './Tugas-10/Table';
import Timer from './Tugas-11/Timer';
import Lists from './Tugas-12/Lists';
import Crud from './Tugas-13/Crud';
import Fruit from './Tugas-14/Fruit';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Tugas-15/Routes';
import Nav from './Tugas-15/Nav';

function App() {
  return (
    // <div>
    //   <Table />
    //   <Form />
    //   <Timer />
    //   <Lists />
    //   <Fruit />
    // </div>
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}

export default App;