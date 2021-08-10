import { useState } from 'react';

export default function MoodToggle(){
  
    const [situatuion, setFeeling] = useState(true);
    // let [situatuion2, setFeeling2] = useState(false);
    console.log([situatuion, setFeeling]);
    // const state = useState("Aboud");
    //  console.log(state)
    //  let [situatuion2, syHello]=state;
    //  const iamHani = () => syHello("Hani");
    //  const iamAboud = () => syHello("Aboud");
     return (
    <section className="mood">
    <div className="mood__image">{situatuion?"😊":"😒"}</div>
    <div className="mood__image">{situatuion?"True":"False"}</div>
    <div className="mood__buttons">
      <button onClick={()=>setFeeling(true)} disabled={situatuion}>Glücklich</button>
      <button onClick={()=>setFeeling(false)} disabled={!situatuion}>Traurig</button>
      <button onClick={() => setFeeling((currentSituatuion) => !currentSituatuion)}>{situatuion?"Happy":"Sad"}</button>
      {/* <button onClick={iamHani}>hani</button>
      <button onClick={iamAboud}>Aboud</button>
      <div className="mood__image">{state[0] == "Aboud"?"Me":"No"}</div> */}
    </div>
    </section>)
}
/*
Exportiert die Komponente MoodToggle.
Die Komponente soll den State "happy" als boolean haben,
Anfangswert soll true sein.
Als image soll entweder ein Glückliches oder ein Trauriges
Emoji dargestellt werden, je nachdem, ob happy true oder false ist.
Der erste Button soll auf Glücklich setzen, der zweite auf Traurig.
Der dritte soll in den jeweils anderen Zustand wechseln und als
Text auch den jeweils anderen Zustand haben, d.h. "Traurig" wenn
man aktuell glücklich ist.
Bonus: Die ersten beiden Buttons sollen das disabled-Attribut so haben,
dass sie inaktiv sind, wenn der aktuelle Zustand schon ihrer
Funktion entspricht, d.h. wenn happy true ist, soll der
Glücklich-Button inaktiv sein.
*/

/*
	<section class="mood">
  	<div class="mood__image">😊</div>
  	<div class="mood__buttons">
    	<button>Glücklich</button>
    	<button>Traurig</button>
    	<button>Traurig</button>
  	</div>
	</section>

*/

