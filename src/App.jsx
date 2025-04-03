import React from 'react'
import Header from './companents/Header'
import Home from './pages/Home'
import Why_us from './pages/Why_us'
import Services from './pages/Services'
import Comments from './pages/Comments'
import FAQ from './pages/Faq'
import Contact from './pages/Contact'
import Footer from './companents/Footer'



function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Why_us/>
      <Services/>
      <Comments/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
