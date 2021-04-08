import React, { useEffect, useState } from 'react';
import { CardColumns } from 'react-bootstrap';
import Team from '../Team/Team';
import './Home.css';
import img from '../../images/stadium.jpg'

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
            .then(res => res.json())
            .then(data => setData(data.teams.slice(0, 15)));
    }, [])
    console.log(data);
    return (

        <div>
            <div className="heading">
                <img src={img} alt="img broke"/>
                <h1 className="py-3">SPORTS MASTER</h1>
            </div>
            <div className="cardBody">
                <CardColumns className="container py-5">
                    {
                        data.map(tm => <Team key={tm.idTeam} teamDetails={tm}></Team>)
                    }
                </CardColumns>
            </div>
        </div>
    );
};

export default Home;