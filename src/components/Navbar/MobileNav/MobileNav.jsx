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
                                <a className='menu-item' >Home</a>
                            </li>
                            <li>
                                <a className='menu-item' href='#skills'>Compétences</a>
                            </li>
                            <li>
                                <a className='menu-item' href='#projects' >Projets </a>
                            </li>
                            <li>
                                <a className='menu-item' href='#certifications'>Certifications</a>
                            </li>
                    </ul>
                    </div>

            </div>
        </>
    );
}

export default MobileNav;