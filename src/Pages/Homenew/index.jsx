import React from 'react'
import Bannernew from './Bannernew'
// import Blogs from '../Home/Blogs'
import Presence from '../Home/Presence'
import Innovation from './Innovation'
import Blognew from './Blognew'
import Services from './Services'
import Product from './Product'
import Overview from './Overview'

const Homenew = () => {
    return (
        <>
            <Bannernew />
            <Innovation />
            {/* <Blogs/> */}
            <Product />
            <Services />
            <Overview/>
            <Blognew />
            <Presence />
        </>
    )
}

export default Homenew
