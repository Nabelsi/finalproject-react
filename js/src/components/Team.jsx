export default function Team({ id,short_name, power }) {
    return (
      <article>
        <span>&nbsp;&nbsp;{id}</span>
        <span>-</span>
        <span>&nbsp;&nbsp;{short_name}</span>
        <span>&nbsp;&nbsp;,</span>
        <span>&nbsp;&nbsp;{power}</span>
      </article>
    );
  }
  