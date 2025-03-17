import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectDetail = ({ project }) => {

  const navigate = useNavigate()

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm mb-3">
            <div className="card-header bg-primary text-white">
              <h2 className="mb-0">{project.title}</h2>
            </div>
            <div className="card-body">
              <div className="text-center mb-3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "300px" }}
                />
              </div>
              <p className="lead">{project.description}</p>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Tipologia del sito:</strong> {project.type.name}
                </li>
                <li className="list-group-item">
                  <strong>Stato:</strong>{" "}
                  <span className="badge bg-success">{project.status}</span>
                </li>

                {project.technologies.length > 0 && (
                  <li className="list-group-item">
                    <strong>Tecnologie usate:</strong>
                    <ul className="mt-2">
                      {project.technologies.map((technology, index) => (
                        <li
                          key={index}
                          className="badge me-1"
                          style={{
                            backgroundColor: technology.color,
                            padding: "5px",
                            color: "#fff",

                          }}
                        >
                          {technology.name}
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
              </ul>

              <div className="mt-3 text-end">
                <button onClick={() => navigate(-1)}
                  className="btn btn-outline-secondary me-2"
                >
                  Torna ai progetti
                </button>
                <a
                  href={project.githubLink}
                  className="btn btn-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vedi su GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
