import React from 'react'
import Design from '../components/designs/Design'
import WhoWeAre from '../components/who/WhoWeAre'
import Process from '../components/process/Process'
import Mission from '../components/mission/Mission'
import Benefits from '../components/benefits/Benefits'
import TeamSection from '../components/team/TeamSection'

const AboutPage = () => {
  return (
    <div>
      <Design/>
      <WhoWeAre/>
      <Process/>
      <Mission/>
      <Benefits/>
      <TeamSection/>
    </div>
  )
}

export default AboutPage
