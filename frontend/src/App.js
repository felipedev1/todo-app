import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react';
import './App.css';
import Todo from './todo/Todo'
import About from './about/About'
import Menu from './template/Menu'

function App() {
  return (
    <div className="container">
      <Menu />
      <Todo />
      <About />
    </div>
  );
}

export default App;
