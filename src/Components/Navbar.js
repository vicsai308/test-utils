import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="#tbh">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          {/* replace 'a' to 'link' and 'href' to 'to' to use react router features */}
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#tbh" role="button" data-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#tbh">Action</a>
            <a className="dropdown-item" href="#tbh">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#tbh">Something else here</a>
          </div>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>

      <button className="btn btn-primary mr-2" style={{backgroundColor:"#9c4444", border:"#9c4444"}} onClick={()=>props.bgBodyColorChanger('#9c4444')}></button>
      <button className="btn btn-primary mr-2" style={{backgroundColor:"#2b8a4e", border:"#2b8a4e"}} onClick={()=>props.bgBodyColorChanger('#2b8a4e')}></button>
      <button className="btn btn-primary mr-2" style={{backgroundColor:"#642b8a", border:"#642b8a"}} onClick={()=>props.bgBodyColorChanger('#642b8a')}></button>
      
      <div className="custom-control custom-switch">
          <input type="checkbox" className="custom-control-input" onClick={props.modeSelector} id="customSwitch1"/>
          {/* useing template strin in className to dynamically change state {`paramenters-${template string}`} and also ternary operator for validating current styles*/}
          <label className={`custom-control-label text-${props.mode === "light" ? 'dark' : 'light'}`} htmlFor="customSwitch1">Enable Dark Mode</label>
        </div>
      {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
    </nav>
    
  )
}
