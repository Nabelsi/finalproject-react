import Player from './Player';
//import playersjson from "../../playersjson";
import { useState, useEffect } from 'react';

export default function PlayersList({ newPlayer }) {
  const [playersArraytest, setPlayerArray] = useState([]);
 
  useEffect(() => {
    fetchPlayerList();
    }, []);
  
  //لا يمكن وضع التابع بشكل مباشر و منفصل لانه سيفوت بالحيط و ينفذ للابد

  async function fetchPlayerList() {
    const data = await (
      await fetch('https://localhost/Server2/loadplayerlist.php')
    ).json();

    setPlayerArray(data);
    console.log(data);
  }

useEffect(() => {
    onePlayerToList();
  }, [newPlayer]);




  function onePlayerToList(){
    if (newPlayer){
      let tmpList = [...playersArraytest, newPlayer ]; 
       setPlayerArray(tmpList);
     }
  }
 
  return (
    <div>
      {playersArraytest.map((elemnt) => (
        <Player
          key={elemnt.id}
          // from Array
          name={elemnt.name}
          id={elemnt.id}
          punkt={elemnt.punkt}

          //from Compnent
        />
      ))}
    </div>
  );
}
