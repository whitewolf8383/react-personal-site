import React from 'react';

function SkillsBox(){
  return(
    <div className="skillsbox-div">
      <div className="skillsbox skillsbox-left">
        <p>Programming Languages</p>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>React.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>BootStrap</li>
          <li>C++ / C#</li>
          <li>Python</li>
          <li>Java</li>
          <li>SQL / MySQL</li>
          <li>Node.js</li>
        </ul>
      </div>
      <div className="skillsbox skillsbox-center">
        <p>Hard Skills</p>
        <ul>
          <li>Figma</li>
          <li>Wireframing</li>
          <li>Prototyping</li>
          <li>UI/UX Testing</li>
          <li>Git</li>
          <li>API</li>
          <li>MS Project</li>
        </ul>
      </div>
      <div className="skillsbox skillsbox-right">
        <p>Soft Skills</p>
        <ul>
          <li>Leadership</li>
          <li>Collaboration</li>
          <li>Communication</li>
          <li>Critical Thinking</li>
          <li>Creativity</li>
          <li>Problem Solving</li>
          <li>Visual Thinking</li>
          <li>Work Ethic</li>
          <li>Organizational Skills</li>
        </ul>
      </div>
    </div>
    
  );
}

export default SkillsBox;