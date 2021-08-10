export default function Expectation({
  id,
  game_id,
  player_id,
  goals_home_team,
  goals_gast_team,
  points,
}) {
  return (
    <div>
      <span>&nbsp;&nbsp;{id}</span>
      <span>-</span>
      <span>&nbsp;&nbsp;{id} </span>
      <span>&nbsp;&nbsp;{game_id}</span>
      <span>&nbsp;&nbsp;{player_id}</span>
      <span>&nbsp;&nbsp;{goals_home_team}</span>
      <span>&nbsp;&nbsp;{goals_gast_team}</span>
      <span>&nbsp;&nbsp;{points}</span>

      <span>&nbsp;&nbsp;</span>
      <hr></hr>
    </div>
  );
}
