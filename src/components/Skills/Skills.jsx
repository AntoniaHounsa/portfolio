import React from 'react';
import './Skills.css'
import texts from '../../resources/texts.js'
import SkillCard from './SkillCard/SkillCard.jsx';
import { Grid } from '@mui/material';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';

function Skills({skills}) {
    return (
        <section className='skills-container' id='skills'>
            <SectionTitle  sectionName= {texts.sectionTitle.skills}/>
            <h2>{texts.skillsSection.titleTechnologies}</h2>
            <Grid container spacing={2} className='skills-list-container'>
                {skills.skills.map((skill)=>(
                    <Grid item xs={12} md={6} lg={4} >
                        <SkillCard skill={skill} />
                    </Grid>
                ))}
            </Grid>

            <h2>{texts.skillsSection.titleProjectManagment}</h2>
            <Grid container spacing={2} className='skills-list-container'>
                {skills.projectManagementList.map((skill)=>(
                    <Grid item xs={12} md={6} lg={4} >
                        <SkillCard skill={skill} />
                    </Grid>
                ))}
            </Grid>

        </section>
    );
}

export default Skills;