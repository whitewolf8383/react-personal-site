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
      Recent JUMP graduate pursuing a Java Development career, looking to combine 
      nearly 18 months of industry equivalence experience with a strong digital 
      mindset to become a valued asset to your organization. 
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