import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";

import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";

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
          {/* HEADER */}
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Projects</h1>
          </div>

          {/* BODY */}
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
                <Button
                  component={Link}
                  to="/projects"
                  sx={{
                    color: theme.tertiary,
                    backgroundColor: theme.primary,
                    width: "150px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textTransform: "inherit",
                    borderRadius: "45px",
                    fontSize: "1.05rem",
                    fontFamily: "var(--primaryFont)",
                    fontWeight: 500,
                    paddingLeft: "1.5rem",
                    paddingRight: "0.5rem",
                    transition: "color 0.2s",

                    "&:hover": {
                      color: theme.secondary,
                      backgroundColor: theme.primary,
                    },

                    "& .viewArr": {
                      color: theme.tertiary,
                      backgroundColor: theme.secondary70,
                      width: "40px",
                      height: "40px",
                      padding: "0.5rem",
                      fontSize: "1.05rem",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background-color 0.2s",
                    },

                    "& .viewArr:hover": {
                      backgroundColor: theme.secondary,
                      color: theme.tertiary,
                    },
                  }}
                >
                  <span>View All</span>

                  <Box className="viewArr">
                    <HiArrowRight />
                  </Box>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
