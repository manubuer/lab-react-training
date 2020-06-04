import React from 'react';
import 'bulma/css/bulma.css';
import _ from 'lodash';

function Rating(props) {
  let rounded = _.round(props.children);

  let fullStar = String.fromCharCode(0x2605)
  let emptyStar = String.fromCharCode(0x2606)
  let scale = ""
  
  if (props.children > 5) {
    scale = _.repeat(fullStar, 5)
  } else if (props.children < 0) {
    scale = _.repeat(fullStar, 5)
  } else {
    scale = _.repeat(fullStar, rounded) + _.repeat(emptyStar, 5 - rounded)
  }

  return <div>{scale}</div>;
}

export default Rating;
