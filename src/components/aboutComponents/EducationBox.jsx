import React from 'react';
import School from './School';

function EducationBox(){
  return(
    <div className="education-div">
      <School 
        degree="Master of Science" 
        school="University of Denver"
        dates="Jun 2020 - Dec 2021(Expected)"
        course="Web Design and Development"
        gpa="GPA: 4.0 / 4.0"
      />
      <School 
        degree="Bachelor of Science" 
        school="Colorado State University"
        dates="Aug 2015 - Dec 2014"
        course="Computer Science - Concentration: Human Centered Computing"
      />
      <p>Coursework:</p>
      <p>Object-Oriented Programming, Algorithums and Data Structures, Discrete Structures, 
        Human-Computer Interaction, Web Design, Cognitive Psychology, Sensation and 
        Perception, Psychology of Mind, Brain, and Behavior, Ai and Machine Leanering, 
        Database Design, ICT Business, Technical, and Enterprise Architecture, Advanced 
        Website Design, Development, and Management, and Project Management
      </p>
    </div>
  );
}

export default EducationBox;