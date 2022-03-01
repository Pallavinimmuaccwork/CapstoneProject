import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from 'react-router-dom'

const Home = () => {

  return (
    
     <>
  <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <NavLink className="navbar-brand" to="#">Labarotary</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">Admin Login</span>
    <span className="navbar-toggler-icon">Register User</span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="#"> <span className="sr-only">Samples</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="#">Enter Samples</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/admin-login">Admin Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register-user">Register User</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/admin-homepage">Admin HomePage</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
         
        </NavLink>
        
      </li>
      <li className="nav-item">
        <NavLink className="nav-link disabled" to="#"> Logout</NavLink>
      </li>
    </ul>
  </div>
</nav>
     </> 

   
    
  )
}

export default Home