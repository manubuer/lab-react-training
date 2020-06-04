import React from 'react';
import 'bulma/css/bulma.css';

let greet = ""

function Greeting(props) {

  switch (props.lang) {
    case 'de':
        greet = "hallo";
        break;

    case 'en':
        greet = "hi";
        break;

    case 'es':
        greet = "hola";
        break;

    case 'it':
        greet = "buon giorno";
        break;
  }

  return (
    <div className="column card">
      <p className="card-content" lang={props.lang}>
        {greet} {props.children}
      </p>
    </div>
    )
}

export default Greeting;
