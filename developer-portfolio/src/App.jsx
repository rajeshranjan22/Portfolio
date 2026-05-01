import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "./contexts/ThemeContext";
import { Main, ProjectPage } from "./pages";
import { BackToTop } from "./components";

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Main />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/skills" element={<Main />} />
        <Route path="/experience" element={<Main />} />
        <Route path="/education" element={<Main />} />
        <Route path="/contact" element={<Main />} />
        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <BackToTop />
    </div>
  );
}

export default App;
