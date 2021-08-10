export default function PicsumImage({id,alt,width = 400,height=300}) {
    
    const src = `https://picsum.photos/id/${id}/${width}/${height}`;
    return (
      <img 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      />
    );
  }
  
  /*
  1. Erstellt und exportiert eine Komponente namens
  PicsumImage in einer eigenen Datei.
  2. Die Komponenten soll ein img-Element erzeugen,
  dass die css-Klasse image hat.
  3. id (für picsum.photos), width, height und alt sollen als props übergeben
  und dann sofort per Objekt-Destructuring in einzelne Variablen gespeichert werden.
  4. In der Funktion einen Template-String erstellen, der den Pfad zu
  einem picsum.photos-Bild mit der übergebenen id, width und height enthält.
  Speichert den String in einer Variable src und setzt diese im img-HTML ein.
  5. Importiert die Komponente in JsxDemo und stellt sie mit einem Bild
  eurer Wahl dar.
  6. width und height sollen beim Destructuring der
  props 400 und 300 als Standardwert haben haben.
  
  */
  