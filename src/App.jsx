import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import Homenew from './Pages/Homenew'
import About from './Pages/About'
import ServiceDetail from './Pages/ServiceDetail'
import ProductDetail from './Pages/ProductDetail'
import Career from './Pages/Career'
import BlogDetail from './Pages/BlogDetail'

function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<WebLayout />}>

          <Route index element={<Homenew />} />
          <Route path='/about' element={<About />} />
          <Route path='/service-detail' element={<ServiceDetail />} />
          <Route path='/product-detail' element={<ProductDetail/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='/blog-detail' element={<BlogDetail/>}/>
        </Route>


      </>


    )

  )


  return (
    <>
      <RouterProvider router={ThemeRoute} />

    </>
  )
}

export default App
