import React from 'react'
import Link from 'gatsby-link'

const ProjectsPage = () => (
  <div>
    <h1>Projects</h1>
    <section style={{marginBottom: '2rem'}}>
      <h3 className="h2 display-text">Cigna Hong Kong</h3>
      <p>Redesign and CMS migration of 40-page website for Hong Kong line of business</p>
      <p><strong>Primary role</strong>: UI developer.<br/>
        <strong>Responsibilities</strong>: Assessment, collaboration and implementation of key components of design such as the global navigation, footer and product comparison. Provided direction to offshore development team members to expedite the delivery of new site templates and components.</p>
    </section>
    <section style={{marginBottom: '2rem'}}>
      <h3 className="h2 display-text">EvolveIT</h3>
      <p>New website detailing new IT strategy.</p>
      <p><strong>Primary role</strong>: Technical lead, delivery lead.<br/>
      <strong>Responsibilities</strong>: Led the delivery of 19 page website for Cigna CIO Dr. Mark Boxer. Developed global and reusable components based on design PSD files and style guide.</p>
    </section>
    <section style={{marginBottom: '2rem'}}>
      <h3 className="h2 display-text">Cigna Life Insurance Company of Korea</h3>
      <p>Responsive redesign and CMS migration of 60-page website for Hong Kong line of business' new membership program Heyday.</p>
      <p><strong>Primary role</strong>: UI developer.<br/>
      <strong>Responsibilities</strong>: Led the delivery of the login and registration process. Participated in daily scrum meetings, iteration planning, user story writing and estimation and iteration demos. Onshore development lead during portions of project while members were in Korea for training.</p>
    </section>
  </div>
)

export default ProjectsPage
