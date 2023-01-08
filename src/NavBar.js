
import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css';
function NavBar() {
  return (
    <>
      <nav>
          <div> 
            <h5 className='center'>Students And Teachers Management Dashboard</h5><br/>
            
            <Link to = "/"><span> Dashboard </span></Link>
            <Link to = "create-student" ><span>Create Student</span></Link>
            <Link to = "create-mentor" ><span>Create Mentor</span></Link>
            
          </div>
        </nav>
    </>
  );
}

export default NavBar
          

          