import React from 'react';

function InfoBox(props) {
  return(
    <div className="infobox-div">
      <img src={props.img} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.subName}</p>
      </div>
    </div>
  );
}

export default InfoBox;