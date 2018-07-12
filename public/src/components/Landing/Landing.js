import React from 'react'
import meImg from '../../assets/me.jpg'

import skills from '../../utils/skills'

export default function Landing() {
  let skillsJSX = skills.map((skill, i) => (
    <div key={`skill-${i}`} className="Landing-skill">
      <img src={skill.img} alt="skill" width="50px" />
      <h2>{skill.label}</h2>
    </div>
  ))

  return (
    <div id="Landing-content">
      <div id="Landing-about">
        <div id="about-top">
          <img
            id="about-profile-picture"
            src={meImg}
            alt="profile"
            height="75px"
          />

          <h1>About Me</h1>
        </div>

        <div id="about-bottom">
          <p>
            Hello my name is James Lemire, I'm 21 years old and from the Daytona
            Beach area in Florida. Tired of bussing tables back home I flew out
            to Utah to pursue a career in Web Development and a better way of
            life. I've been out here in Utah for about two years now and have
            fallen in love with full stack web development. I'm always
            interested in hearing new opportunities that involve full stack
            development with React or Vue and NodeJS. These technologies are my
            specialty! I have a strong passion for programming and have been
            doing it off and on since I was 12 years old.
          </p>
        </div>
      </div>

      <div id="Landing-skills" className="black-container">
        <h1>My Skills</h1>
        <div id="Landing-skills-list">{skillsJSX}</div>
      </div>

      <div id="Landing-work-experience">
        <h1 style={{ textAlign: 'right' }}>My Work Experience</h1>
      </div>
    </div>
  )
}
