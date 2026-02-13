import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

import "./ProjectPage.css";
import { SingleProject } from "../../components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";
import { headerData } from "../../data/headerData";

function ProjectPage() {
  const { theme } = useContext(ThemeContext);
  const [search, setSearch] = useState("");

  // ✅ Page title (React 18 friendly)
  useEffect(() => {
    document.title = `${headerData.name} | Projects`;
  }, []);

  const filteredProjects = projectsData.filter((project) => {
    const content =
      project.projectName + project.projectDesc + project.tags.join(" ");
    return content.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="projectPage" style={{ backgroundColor: theme.secondary }}>
      {/* ---------- HEADER ---------- */}
      <div
        className="projectPage-header"
        style={{ backgroundColor: theme.primary }}
      >
        <Link to="/">
          <AiOutlineHome
            className="home-icon"
            style={{ color: theme.secondary }}
          />
        </Link>
        <h1 style={{ color: theme.secondary }}>Projects</h1>
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className="projectPage-container">
        <div className="projectPage-search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search project..."
            className="search-input"
            style={{
              backgroundColor: theme.secondary,
              color: theme.tertiary,
            }}
          />
        </div>

        <div className="project-container">
          <div className="project-grid">
            {filteredProjects.map((project) => (
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
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
