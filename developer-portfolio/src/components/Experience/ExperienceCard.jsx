import { useContext } from "react";
import { motion } from "framer-motion";

import { ThemeContext } from "../../contexts/ThemeContext";

import expImgWhite from "../../assets/svg/experience/expImgWhite.svg";
import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";

import "./Experience.css";

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      key={id}
      className="experience-card"
      style={{ backgroundColor: theme.primary30 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ backgroundColor: theme.primary50 }}
    >
      <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
        <img
          src={theme.type === "light" ? expImgBlack : expImgWhite}
          alt={`${company} logo`}
        />
      </div>

      <div className="experience-details">
        <h6 style={{ color: theme.primary }}>
          {startYear} – {endYear}
        </h6>
        <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
        <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;
