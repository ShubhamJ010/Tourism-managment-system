import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Destinations from "./components/Destinations";
import Book from "./components/Book";
import ExternalRedirect from "./components/ExternalRedirector";
import About from "./pages/About";
import AuthForm from "./components/AuthForm";
import Login from "./components/Login";
import { NavbarProvider } from "./context/NavbarContext";
function App() {
  return (
    <div className="App">
      <Router basename="/Tourism-managment-system">
        <NavbarProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<AuthForm />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/Destinations" element={<Destinations />} />
            <Route path="/Book" element={<Book />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/Er/:loc" element={<ExternalRedirect />} />
          </Routes>
        </NavbarProvider>
      </Router>
    </div>
  );
}

export default App;
