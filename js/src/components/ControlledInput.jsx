import { useState } from 'react';

export default function ControlledInput() {
  const [text, setText] = useState('');
  return (
	<div className="input-demo">
  	<label htmlFor="text">Text</label>
  	<input
    	onChange={(e) => setText(e.currentTarget.value)}
    	value={text}
    	type="text"
    	id="text"
  	/>
  	<button onClick={() => setText('')}>Löschen</button>

  	<div className="text-box">{text}</div>

  	{/*
1. Fügt einen Input vom Type range ein, mit möglichen Werten von
0 bis 360 (min und max-Attribute). id soll hue sein, dazu ein
passendes Label mit dem Text "Farbe".
2. Erzeugt einen State namens hue mit Startwert 0. Der State
soll mit dem Input synchron sein.
3. Gebt im span-Element den Wert von hue aus.
4. Gebt .color-box per Inline-Style eine Hintergrundfarbe mit
einem hsl-Wert, wobei hue der Wert des State sein soll, die anderen
Werten können fix sein, z.B. 70% und 50%.
*/}

  	<div className="color-box">
    	<span></span>
  	</div>
	</div>
  );
}


