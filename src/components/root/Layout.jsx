import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import FooterSection from '../subFooter/FooterSection'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <FooterSection />
    </div>
  )
}

export default Layout
