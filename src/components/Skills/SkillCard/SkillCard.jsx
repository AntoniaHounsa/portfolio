import React, {useState, useEffect} from "react";
import './SkillCard.css'

function SkillCard({skill}) {
    //visible or not
    return (
        <div className="skill">
            <div className="img-name-container">
                <img src={skill.icon} className="skill-icon"  alt={`Icône de ${skill.name}`} />
                <span>{skill.name}</span>
            </div>

          <div className="line" />
        </div>
    );
}

export default SkillCard;