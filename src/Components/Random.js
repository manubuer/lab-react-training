import React from 'react';
import 'bulma/css/bulma.css';
import _ from 'lodash';



function Random(props) {

    const result = _.random(props.min, props.max)
    
    return (
      <div className="card">
        <p className="card-content">
          Random value between {props.min} and {props.max} is: {result}.
        </p>
      </div>
    );
  }

export default Random;
