import './App.css'
import Navbar from './components/Common/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Common/Footer/Footer'
import Work from './components/Work/Work'
import Achivements from './components/Achievements/Achivements'
import Conatct from './components/Contact/Conatct'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Work />
      <Achivements />
      <Conatct />
      <Footer />
    </div>
  )
}

export default App
