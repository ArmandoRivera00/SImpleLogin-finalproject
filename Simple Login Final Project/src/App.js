import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import {Login} from "./Login"
import { Register } from './Register';

function App() {
  const [currenForm, setCurrentForm] = useState('login');
  
const toggleForm = (formName) => {
  setCurrentForm(formName);
}

  return(
    <div className="App">
      {
        currenForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
