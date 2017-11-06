import React from 'react'
import Link from 'gatsby-link'

const ProjectsPage = () => (
  <div>
    <h1>Projects</h1>
    <p className="lead-paragraph display-text">A summary of recent and highly visible projects I've been involved in.</p>
    <section style={{marginBottom: '2rem'}}>
      <h3>Cigna Hong Kong</h3>
      <p>Redesign and CMS migration of 40-page website for Hong Kong line of business</p>
      <p><strong>Primary role</strong>: UI developer.<br/>
        <strong>Responsibilities</strong>: Assessment, collaboration and implementation of key components of design such as the global navigation, footer and product comparison. Provided direction to offshore development team members to expedite the delivery of new site templates and components.</p>
        <a className="btn btn-primary" href="https://cigna.com.hk/en/" target="_blank">View</a>
    </section>
    <section style={{marginBottom: '2rem'}}>
      <h3>Take Control 2018 Campaign Website</h3>
      <p>Updated the Take Control website to new digital standards with subtle custom site specific UI elements.</p>
      <p><strong>Primary role</strong>: Delivery lead, UI developer<br/>
      <strong>Responsibilities</strong>: Led the delivery of updated campaign website. Collaborated with and delegated manageable tasks to onshore developers. Worked with QA team to assign and assist in resolving logged defects. Primary UI deliverables included the global navigation and the three blocks on the home page. Also responsible for delivering and refactoring existing code for site's health calculators to take advantage of Webpack and ES6 imports and exports.</p>
      <a className="btn btn-primary" href="https://www.cigna.com/takecontrol/" target="_blank">View</a>
    </section>
    <section style={{marginBottom: '2rem'}}>
      <h3>EvolveIT</h3>
      <p>New website detailing new IT strategy.</p>
      <p><strong>Primary role</strong>: Technical lead, delivery lead.<br/>
      <strong>Responsibilities</strong>: Led the delivery of 19 page website for Cigna CIO Dr. Mark Boxer. Developed global and reusable components based on design PSD files and style guide.</p>
    </section>
    <section style={{marginBottom: '2rem'}}>
      <h3>Cigna Life Insurance Company of Korea</h3>
      <p>Responsive redesign and CMS migration of 60-page website for Hong Kong line of business' new membership program Heyday.</p>
      <p><strong>Primary role</strong>: UI developer.<br/>
      <strong>Responsibilities</strong>: Led the delivery of the login and registration process. Participated in daily scrum meetings, iteration planning, user story writing and estimation and iteration demos. Onshore development lead during portions of project while members were in Korea for training.</p>
    </section>
    <a className="btn btn-primary" href="https://www.junsungki.com/" target="_blank">View</a>
  </div>
)

export default ProjectsPage
