import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [projects, setProjects] = useState([])


  const fetchProjects = () => {
    axios
      .get(`http://127.0.0.1:8000/api/projects`)

      .then(response => {
        setProjects(response.data)
      })

      .catch(err => {
        console.error(err);
      })
  }
}

useEffect(() => {
  fetchProjects()
}, [])

return <GlobalContext.Provider value={{ projects, fetchProjects }}>
  {children}
</GlobalContext.Provider>

