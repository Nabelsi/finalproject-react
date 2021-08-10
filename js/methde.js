export function findNameBeiId(idx, arrayOfTeams) {
  let newName = '';
  arrayOfTeams.forEach((team) => {
    if (team.id == idx) {
      newName = team.name;
    }
  });
  return newName;
}

export function findKlasseBeiID(idx,arrayOfTeams){
    let newKlasse = '';
    arrayOfTeams.forEach((team) => {
      if (team.id == idx) {
        newKlasse = team.power;
      }
    });
    return newKlasse;
}

export function findIdBeiName(name, arrayOfTeams){
let zielId;
arrayOfTeams.forEach((team)=>{
if(team.name ===name){
    zielId = team.id
;}
})

return zielId;
}

export async function loadJsonGames(tag) {
  const object = {
    headers: {
      "X-Auth-Token": "445e99656c8f499c9e87ffff3f1fb41b",
    },
  };
  const response = await fetch(
    "https://api.football-data.org/v2/competitions/BL1/matches?matchday="+tag,object);
  const data = await response.json();
    console.log(data.matches);

return data;
}

