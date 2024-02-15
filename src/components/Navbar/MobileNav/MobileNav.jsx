import React from 'react';
import './MobileNav.css'
function MobileNav({isOpen, toggleMenu}) {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
                >
                    <div className='mobile-menu-container'>
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
                    </div>

            </div>
        </>
    );
}

export default MobileNav;