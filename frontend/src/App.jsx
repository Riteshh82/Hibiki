import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Pages/Contact/Contact'
import Project from './components/Pages/Project/Project'
import About from './components/Pages/About/About'
import Terminal from './components/Pages/Terminal/Terminal'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
      <Contact/>
      <Project/>
      <About/>
      <Terminal/>
      

    </>
  )
}

export default App