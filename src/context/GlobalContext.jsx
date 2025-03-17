import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    axios
      .get(`http://127.0.0.1:8000/api/projects`)
      .then(response => {
        setProjects(response.data.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []); // Assicurati di avere le parentesi quadre qui per eseguire l'effetto solo all'avvio

  return (
    <GlobalContext.Provider value={{ projects, fetchProjects }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
