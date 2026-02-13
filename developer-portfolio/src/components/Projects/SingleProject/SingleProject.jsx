import { motion } from "framer-motion";
import { FaPlay, FaCode } from "react-icons/fa";

import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
  const slug = name.replace(/\s+/g, "-").toLowerCase();

  return (
    <motion.div
      key={id}
      className="singleProject"
      style={{ backgroundColor: theme.primary400 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="projectContent">
        <h2 id={slug} style={{ color: theme.tertiary }}>
          {name}
        </h2>

        <img src={image || placeholder} alt={name} />

        <div className="project--showcaseBtn">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              aria-label="Live demo"
              className="iconBtn"
              style={{
                border: `2px solid ${theme.tertiary}`,
                color: theme.tertiary,
              }}
            >
              <FaPlay />
            </a>
          )}

          {code && (
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              aria-label="Source code"
              className="iconBtn"
              style={{
                border: `2px solid ${theme.tertiary}`,
                color: theme.tertiary,
              }}
            >
              <FaCode />
            </a>
          )}
        </div>
      </div>

      <p
        className="project--desc"
        style={{
          background: theme.secondary,
          color: theme.tertiary,
        }}
      >
        {desc}
      </p>

      <div
        className="project--lang"
        style={{
          background: theme.secondary,
          color: theme.tertiary80,
        }}
      >
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default SingleProject;
