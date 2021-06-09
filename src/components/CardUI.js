import React from 'react'
import './CardUI.css';

function CardUI(props) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={props.backgroundImg} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{props.Title}</h3>
        </div>
        <div className="card-body">
          <p>{props.Body}</p>
        </div>
      </div>
    </div>
  );
}

export default CardUI
