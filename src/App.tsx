import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Gear from './pages/Gear';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter basename="/pov-portfolio">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gallery" element={<Home />} />
        <Route path="/gear" element={<Gear />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
