import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Work from './pages/work/Work'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="new-portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  )
}

export default App
