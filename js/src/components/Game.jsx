export default function Game({
  id,
  power_home,
  id_home_team,
  power_gast,
  id_gast_team,
  goals_home_team,
  goals_gast_team,
  flag,
  gameover,
  tag,
}) {
  return (
    <div>
      <div id={id} style={{ backgroundColor: 'white' }}>
        <span>&nbsp;&nbsp;{id}</span>
        <span>-</span>
        <span>&nbsp;&nbsp;{id_home_team} </span>

        <span>VS&nbsp;&nbsp;{id_gast_team}</span>
        <br></br>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;{power_home}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;{power_gast}</span>
        <br></br>
        <span>&nbsp;&nbsp;{goals_home_team}</span>
        <span>&nbsp;&nbsp;{goals_gast_team}</span>
        <span>&nbsp;&nbsp;{flag}</span>
        <span>&nbsp;&nbsp;{gameover}</span>
        <span>&nbsp;&nbsp;{tag}</span>
        <span>&nbsp;&nbsp;</span>

        <button onClick={() => createForm(id)}>erwartung</button>
        <button>result</button>
      </div>
      <hr></hr>
    </div>
  );
}

function createForm(id) {
  let id_player_selected=0;
  let erwartungSection = document.createElement('form');
  erwartungSection.style.backgroundColor = 'black';
  erwartungSection.innerHTML = 'ADD Erwartung';
  erwartungSection.style.width = '800px';
  erwartungSection.style.height = '200px';
  document.getElementById(id).appendChild(erwartungSection);

  async function loadPlayersList() {
    const data = await (
      await fetch('https://localhost/Server2/loadplayerlist.php')
    ).json();
    const playersListFromDB = data;

    const selectPlayer = document.createElement('select');
    const optionPlayer0 = document.createElement('option');
    optionPlayer0.innerHTML = 'Select Name';
    optionPlayer0.setAttribute('value', 0);
    selectPlayer.appendChild(optionPlayer0);

    playersListFromDB.forEach((player) => {
      const optionPlayer = document.createElement('option');
      optionPlayer.innerHTML = player.name;
      optionPlayer.setAttribute('value', player.id);
      selectPlayer.appendChild(optionPlayer);
    });

    erwartungSection.appendChild(selectPlayer);

    selectPlayer.addEventListener('change', (e) =>
      id_player_selected=e.currentTarget.value
          );
  }
  loadPlayersList();
  //  Ende of Select für Einen Spiler
  const input_home_goals = document.createElement('input');
  input_home_goals.type = 'number';

  erwartungSection.appendChild(input_home_goals);
  const input_gast_goals = document.createElement('input');
  input_gast_goals.type = 'number';

  erwartungSection.appendChild(input_gast_goals);


  const btnAddErwartung = document.createElement("button");
  btnAddErwartung.innerHTML = " + ";
  erwartungSection.appendChild(btnAddErwartung);
  btnAddErwartung.addEventListener("click",function(e){
    e.preventDefault();
    if(id_player_selected > 0 && input_home_goals.value && input_gast_goals.value){
       const newErwartung ={
      game_id:id,
      player_id:id_player_selected,
      goals_home_team : input_home_goals.value,
      goals_gast_team : input_gast_goals.value

    }
    add_erwartungToDB(newErwartung);

    }
   
    document.getElementById(id).removeChild(erwartungSection);
  });

}


function add_erwartungToDB({game_id, player_id,goals_home_team,goals_gast_team}) {
  const data = {
    game_id,
    player_id,
    goals_home_team,
    goals_gast_team,
    punkt:0
  };
  console.log(data)
  fetch('http://localhost/server2/addexpectaion.php', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
