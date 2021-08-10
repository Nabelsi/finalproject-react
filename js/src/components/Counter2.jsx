import { useState } from 'react';

function click() {
  console.log('Klick');
}

export default function Counter({ initialValue = 0 }) {
  /* Der useState-Hook gibt einen Array zurück, der an erster
	Stelle die Variable enthält, die immer den aktuellen Wert
	des "State" beinhaltet. An zweiter Stelle im Array ist
	die set-Funktion, mit der man den State ändern kann, also
	den Inhalt von count. Der Array wird mit
	Destructuring in seine zwei Bestandteile zerlegt.
	Beim Aufruf von useState wird der Startwert übergeben, der
	am Anfang in count steckt. */

  const [count, setCount] = useState(initialValue);

  /*
  Mit setCount wird der Wert von count verändert und daraufhin die
  Komponente mit dem neuen Wert frisch dargestellt.
  Wichtig: Nie eine State-Variable, z.B. hier count, direkt manipulieren,
  sondern immer die set-Funktion benutzen.
  */
  const increase = () => setCount(count + 1);

  /*
  Achtung: Wegen der Art, wie React intern die Darstellung von
  Komponenten und ihre Aktualsierung optimiert, ist nicht garantiert,
  dass in count der aktuelle korrekt Wert steckt. Möchte man also
  den neuen Wert einer State-Variable durch Veränderung des bisherigen
  Wertes erzeugen, z.B. hochzählen, dann muss man in die set-Funktion
  nochmals eine Callback-Funktion geben, die dann garantiert den aktuellen
  Wert als Argument erhält.
  */
  const decrease = () => setCount((currentCount) => currentCount - 1);

  return (
	<div>
  	<div>{count}</div>
  	{/* Event-Listenern werden in React inline an die Elemente
  	gehängt. Dabei wird camelCase verwendet, d.h. aus onclick
  	wie in normalem JavaScript wird onClick.
  	Wichtig ist, dass semantisches HTML verwendt wird, d.h. keine
  	Klicks an div-Elemente, sondern an button-Elemente hängen.
  	Außerdem können Event Listener nur an HTML-Elemente gehängt
  	werden, nicht and React-Komponenten.
  	Es kann entweder der Name einer Funktion oder eine anonyme
  	Funktion als Callback-Funktion verwendet werden. */}
  	<button onClick={increase}>Plus</button>
  	<button onClick={decrease}>Minus</button>
  	{/* Bei Inline-Funktionen ist es wichtig, eine Funktion zu
  	definieren, die setCount(0) aufruft, statt setCount()
  	direkt aufzurufen. */}
  	<button onClick={() => setCount(0)}>Reset</button>
	</div>
  );
}

// const words = ['Hallo', 'Welt'];

// /* const firstWord = words[0];
// const secondWord = words[1]; */

// const [firstWord, secondWord] = words;


