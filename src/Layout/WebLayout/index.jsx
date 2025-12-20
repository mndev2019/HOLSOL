import React from 'react'
import Header from '../Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer'
import Popup from '../../Component/Popup'

const WebLayout = () => {
    const location = useLocation();
    const hidePopup = location.pathname === "/thank-you";
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            {!hidePopup && <Popup />}

        </>
    )
}

export default WebLayout
