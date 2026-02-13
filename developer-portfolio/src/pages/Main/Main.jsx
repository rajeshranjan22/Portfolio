import { Helmet } from "react-helmet-async";

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
  // Services,
  // Achievement,
} from "../../components";

import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Portfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      {/* <Achievement />
      <Services /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
