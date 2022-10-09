import React from 'react';
import {Link} from "react-router-dom";

const ProgramLanguage = ({path, colour, icon, language}) => {
  return (
    <Link 
        to={path} className="program-lan"
        style={{background: `linear-gradient(180deg, ${colour} 0%, rgba(255, 255, 255, 0) 100%)`,
            borderRadius: "20px"}}
    >
        <div className="program-lan-icon">
            {icon}
        </div>
        <h2 className="program-lan-title">{language}</h2>
    </Link>
  )
}

export default ProgramLanguage;