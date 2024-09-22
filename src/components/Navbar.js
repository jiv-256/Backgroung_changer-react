import React,{useState} from 'react'
import PropType from 'prop-types'
export default function Navbar(props) {
  // const [mystyle, setmystyle] = useState({
  //   color:'black',
  //   bakgroundColor:'white'
  // })
  // const [btntext, setbtntext] = useState("Light Mode")
  
  // const lightmode =()=>{
  //   if(mystyle.color =='black'){
  //     setmystyle({
  //       color:'black',
  //       backgroundColor:'white'
  //     })
  //     setbtntext("Dark mode")
  //   }
  //   else{
  //     setmystyle({
  //       color:'white',
  //       backgroundColor:'black'
  //     })
  //     setbtntext("blue Mode")
      
  //   }
  // }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`} >
  <div className="container-fluid">
    <a className="navbar-brand" >{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        
      </ul>
      <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
      <input className="form-check-input"onClick={props.toggledarkmode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
      {/* <button className="btn btn-outline-success my-2 my-sm-0" onClick={lightmode} type="submit">{btntext}</button> */}
    
    </div>
  </div>
</nav>
  )
}