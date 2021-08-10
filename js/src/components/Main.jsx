import React from 'react'
import AddNewPlayer from './AddNewPlayer';
import PlayersList from './PlayersList';
import { useReducer } from 'react';
import TeamsList from './TeamsList';
import GamesList from './GamesList';


export default function Main() {

const [newPlayer, playersListDispatch] = useReducer(
    playersListReducer,
    null,
  );

 
    return (
        <div>
         <GamesList  />
        <TeamsList />
        <PlayersList newPlayer={newPlayer } />
        <AddNewPlayer playersListDispatch={playersListDispatch} /> 
        

         
        </div>
    )
}

function playersListReducer(newPlayer,message){
console.log(message.name)
return { id: message.id, name: message.name, punkt: 0 };

}