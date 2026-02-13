import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";

import SingleProject from "./SingleProject/SingleProject";
import "./Projects.css";

function Projects() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {projectsData.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Projects</h1>
          </div>

          <div className="projects--body">
            <div className="projects--bodyContainer">
              {projectsData.slice(0, 3).map((project) => (
                <SingleProject
                  key={project.id}
                  theme={theme}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </div>

            {projectsData.length > 3 && (
              <div className="projects--viewAll">
                <Link to="/projects">
                  <button
                    className="viewAllBtn"
                    style={{
                      color: theme.tertiary,
                      backgroundColor: theme.primary,
                    }}
                  >
                    View All
                    <HiArrowRight
                      className="viewArr"
                      style={{
                        color: theme.tertiary,
                        backgroundColor: theme.secondary70,
                      }}
                    />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
