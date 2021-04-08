import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Team = (props) => {

    const { idTeam, strSport, strTeam, strTeamBadge } = props.teamDetails;
    console.log(strTeam);
    const history = useHistory();
    const showTeamDetails= (id)=>{
        const url = `teamDetails/${id}`;
        history.push(url);
    }
    return (
        
        <Card>
        <Card.Img variant="top" src={strTeamBadge} className="w-25" />
        <Card.Body>
          <Card.Title>{strTeam}</Card.Title>
          <Card.Text>
            <small>Sports type: {strSport}</small>
          </Card.Text>
          <Button onClick={() =>showTeamDetails(idTeam)}variant="primary">Explore</Button>
        </Card.Body>
      </Card>
    );
};

export default Team;