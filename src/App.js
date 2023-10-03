import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import Reviews from './pages/Reviews';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/locations" exact element={<Locations />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/reviews" exact element={<Reviews />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// NOTE:
// Create a description for all the bagels in menu list and generate the descriptions in chatgpt
// Change location background
// Reviews section
// Implement an api somewhere 
 