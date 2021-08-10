/*
1. Export die Komponente Gallery.
2. Die Komponente soll die probs title und images erhalten. images ist
dabei ein Array mit Objekten, die jeweil id und alt enthalten.
3. Wenn title nicht leer ist, soll title in der h2 dargestellt werden.
4. Die Komponente soll den State bigImageIndex mit Startwert 0 haben.
5. In gallery__big-image soll ein PicsumImage-Element mit dem dem Objekt
dargestellt werden, das dem bigImageIndex entspricht. Breite 800, Höhe 600;
6. In thumbnails sollen alle Bilder dargestellt werden (200 x 150), und bei
Klick auf den button soll der Index des kleinen Bildes zum bigImageIndex
werden.
Bonus: Der thumbnail-Button, der dem großen Bild entspricht, soll disabled sein.
*/

import { useState } from 'react';
import PicsumImage from './PicsumImage';
import Thumbnails from './Thumbnails';

export default function Gallery({ title, images = [] }) {
  const [bigImageIndex, setBigImageIndex] = useState(0);

  if(images.length===0){
    return null;
  }

  const bigImage = images[bigImageIndex];

  

  return (
    <section className="gallery">
      {title && <h2>{title}</h2>}{' '}
      <div className="gallery__big-image">
        <PicsumImage {...bigImage} width={800} height={600} />
      </div>
      <Thumbnails images={images} bigImageIndex={bigImageIndex} setBigImageIndex={setBigImageIndex}/>
    </section>
  );
}


/*


  	<section class="gallery">
    	<h2>Titel</h2>
    	<div class="gallery__big-image">
      	<img class="image" />
    	</div>
    	<div class="thumbnails">
      	<button class="thumbnails__button">
        	<img class="image" />
      	</button>
    	</div>
  	</section>


*/


