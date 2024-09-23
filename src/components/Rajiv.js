import React, {useState} from 'react'

export default function Rajiv(props) {
  const[text,setText] = useState('');
  const handleUPClick = ()=>{
      let newtext = text.toUpperCase(); 
      setText(newtext)
  }
  const handleLOClick= ()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleonChange = (event)=>{
    setText(event.target.value)
  }
  const handleonclear = ()=>{
    let newtext = "";
    setText(newtext);
  }
const handleExtraSpace = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}

 
  return (
    <>
    
    <div className='rajivdiv' style={{color: props.Mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-8 m-2">
        <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.Mode==='light'?'grey':'white' , color: props.Mode==='light'?'dark':'dark'}} id="myBox" rows="7"></textarea>
      </div>
      <button className="btn btn-primary m-2" onClick={handleUPClick} >Convert to Uppercase</button>
      <button className="btn btn-primary m-2" onClick={handleLOClick} >Convert to Lowercase</button>
      <button className="btn btn-primary m-2" onClick={handleonclear} >Clear Text</button>
      <button className="btn btn-primary m-2" onClick={handleExtraSpace} >Remove Extra Spaces</button>
    </div>  
   
    <div className="container my-3 " style={{color: props.Mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.length===0?0:text.split(" ").length} words and {text.length} characters</p>
      <p>{text.length===0?0:Math.ceil(0.008*(text.split(" ").length))} Minutes read </p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}

