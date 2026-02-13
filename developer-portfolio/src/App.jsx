import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "./contexts/ThemeContext";
import { Main, ProjectPage } from "./pages";
import {
  About,
  BackToTop,
  Contacts,
  Education,
  Experience,
  Skills,
} from "./components";
import ScrollToTop from "./utils/ScrollToTop";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <BackToTop />
    </div>
  );
}

export default App;
