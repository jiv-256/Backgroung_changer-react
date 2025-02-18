import React,{useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


// import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Rajiv from './components/Rajiv';
import Alert from './components/Alert'
function App() {
  const[alert, setalert] = useState(null);
  const[Mode, setMode] = useState('light');
  const showalert = (message, type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setalert(null)
    }, 1700);
  }

  const toggledarkmode=()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode has been enabled" , "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#FFFFFF';
      showalert("Light mode has been enabled" , "success")
    }
  } 

  return (
    < >
    <Router>
      <Navbar title ="WordForge" Mode={Mode} toggledarkmode={toggledarkmode}/>
      <Alert alert={alert}/>
      <Routes>
         
        
          
          
          <Route path="/" element={<div className="container ">
              <Rajiv heading="Try WordForge - Word Counter, Character Counter, Remove extra spaces" Mode={Mode} toggledarkmode={toggledarkmode} showalert={showalert}/>
            </div>} />  
          <Route path="/home" element={<div className="container ">
              <Rajiv heading="Try WordForge - Word Counter, Character Counter, Remove extra spaces" Mode={Mode} toggledarkmode={toggledarkmode} showalert={showalert}/>
            </div>} />  
          <Route path="/about" element={<About Mode={Mode} toggledarkmode={toggledarkmode}/>} /> 
          
            
          
        </Routes>
        </Router>
    </>
  );
}

export default App;
