//import React from 'react';

// const HelloWorld = <strong>Hallo React!</strong>;
// export default HelloWorld;

// Ab Version 17 muss React nicht mehr in Dateien mit JSX importiert werden
// import React from 'react';
import React, { Component } from 'react';
import { Fragment } from 'react';
import PicsumImage from './PicsumImage';
import Quote from './Quote';
import Counter from './Counter';

const C = new Counter();

const images11 = [
  { id: 1003, alt: 'Reh' },
  { id: 237, alt: 'Hund' },
  { id: 1001, alt: 'Boot' },
  { id: 1015, alt: 'Tal' },
];

class Local extends Component {
  constructor(n = 'Silina', a = 11) {
    super();
    this.name = n;
    this.age = a;
  }
  render() {
    return <h1>I am {this.props.name} from render</h1>;
  }
  foo() {
    return (
      <h1>
        I am {this.name} from foo and i am {this.age}
      </h1>
    );
  }
}

const LNew = new Local('Hani', 20);
const newSilina = new Local();
const S1 = LNew.foo();

console.log(S1);

function LocalFunction() {
  return <h1>111111111</h1>;
}

export default function JsxDemo() {
  return (
    <div>
      <InlineCss />
      <HtmlString />
      {newSilina.foo()}
      {/* {LNew.name} */}
      {/* {S1} */}
      <Local name="Karam" />
      <C.foo />
      <LocalFunction />
      <Counter />
      <HelloWorld />
      <Emoji icon="🤦‍♂️" description="lass us allein" />
      <Emoji icon="😢" description="WOW" />
      <Siblings />
      <Siblings2 />

      <PicsumImage
        id={102}
        
        width={800}
        height={600}
        alt="himbeeren in der sonne"
      />

      <Parent>
        <strong>Tochter</strong>
        <br />
        <strong>Sohn</strong>
        <Emoji icon="🤷‍♂️" description="Hani" />
      </Parent>
      <Collection />
      <Collection2 />
      <ImageGrid images={images11} />

      <Quote>
        Der <i> Ball </i> funny
      </Quote>
      <Conditionals name="" email="BBC@bbc.com" />
    </div>
  );
}

export function Conditionals({ name = 'Unknow', email, items = [] }) {
  return (
    <div>
      <h2>The name - line 1 is : {name}</h2>
      <h2>The name - line 2 is : {name ? name : 'Anonymous'}</h2>
      <h3>{name || 'Anonymous'}</h3>

      <h3> {email && <a href={`mailto:${email}`}>die Email : {email}</a>}</h3>
      <h2>{items.length && 'liste'}</h2>
    </div>
  );
}
// بسبب و و  يجب ان يكون الايميل موجودا لكي يعرض
/* Eine React-Komponente ist eine Funktion, die mit return HTML
(oder andere React-Komponenten) zurückgibt. Man kann sie wie HTML-Elemente
einsetzen, und dabei den Funktionsname als Elementnamen nutzen.
Der Name der Funktion sollte immer mit Großbuchstaben beginnen und
Wörter mit Großbuchstaben Trennen (sog. PascalCase-Schreibweise).
Wichtig ist, dass alle HTML-Elemente und React-Komponenten geschlossen
werden müssen, es gibt (wie in XML) keine selbstschließenden Elemente.
Aus dem HTML-Element <img> wird also entweder <img></img> oder in der
Kurzschreibweise <img /> (mit Slash vor der schließenden eckigen Klammer).
Untenstehende Komponente könnte so verwendet werden: <HelloWorld />
*/

export function HelloWorld() {
  return <strong>Hallo Corona Welt 2021!</strong>;
}

function Emoji(para) {
  // console.log(para);
  return (
    <span className="emoji" aria-label={para.description} role="img">
      {para.icon}
      {para.description}
    </span>
  );
}
/* React-Komponenten müssen in return immer EIN alles umfassendes
Element zurückgeben, man kann also nicht z.B. h2 und p neben bzw.
nacheinander zurückgeben. Als Ausweg kann man Fragment (muss aus react
importiert werden) als Klammer um die beiden Elemente verwenden.
Fragment ist nur ein Hilfe für React und wird nicht in HTML umgewandelt,
d.h. im HTML wird wie gewünscht nur h2 gefolgt von p ausgegeben. */

function Siblings() {
  return (
    <Fragment>
      <h2>Geschwister</h2>

      <p>Untertitle</p>
    </Fragment>
  ); // بدون ديف  او عنصر شامل ما بيمشي الحال
}

