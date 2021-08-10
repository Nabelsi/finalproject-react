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
    </div>
  );
}
