import React from 'react';
import 'bulma/css/bulma.css';
import _ from 'lodash';

function CreditCard(props) {

  let newNum = '**** **** **** ' + props.number.slice(-4);

  return (
    <div className="columns">
      <div className="column is-5">
        <div
          className="box"
          style={{
            backgroundColor: `${props.bgColor}`,
            color: `${props.color}`,
          }}
        >
          <div className="level">
            <div className="level-right level-item">{props.type}</div>
          </div>
          <div className="level">
            <div className="level-center level-item is-size-3">{newNum}</div>
          </div>
          <div className="columns">
              <div className="column is-narrow">
                Expires: {props.expirationMonth} / {props.expirationYear} <br></br>
                {props.owner}
              </div>
              <div className="column">{props.bank}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
