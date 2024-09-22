import React,{useState} from 'react'
// import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Rajiv from './components/Rajiv';
import Alert from './components/Alert'
function App() {
  const[Mode, setMode] = useState('light');
  const toggledarkmode=()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='light';
    }
  } 

  return (
    < >
      <Navbar title ="WordForge" Mode={Mode} toggledarkmode={toggledarkmode}/>
      <Alert alert="this is an Alert"/>
      <div className="container ">
        <Rajiv heading="Enter the text to analyze" Mode={Mode} toggledarkmode={toggledarkmode}/>
        {/* <About Mode={Mode} toggledarkmode={toggledarkmode}/> */}
      </div>
    </>
  );
}

export default App;
