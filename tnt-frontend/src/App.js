import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Destinations from "./components/Destinations";
import Book from "./pages/Book";
import ExternalRedirect from "./components/ExternalRedirector";
import About from "./pages/About";
import AuthForm from "./pages/AuthForm";
import Login from "./pages/Login";
import { NavbarProvider } from "./context/NavbarContext";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Tourism-managment-system/">
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
      </BrowserRouter>
    </div>
  );
}

export default App;
