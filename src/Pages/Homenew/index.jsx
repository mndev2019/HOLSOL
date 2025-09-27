import React from 'react'
import Bannernew from './Bannernew'
// import Blogs from '../Home/Blogs'
import Presence from '../Home/Presence'
import Innovation from './Innovation'
import Blognew from './Blognew'
import Services from './Services'
import Product from './Product'
import Overview from './Overview'
import Whychoose from './Whychoose'
import Blogs from '../Home/Blogs'
import OurLegacy from './OurLegacy'
import Mobileproduct from './Mobileproduct'
import ServiceMobile from './ServiceMobile'
import MobileOverview from './MobileOverview'
import Bannermobile from './Bannermobile'

const Homenew = () => {
    return (
        <>
            <Bannernew />
            <Bannermobile className="md:hidden block"/>
            {/* <Innovation /> */}
            {/* <Blogs/> */}
            <Product />
            <Mobileproduct />
            <Services />
            <ServiceMobile />
            <Whychoose />
            <Overview />
            <MobileOverview />
            <OurLegacy />
            <Blognew />

            <Presence />
        </>
    )
}

export default Homenew
