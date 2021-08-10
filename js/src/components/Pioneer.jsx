import { useState } from 'react';

export default function Pioneer({ name, description, url, image, biography }) {
  const [showText, setShowText] = useState(false);

  return (
    <article className="pioneer">
      <header>
        <h3>
          <a href={url}>{name}</a>
        </h3>
        <em>{description}</em>
      </header>
      <button
        onClick={() => setShowText((currentShowStatus) => !currentShowStatus)}
      >
        {showText ? 'Hide' : 'Show'}
      </button>
      {showText && <p className="pioneer__biography">{biography}</p>}
      <img src={image.src} alt={image.alt} />
    </article>
  );
}

/* 
 <article class="pioneer">
            <header>
              <h3><a href="">Name</a></h3>
              <em>Beschreibung</em>
            </header>
            <button>Hide bzw. Show</button>
            <p class="pioneer__biography">Biographie zum ein- und ausklappen</p>
            <img src="" alt="" />
          </article>
*/
