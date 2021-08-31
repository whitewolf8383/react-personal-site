import React from 'react';

function Project(props) {

  return(
    <div onClick={() => {
      window.open(props.url);
    }}>
      <img src={props.img} alt="testing"/>
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Project;