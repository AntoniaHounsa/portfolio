import React from 'react';
import './Project.css'
import SectionTitle from '../SectionTitle/SectionTitle';
import texts from '../../resources/texts';
import ProjectCard from './ProjectCard/ProjectCard';
import { Grid } from '@mui/material';

function Projects({projects}) {
    return (
        <section id='projects'>
            <SectionTitle sectionName={texts.sectionTitle.projects} />
            <Grid container spacing={0} style={{padding:'20px'}}>
                {projects && projects.map((project) => (
                    <Grid item xs={12} md={6} lg={6} >
                        <ProjectCard key={project.id} project={project} />
                    </Grid>
                 ))}
            </Grid>

        </section>
    );
}

export default Projects;