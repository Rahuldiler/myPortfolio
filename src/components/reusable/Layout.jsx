import React from 'react';
import Header from './Header';
import BannerComp from './BannerComp';
import Footer from './Footer';
const Layout = ({children}) => {
  return (
    <section className='layout_wrapper'>
      <Header />
      <BannerComp />
      {children}
      <Footer />
    </section>
  )
}

export default Layout