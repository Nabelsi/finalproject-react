import React from 'react';
import Team from './Team';
import { useState, useEffect } from 'react';

export default function TeamsList() {
  const [teamsListArray, setTeamsArray] = useState([]);
  useEffect(() => {
    fetchGamesList();
  }, []);

  async function fetchGamesList() {
    const data = await (
      await fetch('https://localhost/Server2/loadteamslist.php')
    ).json();
    setTeamsArray(data);
  }

  return (
    <div>
      <div>
        <span>&nbsp; &nbsp;ID</span>
        <span>&nbsp;&nbsp;Team Name</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Power</span>
        <br></br>
        <br></br>
      </div>
      {teamsListArray.map((team) => (
        <Team
          key={team.id}
          short_name={team.short_name}
          id={team.id}
          power={team.power}
        />
      ))}
    </div>
  );
}
