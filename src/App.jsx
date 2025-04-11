import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import DoItDaily from './pages/projects/DoItDaily';
import BlackJack from './pages/projects/BlackJack';
import CafeJusto from './pages/projects/CafeJusto';
import TheBuzz from './pages/projects/TheBuzz';
import Portfolio2 from './pages/projects/Portfolio';
import PantryPair from './pages/projects/PantryPair';

export default function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/do-it-daily" element={<DoItDaily />} />
        <Route path="/portfolio/black-jack" element={<BlackJack />} />
        <Route path="/portfolio/cafe" element={<CafeJusto />} />
        <Route path="/portfolio/buzz" element={<TheBuzz />} />
        <Route path="/portfolio/portfolio" element={<Portfolio2 />} />
        <Route path="/portfolio/pantry" element={<PantryPair />} />
      </Routes>
    </div>
  );
}
