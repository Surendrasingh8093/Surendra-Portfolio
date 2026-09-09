import { useEffect, useState } from "react";
import api from "../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const response = await api.get("/projects");

      console.log("Projects API:", response.data);

      // If backend returns an array
      setProjects(response.data);

      setError("");
    } catch (error) {
      console.error("Projects Error:", error);

      setError(
        error.response?.data?.message ||
          "Failed to load projects"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="projects">
        <h2>Loading projects...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects">
        <h2>Projects</h2>
        <p>{error}</p>

        <button onClick={fetchProjects}>
          Try Again
        </button>
      </section>
    );
  }

  return (
    <section id="projects">

      <div className="topline">
        <h2>Projects</h2>
      </div>

      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        <div className="projects">

          {projects.map((project) => (
            <div
              className="project-card"
              key={project._id}
            >

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <p>
                <strong>Technologies:</strong>{" "}
                {Array.isArray(project.technologies)
                  ? project.technologies.join(", ")
                  : project.technologies}
              </p>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}

            </div>
          ))}

        </div>
      )}

    </section>
  );
}

export default Projects;