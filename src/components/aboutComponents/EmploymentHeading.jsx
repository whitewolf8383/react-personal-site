import React from 'react';

function EmploymentHeading(props) {
  return(
    <div>
      <div className="employmentHeading-div employmentHeading-left">
        <p>{props.company}</p>
        <p>{props.position}</p>
      </div>
      <div className="employmentHeading-div employmentHeading-right">
        <p>{props.dates}</p>
      </div>
    </div>
  );
}

export default EmploymentHeading;