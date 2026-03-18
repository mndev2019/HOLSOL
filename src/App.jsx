import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'

import Homenew from './Pages/Homenew'
import About from './Pages/About'
import ServiceDetail from './Pages/ServiceDetail'
import ProductDetail from './Pages/ProductDetail'
import Career from './Pages/Career'
import BlogDetail from './Pages/BlogDetail'
import WarrantyPolicy from './Pages/WarrantyPolicy'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsCondition from './Pages/TermsCondition'
import WebsiteUsage from './Pages/WebsiteUsage'
import ThankYou from './Pages/Thankyou'
import Contact from './Pages/Contact'
import SolarCalculator from './Component/SolarCalculator'
import Register from './Auth/Register'
import Login from './Auth/Login'
import ForgotPassword from './Auth/ForgotPassword'
import Dasboard from './Pages/User/Dasboard'
import Profile from './Pages/User/Profile'
import Documents from './Pages/User/Document'
import Rewards from './Pages/User/Reward'
import { ToastContainer } from 'react-toastify'
import ProfileDetail from './Pages/User/ProfileDetail'
import VerifyOtp from './Auth/VerifyOtp'
import ResetPassword from './Auth/ResetPassword'
import { useEffect } from 'react'

// --- 1. Create a Analytics Wrapper ---
// This component listens for URL changes and sends them to Google
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component doesn't render anything
}

function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route path="/" element={<WebLayout />}> */}
          <Route path="/" element={
          <>
            <AnalyticsTracker /> {/* Tracks every route change */}
            <WebLayout />
          </>
        }>

          <Route index element={<Homenew />} />
          <Route path='/about' element={<About />} />
          <Route path='/service-detail' element={<ServiceDetail />} />
          <Route path='/product-detail' element={<ProductDetail />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog-detail' element={<BlogDetail />} />
          <Route path='/warranty-policy' element={<WarrantyPolicy />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms' element={<TermsCondition />} />
          <Route path='/usage-policy' element={<WebsiteUsage />} />
          <Route path='/thank-you' element={<ThankYou/>}/>
          <Route path='/solar-calculator' element={<SolarCalculator/>}/>
          <Route path='/thankyou' element={<ThankYou/>}/>
           

           {/* auth */}
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/verify-otp' element={<VerifyOtp/>}/>
          <Route path='/reset-password' element={<ResetPassword/>}/>

          {/* user */}
          <Route path='/dashboard' element={<Dasboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/profile-detail' element={<ProfileDetail/>}/>

          <Route path='/document' element={<Documents/>}/>
          <Route path='/reward' element={<Rewards/>}/>
      

        </Route>



      </>


    )

  )


  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <RouterProvider router={ThemeRoute} />

    </>
  )
}

export default App
