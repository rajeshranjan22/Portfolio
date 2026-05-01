import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/aboutData";
import "./About.css";

function About() {
  const { theme } = useContext(ThemeContext);

  const { title, description1, description2, image } = aboutData;

  return (
    <section
      id="about"
      className="about"
      style={{ backgroundColor: theme.secondary }}
    >
      {/* Top Line Styling */}
      <div className="line-styling">
        <span
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        />
        <span
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        />
        <span
          className="style-line"
          style={{ backgroundColor: theme.primary }}
        />
      </div>

      {/* Main Content */}
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: theme.primary }}>{title}</h2>

          <p style={{ color: theme.tertiary80 }}>{description1}</p>

          <p style={{ color: theme.tertiary80 }}>{description2}</p>
        </div>

        <div className="about-img">
          <img
            src={image === 1 ? theme.aboutimg1 : theme.aboutimg2}
            alt="About illustration"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
