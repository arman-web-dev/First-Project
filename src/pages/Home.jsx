import React from 'react'
import Banner from '../components/banner/Banner'
import Work from '../components/work/Work'
import ViewSection from '../components/viewSection/ViewSection'
import BlogSection from '../components/blog/BlogSection'
import StellarSection from '../components/stellar/StellarSection'
import Questions from '../components/questions/Questions'
import Features from '../components/features/Features'
import ClientHome from '../components/clientsA/ClientHome'


const Home = () => {
  return (
    <div>
      <Banner />
      <Work />
      <ViewSection/>
      <Features/>
      <ClientHome/>
      <Questions/>
      <StellarSection/>
      <BlogSection/>
    </div>
  )
}

export default Home
