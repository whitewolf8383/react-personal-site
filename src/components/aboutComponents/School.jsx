import React from 'react';

 function School(props) {
   return(
    <div className="school-div">
      <div className="skillsbox skillsbox-left">
        <p>{props.degree}</p>
        <p>{props.course}</p>
      </div>
      <div className="skillsbox skillsbox-center">
        <p>{props.school}</p>
      </div>
      <div className="skillsbox skillsbox-right">
        <p>{props.dates}</p>
        <p>{props.gpa}</p>
      </div>
      
    </div>
   );
 }

 export default School;