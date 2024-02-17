import React from 'react';
import './SectionTitle.css'
function SectionTitle({sectionName}) {
    return (
        <div className="section-title">
                <span>{sectionName}</span>
                <div className="line" />
        </div>
    );
}

export default SectionTitle;