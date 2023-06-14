import React from 'react'


export default function Footer(props) {
  return (
   
      <>
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"></svg>
      </a>
      <span className={`mb-3 mb-md-0 `} style={{fontSize : '1.5em', fontFamily:'sans-serif'}}>© DKatraia</span>
    </div>

    <ul className="nav col-md-2 justify-content-center list-unstyled d-flex" >
    <li><a href='#'><i className='bx bxl-github' style={{fontSize: '2em'}}></i></a></li>
    <li><a href='#'><i className='bx bxl-linkedin-square' style={{fontSize: '2em'}}></i></a></li>
    </ul>
  </footer>
</>
 
  )
}

