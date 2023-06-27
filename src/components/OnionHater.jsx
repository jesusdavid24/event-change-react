import React, { useState } from 'react';
import './OnionHater.css'

function OnionHater() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);

    if (event.target.value.includes('cebolla')) {
      alert('ODIO LA CEBOLLA');
    }
  };

  return (
    <div>
        <textarea value={text} onChange={handleChange} />
    </div>
  );
}

export default OnionHater;