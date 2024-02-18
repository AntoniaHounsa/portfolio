import React from 'react';
import './CertifcationCard.css'
function CertificationCard({certification}) {
    return (
        <div className="project-card">
            <img src={certification.image} alt={certification.title} className="project-image" />
            <div className="project-info">
                <h4 className="project-title">{certification.title}</h4>

                <a href={certification.link}
                    className="github-button"
                    style={{textDecoration: 'none'}}
                    target="_blank">
                   Apperçu
                </a>

            </div>
        </div>
    );
}

export default CertificationCard;