import React from 'react';

function Person({ person }) {
  return (
    <div>
      <ul>
        <li>Name: {person.name}</li>
        <li>Age: {person.age}</li>
        <li>Favorite Color: {person.favColor}</li>
        <li>Hobby: {person.hobby}</li>
      </ul>
    </div>
  );
}

export default Person;
