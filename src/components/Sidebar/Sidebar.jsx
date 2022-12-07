import React from 'react'
import { Link } from 'react-router-dom';
import './sidebars.css'

function Sidebar() {
  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "200px",height:"100vh",backgroundColor:"blue" }}>
    <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
      <span class="fs-4">Admin Panel</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li>
      <Link to="/" class="nav-link text-white">
          {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg> */}
        Home
        </Link>
      </li>
      <li>
      <Link to="/students" class="nav-link text-white">
          {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg> */}
         Dashboard
        </Link>
      </li>
      
      <li>
        <Link to="/students" class="nav-link text-white">
          {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg> */}
          Students
        </Link>
      </li>
      <li>
        <Link to="/mentors" class="nav-link text-white">
          {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg> */}
          Mentors
        </Link>
      </li>
    </ul>
    <hr/>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        <strong>Admin</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Sidebar;