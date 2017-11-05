import React from 'react'

const AboutPage = () => (
  <div>
    <article>
      <h1
        className="article-header"
      >
        Hello there,
        <span className="subheader"> my name is A.J. Brisson.</span><br/>
        Ask Me Anything!
      </h1>
      <section
        className="section"
      >
        <header
          className="section-header question"
        >
          Where did you grow up?
        </header>
        <p>I grew up in south eastern Connecticut, spending most of my childhood in Montville. Not many know where that is so I usually just say that I grew up about a mile from Mohegan Sun Casino.</p>
      </section>
      <section
        className="section"
      >
        <header
          className="section-header question"
        >
          Where did you go to college, what were some of your favorite moments?
        </header>
        <p>I went to Eastern Connecticut State University where I majored in Business Information Systems and minored in Computer Science, graduated in May 2012. One of my favorite memories from college was getting to host a radio show with my roommate Ross. It was called <em>Case of the Monday's</em> because we aired on Monday nights. We probably could have considered a name change when we moved timeslots after the first semester.</p>
      </section>
      <section
        className="section"
      >
        <header
          className="section-header question"
        >
          What do you like to do outside of work?
        </header>
        <p>I enjoy going on long walks and hikes with my wife Lauryn. We'll occassionally hike to Hublin Tower if our calf muscles can handle it. I also enjoy collecting vinyl records, I have built up a collection I'm happy with but it can be a pretty expensive hobby to keep up with.</p>
      </section>
      <section
        className="section"
      >
        <header
          className="section-header question"
        >
          Favorite movie? 
        </header>
        <p>That's pretty tough - it can change based on mood. If I'm being put on the spot though I would say <em>Chinatown</em> with Jack Nicholson. I can watch that movie over and over again.</p>
      </section>
      <section
        className="section"
      >
        <header
          className="section-header question"
        >
          Favorite band? 
        </header>
        <p>Easy! Tame Impala.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FAcaAeIwl1Q?rel=0" frameborder="0" allowfullscreen></iframe>
      </section>
    </article>
  </div>
)

export default AboutPage
