import React from 'react';
import SectionHeader from '../SectionHeader';
import Project from './Project';

function Portfolio() {
  return(
    <div>
      <SectionHeader value="PORTFOLIO"/>
      <Project 
        title="Restaurant: I Don't know"
        img="../../images/email-icon.png"
        description="A basic restaurant app completed as a course project."
        url="https://github.com/whitewolf8383/Restaurant_I_Dont_Know"
      />
    </div>
  );
}

export default Portfolio;