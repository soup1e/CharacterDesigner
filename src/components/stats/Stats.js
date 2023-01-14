import React from 'react';

export default function Stats({ headCount, torsoCount, legsCount, shoesCount }) {
  return (
    <div className="Stats">
      <h1>Changes made:</h1>
      <p>Head: {headCount}</p>
      <p>Torso: {torsoCount}</p>
      <p>Legs: {legsCount}</p>
      <p>Shoes: {shoesCount}</p>
    </div>
  );
}
