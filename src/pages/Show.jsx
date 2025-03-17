import { useParams } from "react-router-dom";
import Details from "../components/Details";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";

export default function Show() {
  const { id } = useParams();
  const { projects } = useContext(GlobalContext);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProject = () => {
    setLoading(true);
    setError(null);
    axios.get(`http://127.0.0.1:8000/api/projects/${id}`)
      .then(response => {
        setProject(response.data.data);
      })
      .catch(err => {
        console.error(err);
        setError("Impossibile caricare il progetto.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProject();
  }, [id]); // Solo id come dipendenza

  if (loading) return <h2>Caricamento...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!project) return <h2>Progetto non trovato.</h2>;

  return (
    <>
      <Details project={project} />
    </>
  );
}
