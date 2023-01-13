import React from 'react';

export default function Display({ hair, torso, legs, shoes, name }) {
  return (
    <div className="Images">
      <h1>{name}</h1>
      <img src={`/hair/${hair}.png`} alt={hair} />
      <img src={`/torso/${torso}.png`} alt={torso} />
      <img src={`/legs/${legs}.png`} alt={legs} />
      <img src={`/shoes/${shoes}.png`} alt={shoes} />
    </div>
  );
}
