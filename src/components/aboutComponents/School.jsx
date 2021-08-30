import React from 'react';

 function School(props) {
   return(
    <div className="school-div">
      <p>{props.degree}</p>
      <p>{props.school}</p>
      <p>{props.dates}</p>
      <p>{props.course}</p>
      <p>{props.gpa}</p>
    </div>
   );
 }

 export default School;