import React from 'react'
import FeatureBanner from '../components/feature_banner/FeatureBanner'
import Benefits from '../components/benefits/Benefits'
import Questions from '../components/questions/Questions'
import ClientFeature from '../components/ClientSection/ClientFeature'

const Feature = () => {
  return (
    <div>
      <FeatureBanner />
      <Benefits />
      <ClientFeature/>
    <Questions/>
    </div>
  )
}

export default Feature
