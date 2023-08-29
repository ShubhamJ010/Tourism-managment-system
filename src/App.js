
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Destinations from './components/Destinations';
import Book from './components/Book';


function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/Navbar" element={<Navbar />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/Destinations" element={<Destinations />} />
          <Route path="/Book" element={<Book />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;