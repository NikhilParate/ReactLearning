import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = ()=>{
   
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert('Dark mode has been enabled', 'warning');
        document.title = 'Text Utils - Dark Mode';
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert('Light mode has been enabled', 'success');
        document.title = 'Text Utils - Light Mode';
      }

  }

  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* <Navbar title="Text Utils" aboutText="About Text"/> */}
      <BrowserRouter>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>    
        {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
        {/* <About></About> */}
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
