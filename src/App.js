import React,{useState} from 'react'
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
    }, 1500);
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
      <Navbar title ="WordForge" Mode={Mode} toggledarkmode={toggledarkmode}/>
      <Alert alert={alert}/>
      <div className="container ">
        <Rajiv heading="Enter the text to analyze" Mode={Mode} toggledarkmode={toggledarkmode} showalert={showalert}/>
        <About Mode={Mode} toggledarkmode={toggledarkmode}/>
      </div>
    </>
  );
}

export default App;
