import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black'>
        <Navbar />
        <Navbar2 />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/courses/:id' element={<CoursesDetails />} />

            <Route path='/product' element={<Product />} >
              <Route path='men' element={<Men />} />
              <Route path='women' element={<Women />} /> 
              <Route path='kids' element={<Kids />} />            
           
            </Route>
            <Route path='/contact' element={<Contact />} />

            <Route path='*' element={<NotFound />} />

          </Routes>
        <Footer /> 
    </div>
  )
}

export default App
