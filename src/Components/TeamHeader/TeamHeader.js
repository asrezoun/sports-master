import React from 'react';
import './TeamHeader.css'

const TeamHeader = (props) => {
    const {strStadiumThumb, strTeamBadge} = props.teamDetails;
    let styles = {
       backgroundImage: `${strStadiumThumb}`,
       backgroundColor: 'blue'
    }
    
    return (
        <div className="team-header d-flex justify-content-center align-items-center" style={styles}>
            <img src={strTeamBadge} alt=""/>
        </div>
    );
};

export default TeamHeader;