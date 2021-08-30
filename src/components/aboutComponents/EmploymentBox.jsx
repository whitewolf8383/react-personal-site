import React from 'react';
import EmploymentHeading from './EmploymentHeading';

function EmploymentBox() {
  return(
    <div className="employmentBox-div">
      <div>
        <EmploymentHeading 
        company="Freelance"
        dates='Jan 2020 - Jul 2021'
        position="Front End Web Developer"
        />
        <ul>
          <li>Designed front end websites for individual clients based on client 
          requirements that included wireframing, prototyping, and UI testing.</li>
          <li>Developed websites through the use of HTML, CSS, BootStrap, and JavaScript.</li>
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
          <li>Functioned as a data analyst to identify project opportunities to improve 
          quality, reduce time and reduce operating costs while directly communicating 
          with stakeholders to provide project opportunities and project and training 
          progress reports.</li>
          <li>Utilized multiple tools with the DMAIC framework to lead Black Belt projects 
          and supervise Green Belt projects while mentoring Green Belt/Yellow Belt members 
          and providing JIT training as needed.</li>
          <li>Developed custom project management tools to help identify and prioritize projects.</li>
          <li>Provided LSS training to military and DOD personnel while tracking training 
          requirements and developing new training standards.</li>
        </ul>
      </div>
    </div>
    
    
  );
}

export default EmploymentBox;