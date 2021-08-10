export default function Player({ name, id, punkt }) {
  return (
    <div>
      <span>&nbsp;&nbsp;{id}</span>
      <span>-</span>
      <span>&nbsp;&nbsp;{name}</span>
      <span>&nbsp;&nbsp;{punkt}</span>
      <button onClick={() => console.log(id, name, punkt)}>Details</button>
    </div>
  );
}
