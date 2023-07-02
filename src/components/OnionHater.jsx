import React, { useState } from 'react';
import './OnionHater.css'

function OnionHater() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
      if (event.target.value.includes('cebolla')) {
        setTimeout(() => {
          alert('ODIO LA CEBOLLA')
        }, 2000)
      }
    };

  return (
    <div>
        <textarea value={text} onChange={handleChange} />
    </div>
  );
}

export default OnionHater;