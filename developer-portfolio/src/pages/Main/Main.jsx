import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import {
  Navbar,
  Landing,
  About,
  Skills,
  Education,
  Experience,
  Contacts,
  Projects,
  Footer,
} from "../../components";

import { headerData } from "../../data/headerData";

function Main() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";

    const el = document.getElementById(path);

    if (el) {
      const yOffset = -80; // adjust navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Portfolio</title>
      </Helmet>

      <Navbar />

      <section id="home">
        <Landing />
      </section>

      <section id="about">
        <About />
      </section>

      <Projects />

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="contact">
        <Contacts />
      </section>

      <Footer />
    </div>
  );
}

export default Main;
