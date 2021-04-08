import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamHeader from '../TeamHeader/TeamHeader';
import TeamBody from '../TeamBody/TeamBody';

const TeamDetails = () => {
    const {id}= useParams();
    //console.log(id);

    const [teamData, setTeamData] = useState({});
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
        .then(res=>res.json())
        .then(data=> setTeamData(data.teams[0]));
    },[id])
    //console.log(teamData);
    
        //console.log(strFacebook);
    return (
        <div>
            <div>
                <TeamHeader teamDetails={teamData}></TeamHeader>
            </div>
            <div>
                <TeamBody teamDetails={teamData}></TeamBody>
            </div>
        </div>
    );
};

export default TeamDetails;