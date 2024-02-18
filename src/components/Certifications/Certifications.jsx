import React from 'react';
import './Certifications.css'
import texts from '../../resources/texts';
import CertificationCard from './CertificationCard/CertificationCard';
import { Grid } from '@mui/material';
import SectionTitle from '../SectionTitle/SectionTitle';
function Certifications({certifications}) {
    return (
        <section id='certifications'>
        <SectionTitle sectionName={texts.sectionTitle.certifications}/>
        <Grid container spacing={0} style={{padding:'20px'}}>
            {certifications && certifications.map((certification) => (
                <Grid item xs={12} md={6} lg={4} >
                    <CertificationCard key={certification.id} certification={certification} />
                </Grid>
             ))}
        </Grid>

    </section>
    );
}

export default Certifications;