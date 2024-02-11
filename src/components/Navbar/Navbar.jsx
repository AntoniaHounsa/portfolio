import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className='nav-wrapper'>
                <div className='nav-content'>
                  <ul>
                    <li>
                        <a className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a className='menu-item'>Skills</a>
                    </li>
                    <li>
                        <a className='menu-item'>Work Experience</a>
                    </li>
                    <li>
                        <a className='menu-item'>Contact Me</a>
                    </li>
                  </ul>
                  <button className="menu-btn" onClick={()=>{}}>
                  <span className="material-icons-outlined"
                    style={{fontSize:"1.8rem"}} >menu</span>
                  </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;