import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Details from './pages/details/Details'
import Work from './pages/work/Work'

function App() {
  return (
    <Router basename='/new-portfolio'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="new-portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path='/:id' element={<Details />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
