import './App.css';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
 const [mode, setMode] = useState("light")
 const [alert, setAlert] = useState(null)

 const showAlert =(message, type)=>{
  setAlert({
    msg: message,
    type: type
  })

  setTimeout(()=>{
    setAlert(null)
  },1500)
 }
 
 const modeSelector = () =>{
  if(mode === "light"){
    setMode("dark")
    document.body.style.backgroundColor = "#234E70"; //changing body color through js through DOM
    showAlert("Dark mode selected","success")
  }else{
    setMode('light')
    document.body.style.backgroundColor = "white";
    showAlert("Light mode selected","success")
  }
}

// body backgroundColor changer 
const bgBodyColorChanger = (ccode) => {
  // alert(ccode)
  console.log(ccode)
  document.body.style.backgroundColor = ccode;
}

  return (
    <>
    <Router>
      <Navbar title="Text Utils" mode={mode} modeSelector={modeSelector} bgBodyColorChanger={bgBodyColorChanger}/>
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
        {/* we use exact because sometimes similar path renders same component, exact will search for exact string patterns where the respective path component will be rendered. */}
          <Route exact path="/" element={<Textbox content="Enter the text below.." mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About/>}/>
      </Routes>
      </div>
     </Router>
    </>
  );
}

export default App;
