import { useRef, useState } from 'react';

export default function AddNewPlayer({ playersListDispatch }) {
  const [player_name, setName] = useState('');
  const [player_id, setIdPlayer] = useState('');
  const inputRef = useRef();

  return (
    <div className="input-demo">
      <label htmlFor="addPlayer_form">&nbsp;&nbsp; Add New Player</label>
      <p>&nbsp; &nbsp; Player ID :</p>
      &nbsp;&nbsp;
      <input
        type="number"
        id="addplayer_player_id"
        value={player_id}
        ref={inputRef}
        onChange={(e) => setIdPlayer(e.currentTarget.value)}
      />
      <p>&nbsp;&nbsp; Player Name :</p>
      &nbsp;&nbsp;
      <input
        type="text"
        id="addplayer_player_name"
        onChange={(e) => setName(e.currentTarget.value)}
        value={player_name}
      />
      <br></br>
      <button
        onClick={function () {
          savePlayer(player_name, player_id);
          setIdPlayer('');
          setName('');
          inputRef.current.focus();
          playersListDispatch({
            id: player_id,
            name: player_name,
          });
        }}
      >
        Save
      </button>
      <button
        onClick={function () {
          setIdPlayer('');
          setName('');
          () => inputRef.current.focus();
        }}
      >
        New Play
      </button>
      <div className="text-box">{player_id}</div>
      <div className="text-box">{player_name}</div>
    </div>
  );
}

function savePlayer(name, id) {
  if (name != '' && id != '') {
    add_Data(name, id);

    console.log('from Save one Player');
  }
}

function add_Data(name, id) {
  const data = {
    name,
    id,
  };
  fetch('http://localhost/server2/addplayer.php', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
