import React from 'react';
import School from './School';

function EducationBox(){
  return(
    <div className="education-div">
      <School 
        degree="Master of Science" 
        school="University of Denver"
        dates="Jun 2020 - Nov 2021"
        course="Web Design and Development"
        gpa="GPA: 4.0"
      />
      <School 
        degree="Bachelor of Science" 
        school="Colorado State University"
        dates="Aug 2015 - Dec 2019"
        course="Computer Science"
      />
    </div>
  );
}

export default EducationBox;