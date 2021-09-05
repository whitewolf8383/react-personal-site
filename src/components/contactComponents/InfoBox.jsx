import React from 'react';


function InfoBox(props) {
  let altText = `${props.img} icon`;
  return(
    <div className="infobox-div">
      <div className="infobox-img-div">
        <img src={props.img} alt={altText} />
      </div>
      <div>
        <h3>{props.name}</h3>
        <p>{props.subName}</p>
      </div>
    </div>
  );
}

export default InfoBox;