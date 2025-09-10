import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Popup from '../../Component/Popup'

const WebLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer/>
             <Popup/>

        </>
    )
}

export default WebLayout
