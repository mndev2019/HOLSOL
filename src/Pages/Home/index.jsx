import React from 'react'
import Banner from './Banner'
import Services from './Services'
import Presence from './Presence'
import Faq from './Faq'
import Blogs from './Blogs'
import Solution from './Solution'

const Home = () => {
    return (
        <>
          <Banner/>
          <Solution/>
          <Services/>
          <Presence/>
          <Faq/>
          <Blogs/>
        </>
    )
}

export default Home
