import React from 'react';
import './Hero.css';
import texts from '../../resources/texts.js';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { Grid } from '@mui/material';


function Hero() {
    const iconComponents = {
        EmailIcon: EmailOutlinedIcon,
        PhoneIcon: PhoneInTalkOutlinedIcon
      };
    return (

        <section className='hero-container'>
            <div className='hero-content'>
                <h2>{texts.heroSection.greeting}</h2>
                <p>{texts.heroSection.aboutMe}</p>
                <div className='contacts'>
                    <h3>Pour me contacter :</h3>
                    <ul className="contact-list">
                        <Grid container spacing={0} >
                            <Grid item xs={12} md={6} lg={6} >
                                <li key={1} className="contact-item">
                                <EmailOutlinedIcon />
                                    {texts.contact[0].content}
                                </li>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} >
                                <li key={1} className="contact-item">
                                    <PhoneInTalkOutlinedIcon />
                                    {texts.contact[1].content}
                                </li>
                            </Grid>

                        </Grid>
                    </ul>
                </div>
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
