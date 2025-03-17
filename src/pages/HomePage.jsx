import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  const { projects } = useContext(GlobalContext);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-3">I miei progetti</h1>
      <table className="table table-info">
        <thead>
          <tr className="text-center">
            <th scope="col">Titolo</th>
            <th scope="col">Tecnologie</th>
            <th scope="col">Tipo</th>
            <th scope="col">GitHub</th>
            <th scope="col">Stato</th>
            <th scope="col">Dettagli</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr className="table-primary text-center" key={project.id}>
              <td>{project.title}</td>
              <td>
                <small>
                  {Array.isArray(project.technologies) && project.technologies.length > 0
                    ? project.technologies.map(tech => tech.name).join(', ')
                    : 'Nessuna tecnologia disponibile'}
                </small>
              </td>
              <td>
                {/* Verifica che type esista prima di accedere al suo nome */}
                {project.type ? project.type.name : 'Tipo non disponibile'}
              </td>
              <td>
                <a href={project.github_link} target="_blank" rel="noopener noreferrer">GitHub</a>
              </td>
              <td className={
                project.status === 'Completato' ? 'table-success' :
                  project.status === 'In corso' ? 'table-info' :
                    'table-warning'
              }>
                {project.status}
                {project.status === 'Completato' && <i className="ms-2 fas fa-check-circle" title="Completato"></i>}
                {project.status === 'In corso' && <i className="ms-2 fas fa-spinner fa-spin" title="In corso"></i>}
                {project.status === 'In attesa' && <i className="ms-2 fas fa-hourglass-half" title="In attesa"></i>}
              </td>
              <td>

                {/* Placeholder per i dettagli */}
                <Link to={`/project/${project.id}`} > Visualizza</Link>
              </td>


            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
};

export default ProjectList;
