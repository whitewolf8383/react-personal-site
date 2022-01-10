import React from 'react';
import EmploymentHeading from './EmploymentHeading';

function EmploymentBox() {
  return(
    <div className="employmentBox-div">
      <div>
        <EmploymentHeading 
        company="Cognixia"
        dates='Nov 2021 - Present'
        position="Full-Stack Java Developer"
        />
        <ul>
          <li>Front End Languages – developed User Interface with HTML5, CSS3, JS and JSX</li>
          <li>Technical Articulation – presented Full Stack Application development after 
            regular SCRUM Sprints, as well as created USER Stories for Sprint Planning</li>
          <li>Developed a Full suite Spring Boot REST API, implementing Spring Security, 
            Hibernate, JPA, and Mockito Test Suite</li>
        </ul>
      </div>
      <div>
        <EmploymentHeading 
        company="Freelance"
        dates='Jan 2020 - Jul 2021'
        position="Front End Web Developer"
        />
        <ul>
          <li>Communicated with clients to decipher the needs and values 
            required for their project.</li>
          <li>Utilized Figma to design and create wireframes and prototypes 
            and perform UI/UX testing using A/B testing and Gorilla testing methods.</li>
          <li>Developed client-side web pages and functional components utilizing 
            React, Vue.JS, and Angular.</li>
        </ul>
      </div>
      <div>
        <EmploymentHeading 
        company="Colorado State University"
        dates='Jan 2019 - May 2019'
        position="Student Web Developer"
        />
        <ul>
          <li>Functioned as project lead and web designer/developer for a Value-Based 
          Purchasing Medicare website.</li>
          <li>Designed wireframe and prototype for single page application (SPA).</li>
          <li>Designed and Developed a MySQL(MariaDB) database and populated with data from 3000+ hospitals.</li>
          <li>Developed client-side with HTML5, CSS3, Bootstrap, and JavaScript. Developed 
          back-end with FuelPHP framework to include user authentication, award calculator, 
          and user upload/download ability.</li>
        </ul>
      </div>
      <div>
        <EmploymentHeading 
        company="United States Marine Corps"
        dates='Jun 2002 - Dec 2014'
        position="Lean Six Sigma Senior Instructor and Project Manager"
        />
        <ul>
          <li>Facilitated in the training and certification of junior and lead Lean Six Sigma 
            instructors and Yellow Belt and Green Belt level practitioners</li>
          <li>Authored and evaluated training programs within the Navy and Marine Corps 
            Continuous Process Improvement program to improve training throughput and reduce 
            knowledge gap</li>
          <li>Developed multiple tools for evaluating work processes, created and managed 
            multiple, established a project level just-in-time (JIT) refresher system, and 
            maintained continuous communications among multiple end point customers and senior 
            management positions across multiple military commands.</li>
        </ul>
      </div>
    </div>
  );
}

export default EmploymentBox;