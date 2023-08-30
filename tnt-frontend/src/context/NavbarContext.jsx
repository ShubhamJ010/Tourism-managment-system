// NavbarContext.js
import { createContext, useContext, useState } from "react";
// import { useLocation } from "react-router";

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  //   const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <NavbarContext.Provider value={{ showNavbar, setShowNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => useContext(NavbarContext);
