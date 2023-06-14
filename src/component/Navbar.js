import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}>
  <div className="container-fluid ">

    <a className="navbar-brand " href="">{props.title}</a>
 
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a href="" className="nav-link active">Home</a>
        </li>
        <li className="nav-item  ">
          <a href="#aboutus"  className="nav-link active " >{props.abouttext}</a>
        </li>
        </ul>
      <div className={`form-check form-switch  text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.mode==='dark'?'Dark mode':'Light mode'}</label>
</div>
<button type="button"  className='btn btn-success mx-1 my-3' onClick={props.togggreenmode}>Green mode</button>
    </div>
  </div>
</nav>
    </div>
  );}   
Navbar.propTypes={
     title: PropTypes.string,
     abouttext: PropTypes.string,
               
}
Navbar.defaultProps= {
    title:'Set titke',
}