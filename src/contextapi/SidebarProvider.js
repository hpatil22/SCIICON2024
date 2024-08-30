// SidebarContext.js
import React, { createContext, useContext, useState } from 'react';

// Create Context
const SidebarContext = createContext();

// Create a provider component
export const SidebarProvider = ({ children }) => {
  const [selectedSubButton, setSelectedSubButton] = useState(null);
  
  return (
    <SidebarContext.Provider value={{ selectedSubButton, setSelectedSubButton }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Create a custom hook to use the Sidebar context
export const useSidebar = () => useContext(SidebarContext);
