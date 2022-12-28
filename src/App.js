// import PropTypes from 'prop-types'
import { Route,  BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {BrowserRouter as Router, Switch , Route, Link} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (type, message) =>{
    setAlert({
      type : type,
      msg : message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("success","Dark Mode Enabled Successfully.....!");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'powderblue';
      showAlert("danger","Dark Mode Disabled");
    }
  }

  return (
  // <>
   <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
    <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />}/>
      </Routes>
    </BrowserRouter>
   
  );
}



export default App;
