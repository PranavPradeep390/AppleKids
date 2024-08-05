
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Gallery from './pages/Gallery'



function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<HomePage/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/contact'  element={<Contact/>} />
       <Route  path='/events'  element={<Events/>}  />
       <Route path='/gallery'  element={<Gallery/>} />
    </Routes>
      
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
