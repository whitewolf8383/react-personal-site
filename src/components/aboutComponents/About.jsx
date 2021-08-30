import React from 'react';
import AboutHeaders from './AboutHeaders';
import EducationBox from './EducationBox';
import SkillsBox from './SkillsBox';
import EmploymentBox from './EmploymentBox';

function About() {
  return (
    <div className="about-div">
      <p className="about-heading">Front End Web Developer</p>
      <AboutHeaders value="Objective"/>
      <p className="about-p">
      Hard-working and enthusiastic graduate student entering final quarter of Masters degree, 
      seeking a full time remote Front End Web Developer position using React.js and JavaScript. 
      Passionate about learning new software options for web development, focused on learning 
      through MOOC coursework in free time and continuously working on new projects, both small 
      and large to gain new insight and experience in web development. Open to learning new 
      frameworks or software, but also pasionate about learning across fields. 
      </p>
      <AboutHeaders value="Skills"/>
      <SkillsBox />
      <AboutHeaders value="Education"/>
      <EducationBox />
      <AboutHeaders value="Employment"/>
      <EmploymentBox />
    </div>
  );
}

export default About;