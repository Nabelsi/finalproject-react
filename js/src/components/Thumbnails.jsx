import classnames from 'classnames';

import PicsumImage from './PicsumImage';

export default function Thumbnails({
  images,
  bigImageIndex,
  setBigImageIndex,
}) {
  return (
	<div className="thumbnails">
  	{images.map((image, index) => {
    	const isBigImage = index === bigImageIndex;

    	/*   	const cssClasses = `thumbnails__button ${
      	isBigImage ? 'thumbnails__button--active' : ''
    	}`; */

    	/* Die Hilfsbibliothek classnames ist dann interessant, wenn
    	man eine komplexere Kombination aus Klassennamen zusammenstellen
    	muss. */
    	const cssClasses = classnames('thumbnails__button', {
      	'thumbnails__button--active': isBigImage,
    	});

    	return (
      	<button
        	key={image.id}
        	className={cssClasses}
        	onClick={() => setBigImageIndex(index)}
        	disabled={isBigImage}
      	>
        	<PicsumImage {...image} width={200} height={150} />
      	</button>
    	);
  	})}
	</div>
  );
}

