import { useState, useContext, useEffect } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

import { ThemeContext } from "../../contexts/ThemeContext";
import "./BackToTop.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(document.documentElement.scrollTop > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="backToTop">
      <button onClick={scrollToTop} aria-label="Back to top">
        <IoIosArrowDropupCircle size={48} style={{ color: theme.tertiary }} />
      </button>
    </div>
  );
}

export default BackToTop;
