import React from 'react';
import 'bulma/css/bulma.css';

const arr = ["cleo", "tara", "izzy"]

// example 1

function List(props) {
  return (
    <div className="card-content">
      <ul>{arr.map((name) => <li key={name}>{name}</li>)}</ul>
    </div>
  );
}

// example 2


export default List;
