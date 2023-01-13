import React from 'react';

export default function Display({ hair, torso, legs, shoes, name }) {
  return (
    <div>
      <h1>{hair}</h1>
      <h1>{torso}</h1>
      <h1>{legs}</h1>
      <h1>{shoes}</h1>
      <h1>{name}</h1>
    </div>
  );
}
