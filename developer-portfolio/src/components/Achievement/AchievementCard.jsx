import { useContext } from "react";
import { motion } from "framer-motion";
import { AiOutlineFolder } from "react-icons/ai";

import { ThemeContext } from "../../contexts/ThemeContext";
import "./Achievement.css";

function AchievementCard({ id, title, details, date, field, image }) {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      key={id}
      className="achievement-card"
      style={{ backgroundColor: theme.primary30 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ backgroundColor: theme.primary50 }}
    >
      <div className="achievecard-content">
        <div className="achievecard-details1">
          <h2 style={{ color: theme.tertiary }}>{title}</h2>
          <p style={{ color: theme.tertiary80 }}>{details}</p>
        </div>

        <div className="achievecard-details2" style={{ color: theme.primary }}>
          <h5>{date}</h5>
          <div className="achievecard-field">
            <AiOutlineFolder />
            <h5>{field}</h5>
          </div>
        </div>
      </div>

      <div className="achievecard-imgcontainer">
        <img src={image} alt={title} />
      </div>
    </motion.div>
  );
}

export default AchievementCard;
