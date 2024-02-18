import './Styles/globals.scss'
import './Styles/navbar.scss'
import './Styles/landing.scss'
import './Styles/sectionheaders.scss'
import './Styles/experiencetiles.scss'
import './Styles/about.scss'
import './Styles/projects.scss'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {

  return (
    <>
      <Navbar/>
      <Landing/>
      <About/>
      <Projects/>
    </>
  )
}

export default App
