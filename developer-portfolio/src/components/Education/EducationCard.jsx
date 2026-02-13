import { useContext } from "react";
import { motion } from "framer-motion";

import { ThemeContext } from "../../contexts/ThemeContext";

import eduImgWhite from "../../assets/svg/education/eduImgWhite.svg";
import eduImgBlack from "../../assets/svg/education/eduImgBlack.svg";

import "./Education.css";

function EducationCard({ id, institution, course, startYear, endYear }) {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      key={id}
      className="education-card"
      style={{ backgroundColor: theme.primary30 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ backgroundColor: theme.primary50 }}
    >
      <div className="educard-img" style={{ backgroundColor: theme.primary }}>
        <img
          src={theme.type === "light" ? eduImgBlack : eduImgWhite}
          alt={course}
        />
      </div>

      <div className="education-details">
        <h6 style={{ color: theme.primary }}>
          {startYear} - {endYear}
        </h6>
        <h4 style={{ color: theme.tertiary }}>{course}</h4>
        <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>
      </div>
    </motion.div>
  );
}

export default EducationCard;
