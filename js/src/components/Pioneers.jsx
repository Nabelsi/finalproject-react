import biographies from './../biographies';
import Pioneer from './Pioneer';

export default function Pioneers() {
  return (
    <section className="pioneers">
      <header>
        <h2>Computer Pioneers</h2>
      </header>
      <div className="pioneers__grid">
        {biographies.map((pioneer) => (
          <Pioneer key={pioneer.url} {...pioneer} />
        ))}
      </div>
    </section>
  );
}

/* 
      <section class="pioneers">
        <header><h2>Computer Pioneers</h2></header>
        <div class="pioneers__grid">         
        </div>
      </section>

*/
