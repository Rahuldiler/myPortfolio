import React from 'react';
import Header from './Header';
import BannerComp from './BannerComp';
const Layout = ({children}) => {
  return (
    <section className='layout_wrapper'>
      <Header />
      <BannerComp />
      {children}
    </section>
  )
}

export default Layout