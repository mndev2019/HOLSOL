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

const Homenew = () => {
    return (
        <>
            <Bannernew />
            <Innovation />
            {/* <Blogs/> */}
            <Product />
            <Services />
            <Whychoose/>
            <Overview/>
         
            <Blognew />
            <OurLegacy/>
            <Presence />
        </>
    )
}

export default Homenew
