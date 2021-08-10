import React from 'react';
import Game from './Game';
import { useState, useEffect } from 'react';
import { findNameBeiId,findKlasseBeiID,loadJsonGames } from '../../methde';

export default function GamesList() {
  const [GamesListArray, setGamesArray] = useState([]);
  const [TeamsListArray, setTeamsArray] = useState([]);
  useEffect(() => {
    fetchTeamsList();
  }, []);

  useEffect(() => {
   
    fetchGamesList();
  }, []);

  //console.log(loadJsonGames(2));

  async function fetchGamesList() {
    // const data = await (
    //   await fetch('https://localhost/Server2/loadgameslist.php')
    // ).json();
  
    // setGamesArray(data);
    let tmpArray = [];
    const data = await loadJsonGames(1)
    console.log(data.matches[0].homeTeam.id);
    for(let i = 0; i < data.matches.length;i++){
      const obj = {
        id :data.matches[i].id,
        id_home_team :data.matches[i].homeTeam.id,
        id_gast_team :data.matches[i].awayTeam.id,
        goals_home_team:data.matches[i].score.fullTime.homeTeam=== null ?-9:data.matches[i].score.fullTime.homeTeam,
        goals_gast_team:data.matches[i].score.fullTime.awayTeam=== null ?-9:data.matches[i].score.fullTime.awayTeam,
        flag:0,
        gameover:data.matches[i].status === "FINISHED"? 1 : 0,
        tag:data.matches[i].matchday

      }
      tmpArray.push(obj);
    }
    console.log(tmpArray);
    setGamesArray(tmpArray);
   }

  async function fetchTeamsList() {
    const data = await (
      await fetch('https://localhost/Server2/loadteamslist.php')
    ).json(); 
    setTeamsArray(data);
  }



  return (
    <div>
      <div>
        <span>&nbsp; &nbsp;Game_ID</span>
        <span>&nbsp;&nbsp;Home Team</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Away Team</span>
        <br></br>
        <br></br>
      </div>
      {GamesListArray.map((game) => (
        <Game
          key={game.id}
          id={game.id}
          id_home_team={findNameBeiId(game.id_home_team,TeamsListArray)}        
          power_home={findKlasseBeiID(game.id_home_team,TeamsListArray)}
          id_gast_team={findNameBeiId(game.id_gast_team,TeamsListArray)}
          power_gast={findKlasseBeiID(game.id_gast_team,TeamsListArray)}
          goals_home_team={game.goals_home_team}
          goals_gast_team={game.goals_gast_team}
          gameover={game.gameover===1?"Vorbei":"Nicht Vorbei"}
        />
      ))}
    </div>
  );
}

