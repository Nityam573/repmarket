import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import Trade from './pages/Trade';
import Launch from './pages/Launch';
import Rewards from './pages/Rewards';
import UIDemo from './pages/UIDemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Trade />} />
          <Route path="trade" element={<Trade />} />
          <Route path="about" element={<About />} />
          <Route path="launch" element={<Launch />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="ui-demo" element={<UIDemo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
