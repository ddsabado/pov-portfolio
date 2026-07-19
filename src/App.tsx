import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Gear from './pages/Gear';

const App = () => {
  return (
    <BrowserRouter basename="/pov-portfolio">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gallery" element={<Home />} />
        <Route path="/gear" element={<Gear />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
