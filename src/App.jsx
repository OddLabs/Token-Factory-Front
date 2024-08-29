import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ERC20Form from './pages/ERC20Form';
import ERC721Form from './pages/ERC721Form';

function App() {

  return (
    <BrowserRouter>
        <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/generate-erc20" element={ <ERC20Form/> } />
        <Route path="/generate-erc721" element={ <ERC721Form/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