/* Die Kurzschreibweise von Fragment (die nicht importiert werden muss)
ist <> und </>. */

function Siblings2() {
  return (
    <>
      <h2>Geschwister2</h2>
      <p>Untertitle2</p>
    </>
  );
}

function Parent({ children }) {
  console.log(children);
  return (
    <div className="parent">
      <h2>Meine Familie</h2>
      {children}
    </div>
  );
}

/* Möchte man einen Array direkt in JSX darstellen, kann man die map-Methode

nutzen, um jeden Eintrag im Array in ein Element umzuwandeln. Arrays mit
HTML oder React-Komponenten werden automatisch dargestellt.
Damit React Elemente, die dynamisch aus einem Array erzeugt werden, korrekt
und optimiert darstellen und aktualisieren kann, benötigt jedes Element ein
key-Attribut, das einen innerhalb der Sammlung einmaligen Wert hat. Das
key-Attribut ist nur intern für React gedacht, es sollte nicht als prop
in einer Komponente genutzt werden.
 */
function Collection() {
  const languages = [{ name: 'JavaScript' }, { name: 'HTML' }, { name: 'CSS' }];

  const listElements = [];
  // for (const language of languages) {
  // listElements.push(<li key={language.name}>{language.name}</li>) // هذا الكي هو للرياكت وليس لنا
  // }
  // oder ...
  for (const { name } of languages) {
    listElements.push(<li key={name}>{name}</li>); // هذا الكي هو للرياكت وليس لنا
  }

  return <ul>{listElements}</ul>;
}

function Collection2() {
  const languages = [{ name: 'Java' }, { name: 'Php' }, { name: 'Python' }];

  return (
    <ul>
      {languages.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

/* Möchte man Daten als props übergeben, die in einem Objekt stecken,
und die Schlüssel in dem Objekt sind identisch mit den props-Namen,
kann man sich id={id} etc. sparen, und stattdessen das Objekt mit
"Objekt-Spread" in die Komponente legen, so wird automatisch aus
jedem key im Objekt ein gleichnamiges Attribut erstellt.
https://de.reactjs.org/docs/jsx-in-depth.html#spread-attributes 
*/

// function ImageGrid({ images }) {
//   return (
//     <section className="image-grid">
//       {images.map(({ id, alt }) => (
//         <PicsumImage key={id} id={id} alt={alt} />
//       ))}
//     </section>
//   );
// }
function ImageGrid({ images }) {
  return (
    <section className="image-grid">
      {images.map((imgObj) => (
        <PicsumImage key={imgObj.id} {...imgObj} />
      ))}
    </section>
  );
}


  
/* Um zu verhindern, dass schädlicher Code - also insbesondere JavaScript -
  in der Ausgabe auftaucht, "escaped" React standardmäßig alles HTML, das
  in Strings auftaucht. Andernfalls könnten z.B. Angreifer in einem Kommentar
  unter einem Blogeintrag JavaScript schreiben, und der Code würde bei allen
  Usern ausgeführt, welche den Kommentar betrachten. (XSS, cross-site scripting)
  Wenn man sicher ist, dass der Text mit HTML aus einer vertrauenswürdigen
  Quelle stammt (etwa der eigenen Datenbank), kann man wie unten demonstriert
  einem HTML-Element das Attribut dangerouslySetInnerHTML geben, und als Wert
  ein Objekt das unter dem Schlüssel __html (zwei Unterstriche) den eigentlichen
  Text (mit HTML) enthält. (Die erste geschweifte Klammer öffnet den JavaScript-
  Bereich in JSX, die zweite ist dann das Objekt.)
  Wichtig: Auch HTML-Entities wie &mdash; (Bindestrich) werden standardmäßig
  nicht in die HTML-Entsprechung umgewandelt.
  https://de.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
  https://de.wikipedia.org/wiki/Cross-Site-Scripting
  */

function HtmlString() {
  const textWithHtml =
    'Text mit <b onmouseover="window.alert(`Hacked`);">HTML</b> in <a href="https://reactjs.org">React</a> &mdash; nicht ganz einfach!';

  return (
    <>
      <div>{textWithHtml}</div>
      <div dangerouslySetInnerHTML={{ __html: textWithHtml }} />
    </>
  );
}


function InlineCss({uppercase = true,color ="blue"}){

  const styles = {
    padding : "1rem",
    color,
    display:"inline-block",
    borderRadius:"1rem",
    backgroundColor:"yellow",
    textTransform:uppercase ?"uppercase" : " none",
    "--css-variable":"blue"
  }
  return <p style={styles}>Inline CSS</p>
}
