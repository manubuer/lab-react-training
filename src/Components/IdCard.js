import React from 'react';
import 'bulma/css/bulma.css';

function IdCard(props) {
  return (
    <div className="card">
      <figure className="card-image">
        <img src={props.image} alt="" />
      </figure>
      <div className="card-content">
        <div>
          <p>
            <strong>First Name: </strong>
            {props.firstName}
          </p>
          <p>
            <strong>Last Name: </strong>
            {props.lastName}
          </p>
          <p>
            <strong>Gender: </strong>
            {props.gender}
          </p>
          <p>
            <strong>Height: </strong>
            {props.height}
          </p>
          <p>
            <strong>Birth: </strong>
            {props.birth}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
