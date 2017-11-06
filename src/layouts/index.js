import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import './custom.scss'

const Navigation = () => (
  <nav
    className='nav'
  >
    <Link
      to="/about"
      className='nav-link'
      style={{
        display: 'block'
      }}
    >
      About
    </Link>
    <Link
      to="/skills"
      className='nav-link'
      style={{
        display: 'block'
      }}
    > 
      Skills
    </Link>
    <Link
      to="/projects"
      className='nav-link'
      style={{
        display: 'block'
      }}
    > 
      Projects
    </Link>
    <Link
      to="/contact"
      className='nav-link'
      style={{
        display: 'block'
      }}
    >
      Contact
    </Link>
  </nav>
)

const Header = () => (
  <div className="drawer">
  <div className="navbar">
    <button
      className="btn btn-primary expand-drawer"
      onClick={() => {
        var headerWrapper = document.querySelector('.header-wrapper');
        var docEle = document.documentElement;
        headerWrapper.classList = headerWrapper.classList + ' expanded';
        docEle.addEventListener('click', function() {
          headerWrapper.classList = 'header-wrapper';
        });
    }}>Menu</button>
  </div>
  <div
    className="header-wrapper"
  >
    <div
      className="header"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ marginTop: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          A.J. Brisson
        </Link>
      </h1>
    </div>
    <Navigation />
  </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="A.J. Brisson | brissona.github.io"
      meta={[
        { name: 'description', content: 'Website for A.J. Brisson, App Development Senior Specialist. Specializing in Front end development.' },
        { name: 'keywords', content: 'A.J., Brisson, front end developer' }
      ]}
    />
    <div
      className='wrapper'
    >
      <Header />
      <div
        className='main'
      >
        {children()}
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
