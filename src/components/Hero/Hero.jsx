import React from 'react';
import './Hero.css';
import texts from '../../resources/texts.js';

function Hero(props) {
    return (
        <section className='hero-container'>
            <div className='hero-content'>
                <h2>{texts.heroSection.greeting}</h2>
                <p>{texts.heroSection.aboutMe}</p>
            </div>
            <div className='hero-img'>
                <div>
                    <div className='tech-icon'>
                        <img src='./logo192.png' alt=''></img>
                    </div>
                    <img style={{"border-radius": "60px"}} src='./assets/images/ma-photo.jpg' alt=''></img>
                </div>

                <div>
                    <div className='tech-icon'>
                        <img src='./assets/images/js-icon.png' alt=''></img>
                    </div>
                    <div className='tech-icon'>
                        <img src='./assets/images/net-icon.png' alt=''></img>
                    </div>
                    <div className='tech-icon'>
                        <img src='./assets/images/java-icon.png' alt=''></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
