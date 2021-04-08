import React from 'react';
import './TeamBody.css';
import { faFacebook,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const TeamBody = (props) => {
    const { strTeam, strCountry, strDescriptionEN, strGender, strSport,
        strStadiumDescription, strStadiumThumb, strTeamBadge,
        strTwitter, strFacebook, strYoutube, intFormedYear } = props.teamDetails;

    let imageURL;
    if (strGender === 'Male') {
        imageURL = 'https://i.ibb.co/C656ZQS/male.png';
    } else {
        imageURL = 'https://i.ibb.co/ZmCS038/female.png';
    }
    return (
        <div className="team-body py-5">
            <div className="container">
                <div className="row teamDetails py-3 my-3">
                    <div className="col-sm-7">
                        <h4>{strTeam}</h4>
                        <p>Founded: {intFormedYear}</p>
                        <p>Country: {strCountry}</p>
                        <p>Sport Type: {strSport}</p>
                        <p>Gender: {strGender}</p>

                    </div>
                    <div className="col-sm-5">
                        <img src={imageURL} alt="image broken" />
                    </div>

                </div>
                <div className="row">
                    <p>{strDescriptionEN}</p>
                    <p>{strStadiumDescription}</p>
                </div>
                <div className="row d-flex justify-content-center py-5">
                    <a href={`https://${strTwitter}`} className="text-white" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="6x"/></a>
                    <a href={`https://${strFacebook}`} className="text-white" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="6x" /></a>
                    <a href={`https://${strYoutube}`} className="text-white" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} size="6x"/></a>
                </div>
                
            </div>
        </div>
    );
};

export default TeamBody;