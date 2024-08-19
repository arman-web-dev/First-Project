import React from 'react'
import Banner from '../components/banner/Banner'
import Work from '../components/work/Work'
import ViewSection from '../components/viewSection/ViewSection'
import BlogSection from '../components/blog/BlogSection'
import StellarSection from '../components/stellar/StellarSection'
import Questions from '../components/questions/Questions'
import Client from '../components/clientsA/Clients'
import Features from '../components/features/Features'


const Home = () => {
  return (
    <div>
      <Banner />
      <Work />
      <ViewSection/>
      <Features/>
      <Client/>
      <Questions/>
      <StellarSection/>
      <BlogSection/>
    </div>
  )
}

export default Home
