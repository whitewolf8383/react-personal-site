import React from 'react';

function SectionHeader(props) {
  return(
    <div className="sectionheader-div">
      <div>
        <hr className="top-hr"/>
        <h2>{props.value}</h2>
        <hr className="bottom-hr" />
      </div>
    </div>
    
  );
}

export default SectionHeader;