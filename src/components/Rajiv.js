import React, {useState} from 'react'

export default function Rajiv(props) {
  const[text,setText] = useState('');
  const handleUPClick = ()=>{
      let newtext = text.toUpperCase(); 
      setText(newtext)
      props.showalert("Converted to uppercase" , "success");
    }
    const handleLOClick= ()=>{
      let newtext = text.toLowerCase();
      setText(newtext)
      props.showalert("Converted to lowercase" , "success");
    }
    const handleonChange = (event)=>{
      setText(event.target.value)
    }
    const handleonclear = ()=>{
      let newtext = "";
      setText(newtext);
      props.showalert("text cleared" , "success");
    }
    const handleExtraSpace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showalert("extra space removed" , "success");
    }
    const handlecopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);

      // now remove the selection of text
      document.getSelection().removeAllRanges();

      // alert
      props.showalert("Text Copied" , "success");
    }

 
  return (
    <>
    
    <div className='rajivdiv' style={{color: props.Mode==='dark'?'white':'black'}}>
      <h2 className='mb-3 mt-2'>{props.heading}</h2>
      <div className="mb-8 m-2">
        <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.Mode==='light'?'grey':'#13466e' , color: props.Mode==='light'?'#ffff':'#ffff'}} id="myBox" rows="7"></textarea>
      </div>
      <button className={`btn btn-${ props.Mode==='light'?'primary':'success'} m-2`} onClick={handleUPClick} >Convert to Uppercase</button>
      <button className={`btn btn-${ props.Mode==='light'?'primary':'success'} m-2`} onClick={handleLOClick} >Convert to Lowercase</button>
      <button className={`btn btn-${ props.Mode==='light'?'primary':'success'} m-2`} onClick={handlecopy} >Copy Text</button>
      <button className={`btn btn-${ props.Mode==='light'?'primary':'success'} m-2`} onClick={handleExtraSpace} >Remove Extra Spaces</button>
      <button className={`btn btn-${ props.Mode==='light'?'primary':'success'} m-2`} onClick={handleonclear} >Clear Text</button>
    </div>  
   
    <div className="container my-3 " style={{color: props.Mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.length===0?0:text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
      <p>{text.length===0?0:Math.ceil(0.008*(text.split(" ").filter((element)=>{return element.length !== 0}).length))} Minutes read </p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}

